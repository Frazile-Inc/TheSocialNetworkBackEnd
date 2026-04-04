import RootLayout from "@/component/layout/Layout";
import Button from "@/extra/Button";
import React, { use, useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { RootStore, useAppDispatch } from "@/store/store";
import { openDialog } from "@/store/dialogSlice";
import { usePermission } from "@/hooks/usePermission";
import { useSelector } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import CreateLiveVideo from "@/component/liveVideo/CreateLiveVideo";
import Table from "@/extra/Table";
import {
  activeVideo,
  deleteLiveFakeVideo,
  getLiveVideo,
} from "@/store/liveVideoSlice";
import Pagination from "@/extra/Pagination";
import NewTitle from "../extra/Title";
import { baseURL } from "@/util/config";
import VideoDialogue from "@/component/video/VideoDialogue";
import EditIcon from "../assets/icons/EditBtn.svg";
import Image from "next/image";
import ToggleSwitch from "@/extra/ToggleSwitch";
import { warning } from "@/util/Alert";
import TrashIcon from "@/assets/icons/trashIcon.svg";
import { useRouter } from "next/router";
import {
  IconCaretDown,
  IconEdit,
  IconTrash,
  IconVideo,
  IconCopy,
} from "@tabler/icons-react";
import { Menu, MenuItem } from "@mui/material";
import CreatePKLiveVideo from "@/component/liveVideo/CreatePKLiveVideo";
import { toast } from "react-toastify";

export default function liveVideo() {
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const dispatch = useAppDispatch();
  const { dialogueType } = useSelector((state: RootStore) => state.dialogue);
  const [startDate, setStartDate] = useState<string>("All");
  const [endDate, setEndDate] = useState<string>("All");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [type, setType] = useState<any>("All");
  const { liveVideoData, totalLiveVideo } = useSelector(
    (state: RootStore) => state.liveVideo,
  );

  const { can } = usePermission();

  const canCreate = can("Live Video", "Create");
  const canEdit = can("Live Video", "Edit");
  const canDelete = can("Live Video", "Delete");
  const canList = can("Live Video", "List");



  const router = useRouter();

  useEffect(() => {
    if (canList) {
      const payload: any = {
        start: page,
        limit: size,
        startDate: startDate,
        endDate: endDate,
        type: "liveVideo",
        liveStreamMode: type,
      };
      dispatch(getLiveVideo(payload));
    }
  }, [dispatch, page, size, startDate, endDate, type, canList]);

  const selectType = (type: any) => {
    let payload: any = {
      startDate: "All",
      endDate: "All",
      type: type,
    };
    setType(type);
  };

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
          dispatch(deleteLiveFakeVideo(row?._id));
        }
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (row: any, type: any) => {
    router.push({
      pathname: "/viewProfile",
      query: { id: row?.userId, type: "ViewFakeUser" },
    });
  };

  const copyToClipboard = (Text) => {
    navigator?.clipboard?.writeText(Text);
    toast.success("Copied to clipboard");
  };

  const liveVideoTable = [
    {
      Header: "NO",
      body: "name",
      Cell: ({ index }: { index: number }) => (
        <span>{(page - 1) * size + index + 1}</span>
      ),
    },

    // {
    //   Header: "User",
    //   // HeaderClass: "justify-content-start",
    //   body: "name",
    //   Cell: ({ row }) => (
    //     <div
    //       className="d-flex align-items-center gap-3 "
    //       style={{ cursor: "pointer", paddingLeft: "35%"}}
    //       onClick={() => handleEdit(row, "manageUser")}
    //     >
    //       <img src={row?.userImage} width="50px" height="50px" />

    //       <div style={{ width: "200px", textAlign: "start" }}>
    //         <div className="text-capitalize">{row?.name}</div>
    //         <div className="text-capitalize">{row?.uniqueId}</div>
    //       </div>
    //     </div>
    //   ),
    // },

    {
      Header: "User",
      body: "name",
      Cell: ({ row }) => (
        <div
          className="user35-cell d-flex align-items-center gap-3"
          style={{ cursor: "pointer", paddingLeft: "35%" }}
          onClick={() => handleEdit(row, "manageUser")}
        >
          <img
            className="user35-img"
            src={row?.userImage}
            width="50px"
            height="50px"
            onError={(e) => {
              e.currentTarget.src = "/images/user.png";
            }}
          />

          <div
            className="user35-text"
            style={{ width: "200px", textAlign: "start" }}
          >
            <div
              className="text-capitalize"
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
              className="text-capitalize"
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
      Header: "Streaming Type",
      body: "streaming_tpye",
      Cell: ({ row }) => (
        <span className="text-capitalize ms-3 cursorPointer text-nowrap">
          {row?.liveStreamMode === 1 ? (
            <span className=" badge-primary">Normal Live</span>
          ) : (
            <span className="badge-warning">PK Live</span>
          )}
        </span>
      ),
    },

    {
      Header: "Live Status",
      body: "isActive",
      sorting: { type: "client" },
      Cell: ({ row }: { row: any }) => (
        <>
          {canEdit && (
            <ToggleSwitch
              value={row?.isLive}
              onClick={() => {

                const id: any = row?._id;
                dispatch(activeVideo(id));
              }}
            />
          )}
        </>
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
              >
                {/* <IconVideo /> */}
              </Button>
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
                  if (row.liveStreamMode === 1) {
                    handleOpenModel("liveVideo", row);
                  } else {
                    handleOpenModel("pkliveVideo", row);
                  }
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

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenModel = (type: any, data = null) => {
    dispatch(openDialog({ type, data }));
    setAnchorEl(null);
  };

  return (
    <>
      <div className="userPage channelPage">
        <div>
          <div className="dashboardHeader primeHeader mb-3">
            <NewTitle
              dayAnalyticsShow={true}
              setEndDate={setEndDate}
              setStartDate={setStartDate}
              startDate={startDate}
              endDate={endDate}
              name={`liveVideo`}
            />
          </div>
        </div>
        {dialogueType == "pkliveVideo" && <CreatePKLiveVideo />}
        {dialogueType == "liveVideo" && <CreateLiveVideo />}
        {dialogueType == "viewVideo" && <VideoDialogue />}
        <div>
          <div className="user-table">
            <div className="user-table-top livevideo-table-top">
              <div className="row align-items-center w-100">
                <div className="col-6 livevideo-title">
                  <h5
                    style={{
                      fontWeight: "500",
                      fontSize: "20px",
                      marginTop: "5px",
                      marginBottom: "4px",
                    }}
                  >
                    Live Video (Fake)
                  </h5>
                </div>
                <div
                  className="col-6 livevideo-actions d-flex justify-content-end align-items-center gap-2"
                  style={{ paddingRight: "0px", paddingTop: "px" }}
                >
                  <div className="w-25 livevideo-select">
                    <select
                      name=""
                      id=""
                      className="form-select"
                      value={type}
                      onChange={(e) =>
                        selectType(
                          e.target.value === "All"
                            ? "All"
                            : parseInt(e.target.value),
                        )
                      }
                    >
                      <option value="All"> All</option>
                      <option value={1}> Normal Live</option>
                      <option value={2}> PK Live</option>
                    </select>
                  </div>
                  <div className="livevideo-newbtn">
                    <div className="new-fake-btn d-flex ">
                      {/* <Button
                      btnIcon={<AddIcon />}
                      btnName={"New"}
                      onClick={() => {
                        dispatch(openDialog({ type: "liveVideo" }));
                      }}
                    /> */}

                      {canCreate && (
                        <Button
                          id="demo-customized-button"
                          aria-controls={
                            open ? "demo-customized-menu" : undefined
                          }
                          aria-haspopup="true"
                          className="newMuiButton"
                          aria-expanded={open ? "true" : undefined}
                          variant="contained"
                          disableElevation
                          onClick={handleClick}
                          btnIcon={<AddIcon />}
                          btnName={"New"}
                        >
                          New
                        </Button>
                      )}
                      <Menu
                        id="demo-customized-menu"
                        MenuListProps={{
                          "aria-labelledby": "demo-customized-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem
                          onClick={() => handleOpenModel("liveVideo")}
                          disableRipple
                        >
                          Normal Live
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleOpenModel("pkliveVideo")}
                          disableRipple
                        >
                          PK Battle Live
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {canList && (
              <>
                <Table
                  data={liveVideoData}
                  mapData={liveVideoTable}
                  serverPerPage={size}
                  serverPage={page}
                  type={"server"}
                />

                <Pagination
                  type={"server"}
                  activePage={page}
                  rowsPerPage={size}
                  userTotal={totalLiveVideo}
                  setPage={setPage}
                  handleRowsPerPage={handleRowsPerPage}
                  handlePageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

liveVideo.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
