import React, { useState, useLayoutEffect } from "react";
import Navigation from "./navigation";
import Logo from "../assets/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Api from "./api.json";
import Image from "../assets/school-logo.png";

const Login = () => {
  document.title = "Login";
  const VerifyAPI = `${Api.api}/api/verify`;
  const LoginAPI = `${Api.api}/api/login`;
  const navigate = useNavigate();
  const [isVerify, setVerify] = useState(false);
  const [isUsername, setUsername] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isError, setError] = useState("");
  const [isVisible, setVisible] = useState(false);

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
          if (result._id) {
            sessionStorage.setItem("ss-crdntl-vld", "true");
            navigate("/dashboard", { replace: true });
          }
          sessionStorage.setItem("ss-crdntl-vld", "false");
          setVerify(false);
        });
    }, 100);

    return () => AbortCntrlr.abort();
  }, [VerifyAPI, navigate]);

  const HandleLogin = async () => {
    setVisible(false);
    setError("");
    if (isUsername === "")
      return () => {
        setError("Fill the blank(s), Please...");
        setVisible(true);
      };
    if (isPassword === "")
      return () => {
        setError("Fill the blank(s), Please...");
        setVisible(true);
      };

    const raw = JSON.stringify({
      username: isUsername,
      password: isPassword,
    });

    const RequestLogin = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow",
    };

    await fetch(LoginAPI, RequestLogin)
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          sessionStorage.setItem("token", result.token);
          navigate("/credential", { replace: true });
        }
        if (!result.token) {
          setError("Invalid Credentials");
          setVisible(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Navigation />
      {isVerify ? (
        <div className="verified">
          <img src={Image} alt="Logo" />
          <span>Checking Credentials... Please wait.</span>
        </div>
      ) : undefined}
      <div className="login-con">
        <div className="left-info">
          <div className="top-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="co-eng">COLLEGE OF ENGINEERING</div>
          <hr />
          <div className="c-sched">CLASS SCHEDULE</div>
        </div>
        <div className="right-info">
          <div className="login-wrappper">
            <div className="log-title">LOGIN</div>
          </div>
          <div className="r-con">
            <div className="username">Username</div>
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="username"
              value={isUsername}
              onChange={(data) => setUsername(data.target.value)}
            />
            <div className="password">Password</div>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="password"
              value={isPassword}
              onChange={(data) => setPassword(data.target.value)}
            />
          </div>
          {isVisible ? <div className="error-l">{isError}</div> : undefined}
          <div className="btn">
            <div className="btn-dsgn" onClick={() => HandleLogin()}>
              LOGIN
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
