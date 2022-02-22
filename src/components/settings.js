import React, { useState } from "react";
import Navigation from "./navigation";
import Api from "./api.json";

const Settings = () => {
  document.title = "Settings";
  const [isUpdatePass, setUpdatePass] = useState(false);
  const [isUpdateUser, setUpdateUser] = useState(false);
  const [isError, setError] = useState(false);
  const [isInvalid, setInvalid] = useState(false);

  const VerifyAPI = `${Api.api}/api/verify`;

  const HandleUpdate = async (data) => {
    setError(false);
    setInvalid(false);
    if (!data) return setError(true);

    const raw = JSON.stringify({
      username: data,
    });

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: raw,
      redirect: "follow",
    };

    await fetch(VerifyAPI, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          setError(false);
          setInvalid(false);
          setUpdateUser(false);
          return;
        }
        setInvalid(true);
      })
      .catch((error) => console.log("error", error));
  };

  const UsernameModal = () => {
    const [isUsername, setUsername] = useState("");
    return (
      <>
        <div className="back" onClick={() => setUpdateUser(false)} />
        <div className="user-modal-con">
          <div className="user-modal-wrapper">
            <div className="titled">Update Username</div>
            <input
              type="text"
              value={isUsername}
              onChange={(data) => setUsername(data.target.value)}
            />
            {isInvalid ? (
              <div className="error">Something went wrong, Try again.</div>
            ) : undefined}
            {isError ? (
              <div className="error">Don't leave it blank</div>
            ) : undefined}
            <div className="btn" onClick={() => HandleUpdate(isUsername)}>
              Save
            </div>
          </div>
        </div>
      </>
    );
  };

  const HandleUpdatePass = async (data) => {
    setError(false);
    setInvalid(false);
    if (!data) return setError(true);

    const raw = JSON.stringify({
      password: data,
    });

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      body: raw,
      redirect: "follow",
    };

    await fetch(VerifyAPI, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          setError(false);
          setInvalid(false);
          setUpdatePass(false);
          return;
        }
        setInvalid(true);
      })
      .catch((error) => console.log("error", error));
  };

  const PasswordModal = () => {
    const [isPassword, setPassword] = useState("");
    return (
      <>
        <div className="back" onClick={() => setUpdatePass(false)} />
        <div className="user-modal-con">
          <div className="user-modal-wrapper">
            <div className="titled">Update Password</div>
            <input
              type="text"
              value={isPassword}
              onChange={(data) => setPassword(data.target.value)}
            />
            {isInvalid ? (
              <div className="error">Something went wrong, Try again.</div>
            ) : undefined}
            {isError ? (
              <div className="error">Don't leave it blank</div>
            ) : undefined}
            <div className="btn" onClick={() => HandleUpdatePass(isPassword)}>
              Save
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navigation />
      {isUpdateUser ? <UsernameModal /> : undefined}
      {isUpdatePass ? <PasswordModal /> : undefined}
      <div className="settings-con">
        <div className="set-wrap">
          <div className="title">Settings</div>
          <div className="btns">
            <div className="btn name" onClick={() => setUpdateUser(true)}>
              Change Username
            </div>
            <div className="btn pass" onClick={() => setUpdatePass(true)}>
              Change Password
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
