import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Api from "./api.json";

const Room = () => {
  document.title = "Manage Room";
  const API = `${Api.api}/api/room`;

  const [isData, setData] = useState([]);
  const [isCurrentPage, setCurrentPage] = useState(1);
  const isPostPerPage = 8;
  const [isID, setID] = useState("");
  const [isJumpTo, setJumpTo] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [isVisibleUpdate, setVisibleUpdate] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isRoom, setRoom] = useState("");
  const [isError, setError] = useState(false);
  const [isErroru, setErroru] = useState(false);
  const pageNumbers = [];
  const [isTempRoom, setTempRoom] = useState("");
  const [isExist, setExist] = useState(false);

  const UpdateData = async () => {
    const GetRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    await fetch(API, GetRequest)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const AbortCntrlr = new AbortController();

    const GetRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    fetch(API, GetRequest, { signal: AbortCntrlr.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));

    return () => AbortCntrlr.abort();
  }, [API]);

  const indexOfLastData = isCurrentPage * isPostPerPage;
  const indexOfFirstData = indexOfLastData - isPostPerPage;
  const currentData = isData.slice(indexOfFirstData, indexOfLastData);

  for (
    let index = 1;
    index <= Math.ceil(isData.length / isPostPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  const paginate = (pageNumber) => {
    if (pageNumber <= 0) return;
    if (pageNumber >= pageNumbers.length + 1) return;
    setCurrentPage(pageNumber);
  };

  const goPaginate = (pageNumber) => {
    if (pageNumber !== "") {
      setCurrentPage(isJumpTo);
      setJumpTo("");
    }
  };

  const HandleDelete = async (id) => {
    setID(id);
    setVisible(true);
  };

  const HandleConfirm = async () => {
    const raw = JSON.stringify({
      _id: isID,
    });

    const RequestDelete = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: raw,
      redirect: "follow",
    };

    await fetch(API, RequestDelete)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => {
        if (result.message === "OK") {
          UpdateData();
          setVisible(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const HandleModalDelete = () => {
    return (
      <div className="room-modal">
        <div className="modal-wrap">
          <div className="title">Message</div>
          <div className="modal-des">
            <div className="content">Are you sure to delete this Room?</div>
          </div>
          <div className="btns">
            <div className="btn yes" onClick={() => HandleConfirm()}>
              Yes
            </div>
            <div className="btn cancel" onClick={() => setVisible(false)}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HandleModalUpdate = () => {
    const [isRoomUpdate, setRoomUpdate] = useState("");
    return (
      <div className="room-modal">
        <div className="modal-wrap">
          <div className="title">Update</div>
          <div className="modal-desc">
            <div className="mod-wrap">
              <div className="titled">Room</div>
              <input
                type="text"
                placeholder="Room"
                value={isRoomUpdate}
                onChange={(data) => setRoomUpdate(data.target.value)}
              />
            </div>
            {isErroru ? (
              <div className="error">Don't leave this blank before saving</div>
            ) : undefined}
          </div>
          <div className="btns">
            <div
              className="btn yes"
              onClick={() => HandleConfirmUpdate(isRoomUpdate)}
            >
              Yes
            </div>
            <div
              className="btn cancel"
              onClick={() => {
                setVisibleUpdate(false);
                setErroru(false);
              }}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HandleUpdate = (id, room) => {
    setTempRoom(room);
    setID(id);
    setVisibleUpdate(true);
  };

  const HandleConfirmUpdate = (isRoomUpdate) => {
    if (!isRoomUpdate) return setErroru(true);
    setErroru(false);

    const raw = JSON.stringify({
      _id: isID,
      room: isRoomUpdate,
      oldroom: isTempRoom,
    });

    const PatchRequest = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: raw,
      redirect: "follow",
    };

    fetch(API, PatchRequest)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => {
        if (result.message === "OK") {
          UpdateData();
          setVisibleUpdate(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const HandleClear = () => {
    setRoom("");
  };

  const HandleSaveRoom = async () => {
    if (!isRoom) return setError(true);
    setError(false);

    setLoading(true);
    const raw = JSON.stringify({
      room: isRoom,
    });

    const PostRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: raw,
      redirect: "follow",
    };

    await fetch(API, PostRequest)
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "OK") {
          UpdateData();
          setRoom("");
          setLoading(false);
          setExist(false);
          return;
        }

        setExist(true);
        setRoom("");
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      {isVisible ? <HandleModalDelete /> : undefined}
      {isVisibleUpdate ? <HandleModalUpdate /> : undefined}
      {isLoading ? <div className="Loading" /> : undefined}
      <div className="mg-con">
        <div className="con-left">
          <div className="t-itle">Room</div>
          <div className="wrapper">
            <div className="inputs">
              <input
                type="text"
                placeholder="Room"
                value={isRoom}
                onChange={(data) => setRoom(data.target.value)}
              />
              {isError ? (
                <div className="error">
                  Don't leave this blank before saving
                </div>
              ) : undefined}
              {isExist ? (
                <div className="error">Room is already listed.</div>
              ) : undefined}
              <div className="bns">
                <div className="btn clear" onClick={() => HandleClear()}>
                  Clear
                </div>
                <div className="btn add" onClick={() => HandleSaveRoom()}>
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="con-right">
          <div className="title">
            <div>Room</div>
            <div>Action</div>
          </div>
          <div className="table">
            <div className="table-con-data">
              {isData.length !== 0 ? (
                <>
                  {currentData.map((data, index) => {
                    return (
                      <div key={index} className="table-data">
                        <div className="room-name">{data.room}</div>
                        <div className="action">
                          <div
                            className="del"
                            onClick={() => HandleDelete(data._id)}
                          >
                            <FaTrashAlt color="white" size={17} />
                            <span>Delete</span>
                          </div>
                          <div
                            className="upd"
                            onClick={() => HandleUpdate(data._id, data.room)}
                          >
                            <FaEdit color="white" size={17} />
                            <span>Update</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className="no-data">NO DATA</div>
                </>
              )}
            </div>
            <div className="pagination">
              <div
                className="btn-prev"
                onClick={() => paginate(isCurrentPage - 1)}
              >
                Previous
              </div>
              <span className="page">page</span>
              <div className="counter-display">
                <input
                  type="text"
                  value={isJumpTo}
                  onChange={(data) => setJumpTo(data.target.value)}
                  placeholder={`${isCurrentPage}`}
                />
                <div className="btn-go" onClick={() => goPaginate(isJumpTo)}>
                  Go
                </div>
              </div>
              <span className="total-page">{`of ${pageNumbers.length}`}</span>
              <div
                className="btn-next"
                onClick={() => paginate(isCurrentPage + 1)}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
