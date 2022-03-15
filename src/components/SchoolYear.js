import React, { useEffect, useState } from "react";
import Api from "./api.json";

const SchoolYear = () => {
  document.title = "Manage School Year";
  const [isSemester, setSemester] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isYear, setYear] = useState("");
  const [isUpdate, setUpdate] = useState("");

  const SemesterAPI = `${Api.api}/api/semester`;

  const UpdateData = async () => {
    const GetRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    fetch(SemesterAPI, GetRequest)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => setSemester(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setLoading(true);
    const AbortCntrlr = new AbortController();

    const GetRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    fetch(SemesterAPI, GetRequest, { signal: AbortCntrlr.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => {
        setSemester(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));

    return () => AbortCntrlr.abort();
  }, [SemesterAPI]);

  const HandleUpdate = async () => {
    if (isYear === "") return setError(true);
    if (isUpdate === "") return setError(true);

    const raw = JSON.stringify({
      year: isYear,
      semester: isUpdate,
      _id: "62001000b0c9c16690bd926d",
    });

    const PostRequest = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: raw,
      redirect: "follow",
    };

    setLoading(true);

    await fetch(SemesterAPI, PostRequest)
      .then((response) => response.json())
      .then((result) => {
        if (!result.message) {
          setError(false);
          setYear("");
          setLoading(false);
        }
        setLoading(false);
        setYear("");
        setError(false);
        UpdateData();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="schoolyear-con">
      <div className="schlyr-wrapper">
        {!isLoading ? (
          <>
            <span className="title">Current School Year</span>
            {isSemester.map((data) => {
              return (
                <div
                  className="current"
                  key={data._id}
                >{`${data.semester}, A.Y. ${data.year}`}</div>
              );
            })}
            <div className="con">
              <input
                type="text"
                placeholder="20xx - 20xx"
                value={isYear}
                onChange={(data) => setYear(data.target.value)}
              />
              <select
                value={isUpdate}
                onChange={(data) => setUpdate(data.target.value)}
              >
                <option>Select</option>
                <option value="First Semester">First Semester</option>
                <option value="Inter Semester">Inter Semester</option>
                <option value="Second Semester">Second Semester</option>
              </select>
            </div>
            {isError ? (
              <div className="error">
                Don't leave the field blank before saving
              </div>
            ) : undefined}
            <div className="btn" onClick={() => HandleUpdate()}>
              Update
            </div>
          </>
        ) : (
          <div className="Loadings">Loading... Please wait.</div>
        )}
      </div>
    </div>
  );
};

export default SchoolYear;
