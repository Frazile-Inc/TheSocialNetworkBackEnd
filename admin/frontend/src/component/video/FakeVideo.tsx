import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrashIcon from "../../assets/icons/trashIcon.svg";
import EditIcon from "../../assets/icons/EditBtn.svg";
import Pagination from "../../extra/Pagination";
import Button from "../../extra/Button";
import Table from "../../extra/Table";
import dayjs from "dayjs";
import { RootStore, useAppDispatch } from "../../store/store";
import { openDialog } from "../../store/dialogSlice";
import AddIcon from "@mui/icons-material/Add";
import { warning } from "../../util/Alert";
import { allVideo, deleteFakeVideo } from "../../store/videoSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { baseURL } from "@/util/config";
import useClearSessionStorageOnPopState from "@/extra/ClearStorage";
import { usePermission } from "@/hooks/usePermission";
import VideoDialogue from "./VideoDialogue";
import { IconEdit, IconTrash, IconVideo, IconCopy } from "@tabler/icons-react";
import NoImage from "../../assets/images/noImage.png";
import NoImageUser from "../../assets/images/user.png";
import Searching from "@/extra/Searching";
import { toast } from "react-toastify";

interface FakeVideoProps {
  startDate: string;
  endDate: string;
}

const FakeVideo: React.FC<FakeVideoProps> = (props) => {
  const router = useRouter();
  const { fakeVideoData, totalFakeVideo } = useSelector(
    (state: RootStore) => state.video,
  );
  const { dialogueType } = useSelector((state: RootStore) => state.dialogue);

  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);
  const [selectCheckData, setSelectCheckData] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const { can } = usePermission();

  const canCreate = can("Videos", "Create");
  const canEdit = can("Videos", "Edit");
  const canDelete = can("Videos", "Delete");
  const canList = can("Videos", "List");

  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [search, setSearch] = useState<string>("");
  useClearSessionStorageOnPopState("multiButton");



  const { startDate, endDate } = props;

  useEffect(() => {
    if (canList) {
      const payload: any = {
        type: "fakeVideo",
        start: page,
        limit: size,
        startDate: startDate,
        endDate: endDate,
        search: search ?? "",
      };
      dispatch(allVideo(payload));
    }
  }, [page, size, startDate, endDate, search, canList]);

  useEffect(() => {
    setData(fakeVideoData);
  }, [fakeVideoData]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const handleSelectCheckData = (
    e: React.ChangeEvent<HTMLInputElement>,
    row: any,
  ) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectCheckData((prevSelectedRows) => [...prevSelectedRows, row]);
    } else {
      setSelectCheckData((prevSelectedRows) =>
        prevSelectedRows.filter((selectedRow) => selectedRow._id !== row._id),
      );
    }
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setSelectAllChecked(checked);
    if (checked) {
      setSelectCheckData([...data]);
    } else {
      setSelectCheckData([]);
    }
  };

  const handleEdit = (row: any) => {
    router.push({
      pathname: "/viewProfile",
      query: { id: row?.userId, type: "ViewFakeUser" },
    });

    localStorage.setItem("postData", JSON.stringify(row));
    localStorage.removeItem("multiButton");
  };

  const copyToClipboard = (Text) => {
    navigator?.clipboard?.writeText(Text);
    toast.success("Copied to clipboard");
  };

  const videoTable = [
    {
      Header: "NO",
      body: "name",
      Cell: ({ index }: { index: number }) => (
        <span>{(page - 1) * size + index + 1}</span>
      ),
    },

    {
      Header: "Image",
      body: "videoImage",
      Cell: ({ row }: { row: any }) => (
        <img
          src={row?.videoImage}
          width="50px"
          height="50px"
          alt="Video Image"
          onError={(e) => {
            e.currentTarget.src = "/images/user.png";
          }}
        />
      ),
    },
    // {
    //   Header: "User",
    //   body: "name",
    //   Cell: ({ row }: { row: any }) => (
    //     <>
    //       <div
    //         className="text-capitalize userText fw-bold d-flex align-items-center gap-2"
    //         style={{
    //           cursor: "pointer",
    //           paddingLeft: "25%",
    //         }}
    //         onClick={() => handleEdit(row)}
    //       >
    //         <img
    //           src={row?.userImage}
    //           width="50px"
    //           height="50px"
    //           style={{ marginRight: "10px" }}
    //           onError={(e) => {
    //             e.currentTarget.src = "/images/user.png";
    //           }}
    //         />
    //         <div className="text-start">
    //           <div
    //             className="text-capitalize userText "
    //             style={{
    //               cursor: "pointer",
    //             }}
    //           >
    //             {row?.name || row?.userId?.name}
    //           </div>
    //           <div
    //             className="text-capitalize userText "
    //             style={{
    //               cursor: "pointer",
    //             }}
    //           >
    //             {row?.uniqueId || row?.userId?.uniqueId}
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ),
    // },

    {
      Header: "User",
      body: "name",
      Cell: ({ row }: { row: any }) => (
        <div
          className="user25-cell text-capitalize userText fw-bold d-flex align-items-center gap-2"
          style={{ cursor: "pointer", paddingLeft: "25%" }}
          onClick={() => handleEdit(row)}
        >
          <img
            className="user25-img"
            src={row?.userImage}
            width="50px"
            height="50px"
            style={{ marginRight: "10px" }}
            onError={(e) => {
              e.currentTarget.src = "/images/user.png";
            }}
          />

          <div className="user25-text text-start">
            <div
              className="user25-name text-capitalize userText"
              style={{ color: "#5f6870", fontWeight: 400 }}
            >
              {row?.name || row?.userId?.name}
              <IconCopy
                size={16}
                className="ms-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(row?.name || row?.userId?.name);
                }}
              />
            </div>
            <div
              className="user25-name text-capitalize userText"
              style={{ color: "#5f6870", fontWeight: 400 }}
            >
              {row?.userName || row?.userId?.userName}
              <IconCopy
                size={16}
                className="ms-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(row?.userName || row?.userId?.userName);
                }}
              />
            </div>
            <div
              className="user25-id text-capitalize userText"
              style={{ color: "#495057", fontWeight: 400 }}
            >
              {row?.uniqueId || row?.userId?.uniqueId}{" "}
              <IconCopy
                size={16}
                className="ms-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(row?.uniqueId);
                }}
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      Header: "Unique ID",
      body: "uniqueId",
      Cell: ({ row }: { row: any }) => (
        <span
          className="text-capitalize"
          style={{ color: "#495057", fontWeight: 400 }}
        >
          {row?.uniqueVideoId}
          <IconCopy
            size={16}
            className="ms-1"
            style={{ cursor: "pointer" }}
            onClick={() => copyToClipboard(row?.uniqueVideoId)}
          />
        </span>
      ),
    },

    {
      Header: "Likes",
      body: "totalLikes",
      Cell: ({ row }: { row: any }) => (
        <span className="text-capitalize">
          {row?.totalLikes ? row?.totalLikes : 0}
        </span>
      ),
    },

    {
      Header: "Comments",
      body: "totalLikes",
      Cell: ({ row }: { row: any }) => (
        <span className="text-capitalize">
          {row?.totalComments ? row?.totalComments : 0}
        </span>
      ),
    },
    {
      Header: "Date",
      body: "createdAt",
      Cell: ({ row }: { row: any }) => (
        <span className="text-capitalize">
          {row?.createdAt ? dayjs(row?.createdAt).format("DD MMMM YYYY , hh:mm A") : ""}
        </span>
      ),
    },

    {
      Header: "Video",
      body: "video",
      Cell: ({ row }: { row: any }) => (
        <>
          <div className="action-button">
            {canList && (
              <Button
                btnIcon={<IconVideo className="text-secondary icon-class" />}
                onClick={() =>
                  dispatch(openDialog({ type: "viewVideo", data: row }))
                }
              />
            )}
          </div>
        </>
      ),
    },
    ...(canEdit || canDelete
      ? [
        {
          Header: "Action",
          body: "action",
          Cell: ({ row }: { row: any }) => (
            <div className="action-button">
              {canEdit && (
                <Button
                  btnIcon={<IconEdit className="text-secondary icon-class" />}
                  onClick={() => {
                    dispatch(openDialog({ type: "fakeVideo", data: row }));
                  }}
                />
              )}
              {canDelete && (
                <Button
                  btnIcon={
                    <IconTrash className="text-secondary icon-class" />
                  }
                  onClick={() => handleDeleteVideo(row)}
                />
              )}
            </div>
          ),
        },
      ]
      : []),
  ];

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleRowsPerPage = (value: number) => {
    setPage(1);
    setSize(value);
  };

  const handleDeleteVideo = (row: any) => {

    const data = warning();
    data
      .then((logouts: any) => {
        const yes = logouts;
        if (yes) {
          dispatch(deleteFakeVideo(row?._id));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOpenDialog = (type, data = null) => {
    dispatch(openDialog({ type, data }));
  };

  return (
    <div>
      <div className="user-table mb-3">
        {dialogueType == "viewVideo" && <VideoDialogue />}

        {/* <div className="user-table-top gap-2">
          <div className="row align-items-start w-100">
            <div className="col-6">
              <h5
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  marginTop: "5px",
                  marginBottom: "4px",
                }}
              >
                Fake Video
              </h5>
            </div>
          </div>
          <Searching
            placeholder="Search Here"
            type="server"
            setSearchData={setSearch}
            searchValue={search}
            actionShow={false}
            button={false}
            newClass=""
          />
          <div className="d-flex justify-content-end">
            <div className="ms-auto ">
              <div className="new-fake-btn d-flex ">
                <Button
                  btnIcon={<AddIcon />}
                  btnName={"New"}
                  onClick={() => {
                    dispatch(openDialog({ type: "fakeVideo" }));
                  }}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="user-table-top gap-2 fakevideo-table-top">
          {/* Title Row */}
          <div className="w-100">
            <h5
              style={{
                fontWeight: "500",
                fontSize: "20px",
                marginTop: "5px",
                marginBottom: "4px",
              }}
            >
              Fake Video
            </h5>
          </div>

          {/* Search + New Row */}
          <div className="fakevideo-actions">
            <Searching
              placeholder="Search by Name, Username..."
              type="server"
              setSearchData={setSearch}
              searchValue={search}
              actionShow={false}
              button={false}
              newClass=""
            />

            {canCreate && (
              <div className="new-fake-btn d-flex">
                <Button
                  btnIcon={<AddIcon />}
                  btnName={"New"}
                  onClick={() => {
                    handleOpenDialog("fakeVideo");
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <Table
          data={data}
          mapData={videoTable}
          serverPerPage={size}
          serverPage={page}
          handleSelectAll={handleSelectAll}
          selectAllChecked={selectAllChecked}
          type={"server"}
        />
        <div className="mt-3">
          <Pagination
            type={"server"}
            activePage={page}
            rowsPerPage={size}
            userTotal={totalFakeVideo}
            setPage={setPage}
            handleRowsPerPage={handleRowsPerPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FakeVideo;
