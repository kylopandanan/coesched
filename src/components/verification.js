import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Image from "../assets/school-logo.png";
import Api from "./api.json";

const Verification = () => {
  const params = useParams();
  const VerifyAPI = `${Api.api}/api/verify`;
  const navigate = useNavigate();

  useEffect(() => {
    const AbortCntrlr = new AbortController();

    if (params.auth === "logout") {
      sessionStorage.clear();
      navigate("/login", { replace: true });
    }

    const GetCourseRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    setTimeout(() => {
      (async () => {
        await fetch(VerifyAPI, GetCourseRequest, { signal: AbortCntrlr.signal })
          .then((response) => response.json())
          .then((result) => {
            if (result._id) {
              sessionStorage.setItem("ss-crdntl-vld", "true");
              navigate("/dashboard", { replace: true });
            }
            if (result.message === false) {
              sessionStorage.setItem("ss-crdntl-vld", "false");
              navigate("/login", { replace: true });
            }
          });
      })();
    }, 100);

    return () => AbortCntrlr.abort();
  }, [VerifyAPI, navigate, params]);

  return (
    <div className="verify">
      <img src={Image} alt="Logo" />
      <span>Checking Credentials... Please wait.</span>
    </div>
  );
};

export default Verification;
