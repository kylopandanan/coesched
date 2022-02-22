import React, { useLayoutEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navigation from "./navigation";
import Room from "./room";
import Subject from "./subject";
import Instructor from "./instructor";
import Section from "./section";
import SchoolYear from "./SchoolYear";
import Image from "../assets/school-logo.png";
import Api from "./api.json";

const DataManagement = () => {
  const location = useLocation();
  const VerifyAPI = `${Api.api}/api/verify`;
  const navigate = useNavigate();
  const [isVerify, setVerify] = useState(false);

  useLayoutEffect(() => {
    setVerify(true);
    const AbortCntrlr = new AbortController();

    const VerifyRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    setTimeout(() => {
      fetch(VerifyAPI, VerifyRequest, { signal: AbortCntrlr.signal })
        .then((response) => response.json())
        .then((result) => {
          if (!result._id) {
            sessionStorage.setItem("ss-crdntl-vld", "false");
            navigate("/login", { replace: true });
          }
          sessionStorage.setItem("ss-crdntl-vld", "true");
          setVerify(false);
        });
    }, 100);

    return () => AbortCntrlr.abort();
  }, [VerifyAPI, navigate]);

  return (
    <>
      <Navigation />
      {isVerify ? (
        <div className="verified">
          <img src={Image} alt="Logo" />
          <span>Checking Credentials... Please wait.</span>
        </div>
      ) : undefined}
      <div className="management-con">
        <div className="internal-nav">
          <Link to="/management/room">
            <div
              className="nav-btn"
              style={{
                background:
                  location.pathname === "/management"
                    ? "#dbdee2"
                    : location.pathname === "/management/room"
                    ? "#dbdee2"
                    : undefined,
              }}
            >
              Room
            </div>
          </Link>
          <Link to="/management/section">
            <div
              className="nav-btn"
              style={{
                background:
                  location.pathname === "/management/section"
                    ? "#dbdee2"
                    : undefined,
              }}
            >
              Section
            </div>
          </Link>
          <Link to="/management/subject">
            <div
              className="nav-btn"
              style={{
                background:
                  location.pathname === "/management/subject"
                    ? "#dbdee2"
                    : undefined,
              }}
            >
              Subject
            </div>
          </Link>
          <Link to="/management/instructor">
            <div
              className="nav-btn"
              style={{
                background:
                  location.pathname === "/management/instructor"
                    ? "#dbdee2"
                    : undefined,
              }}
            >
              Instructor
            </div>
          </Link>
          <Link to="/management/school/year">
            <div
              className="nav-btn"
              style={{
                background:
                  location.pathname === "/management/school/year"
                    ? "#dbdee2"
                    : undefined,
              }}
            >
              School Year
            </div>
          </Link>
        </div>
        {location.pathname === "/management" ? (
          <Room />
        ) : location.pathname === "/management/room" ? (
          <Room />
        ) : location.pathname === "/management/section" ? (
          <Section />
        ) : location.pathname === "/management/subject" ? (
          <Subject />
        ) : location.pathname === "/management/instructor" ? (
          <Instructor />
        ) : location.pathname === "/management/school/year" ? (
          <SchoolYear />
        ) : undefined}
      </div>
    </>
  );
};

export default DataManagement;
