import React, { useLayoutEffect, useState } from "react";
import Navigation from "./navigation";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/school-logo.png";
import Api from "./api.json";

const Dashboard = () => {
  document.title = "Dashboard";
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
      <div className="dash-con">
        <div className="info">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="co-eng">COLLEGE OF ENGINEERING</div>
          <hr />
          <div className="c-sched">CLASS SCHEDULE</div>
          <div className="btns">
            <Link to="/schedule">
              <div className="btn">Create Class Schedule</div>
            </Link>
            <Link to="/class/schedule">
              <div className="btn">View Class Schedule</div>
            </Link>
            <Link to="/class/instructor">
              <div className="btn">View Professor Schedule</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
