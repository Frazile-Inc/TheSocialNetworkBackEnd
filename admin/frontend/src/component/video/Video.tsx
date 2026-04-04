import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrashIcon from "../../assets/icons/trashIcon.svg";
import EditIcon from "../../assets/icons/EditBtn.svg";
import Pagination from "../../extra/Pagination";
import Button from "../../extra/Button";
import Table from "../../extra/Table";
import dayjs from "dayjs";
import { openDialog } from "../../store/dialogSlice";
import { warning } from "../../util/Alert";
import { allVideo, deleteFakeVideo } from "../../store/videoSlice";
import { RootStore, useAppDispatch } from "../../store/store";
import Image from "next/image";
import { useRouter } from "next/router";
import { baseURL } from "@/util/config";
import useClearSessionStorageOnPopState from "@/extra/ClearStorage";
import { usePermission } from "@/hooks/usePermission";
import VideoDialogue from "./VideoDialogue";
import FakeVideo from "./FakeVideo";
import CreateFakeVideo from "./CreateFakeVideo";
import { IconEdit, IconTrash, IconVideo, IconCopy } from "@tabler/icons-react";
import NoImage from "../../assets/images/noImage.png";
import NoImageUser from "../../assets/images/user.png";
import Searching from "@/extra/Searching";
import { toast } from "react-toastify";

interface VideoProps {
  startDate: string;
  endDate: string;
}

const Video: React.FC<VideoProps> = (props) => {
  const router = useRouter();
  const { realVideo, totalRealVideo } = useSelector(
    (state: RootStore) => state.video,
  );
  const { dialogueType, dialogueData } = useSelector(
    (state: RootStore) => state.dialogue,
  );

  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);
  const [selectCheckData, setSelectCheckData] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const { can } = usePermission();

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
        type: "realVideo",
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
    setData(realVideo);
  }, [realVideo]);

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
      query: { id: row?.userId },
    });

    localStorage.setItem("postData", JSON.stringify(row));
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
    //     <div
    //       className="text-capitalize userText d-flex align-items-center gap-2"
    //       style={{
    //         cursor: "pointer",
    //         paddingLeft: "20%"
    //       }}
    //       onClick={() => handleEdit(row)}
    //     >
    //       <img
    //         src={row?.userImage}
    //         width="50px"
    //         height="50px"
    //         onError={(e) => {
    //           e.currentTarget.src = "/images/user.png";
    //         }}
    //       />
    //       <div className="text-start">
    //         <div className="text-capitalize  ms-3 cursorPointer text-nowrap">
    //           {row?.name}
    //         </div>
    //         <div className="text-capitalize  ms-3 cursorPointer text-nowrap">
    //           {row?.uniqueId}
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },

    {
      Header: "User",
      body: "name",
      Cell: ({ row }: { row: any }) => (
        <div
          className="user1420-cell text-capitalize userText d-flex align-items-center gap-2"
          onClick={() => handleEdit(row)}
        >
          <img
            className="user1420-img"
            src={row?.userImage}
            width="50px"
            height="50px"
            onError={(e) => {
              e.currentTarget.src = "/images/user.png";
            }}
          />

          <div className="user1420-text text-start">
            <div
              className="user1420-name text-capitalize ms-3 cursorPointer text-nowrap"
              style={{ color: "#5f6870", fontWeight: 400 }}
            >
              {row?.name}
              <IconCopy
                size={16}
                className="ms-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(row?.name);
                }}
              />
            </div>
            <div
              className="user1420-name text-capitalize ms-3 cursorPointer text-nowrap"
              style={{ color: "#5f6870", fontWeight: 400 }}
            >
              {row?.userName}
              <IconCopy
                size={16}
                className="ms-1"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(row?.userName);
                }}
              />
            </div>
            <div
              className="user1420-id text-capitalize ms-3 cursorPointer text-nowrap"
              style={{ color: "#495057", fontWeight: 400 }}
            >
              {row?.uniqueId}
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
        <span className="text-capitalize">{row?.totalLikes}</span>
      ),
    },

    {
      Header: "Comments",
      body: "Comments",
      Cell: ({ row }: { row: any }) => (
        <span className="text-capitalize">{row?.totalComments}</span>
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
    ...(canEdit || canDelete ? [
      {
        Header: "Action",
        body: "action",
        Cell: ({ row }: { row: any }) => (
          <div className="action-button">
            {canEdit && (
              <Button
                btnIcon={<IconEdit className="text-secondary icon-class" />}
                onClick={() => {
                  dispatch(openDialog({ type: "realVideo", data: row }));
                }}
              />
            )}
            {canDelete && (
              <Button
                btnIcon={<IconTrash className="text-secondary icon-class" />}
                onClick={() => handleDeleteVideo(row)}
              />
            )}
          </div>
        ),
      }] : []),
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

  return (
    <div>
      <div className="user-table mb-3">
        {dialogueType == "viewVideo" && <VideoDialogue />}
        {dialogueType == "realVideo" && <CreateFakeVideo />}

        <div className="user-table-top video-table-top">
          <div className="row align-items-start">
            <div className="col-6 w-100">
              <h5
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  marginTop: "5px",
                  marginBottom: "4px",
                }}
              >
                Video
              </h5>
            </div>
          </div>
          <Searching
            placeholder="Search by Name, Username..."
            type="server"
            setSearchData={setSearch}
            searchValue={search}
            actionShow={false}
            button={false}
            newClass=""
          />
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
            userTotal={totalRealVideo}
            setPage={setPage}
            handleRowsPerPage={handleRowsPerPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
