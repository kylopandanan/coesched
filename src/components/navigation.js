import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <div className="nav-con">
        <div className="nav-logo">coesched</div>
        <div className="nav-btn">
          {location.pathname === "/" ? (
            <>
              <Link to="/login">
                <div className="nav-cdl">Login</div>
              </Link>
            </>
          ) : location.pathname === "/dashboard" ? (
            <>
              <Link to="/settings">
                <div className="nav-btns nav-cd">Settings</div>
              </Link>
              <Link to="/credential/logout">
                <div className="nav-btns nav-cd">Log Out</div>
              </Link>
            </>
          ) : location.pathname === "/settings" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Back</div>
              </Link>
            </>
          ) : location.pathname === "/login" ? (
            <>
              <Link to="/">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
            </>
          ) : location.pathname === "/schedule" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd ">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd hilight">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : location.pathname === "/management" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd hilight">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : location.pathname === "/management/room" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd hilight">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : location.pathname === "/management/section" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd hilight">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : location.pathname === "/management/subject" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd hilight">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : location.pathname === "/management/instructor" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd hilight">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : location.pathname === "/class/schedule" ? (
            <>
              {sessionStorage.getItem("ss-crdntl-vld") === "true" ? (
                <Link to="/schedule">
                  <div className="nav-btns nav-cd">Back</div>
                </Link>
              ) : undefined}
              <Link
                to={
                  sessionStorage.getItem("ss-crdntl-vld") === "true"
                    ? "/dashboard"
                    : "/"
                }
              >
                <div className="nav-btns nav-cd">Home</div>
              </Link>
            </>
          ) : location.pathname === "/class/instructor" ? (
            <>
              {sessionStorage.getItem("ss-crdntl-vld") === "true" ? (
                <Link to="/schedule">
                  <div className="nav-btns nav-cd">Back</div>
                </Link>
              ) : undefined}
              <Link
                to={
                  sessionStorage.getItem("ss-crdntl-vld") === "true"
                    ? "/dashboard"
                    : "/"
                }
              >
                <div className="nav-btns nav-cd">Home</div>
              </Link>
            </>
          ) : location.pathname === "/management/school/year" ? (
            <>
              <Link to="/dashboard">
                <div className="nav-btns nav-cd">Home</div>
              </Link>
              <Link to="/management">
                <div className="nav-btns nav-cd hilight">Management</div>
              </Link>
              <Link to="/schedule">
                <div className="nav-btns nav-cd">Schedule</div>
              </Link>
              <Link to="/class/instructor">
                <div className="nav-btns nav-cd">View Intructor Schedules</div>
              </Link>
            </>
          ) : undefined}
        </div>
      </div>
    </>
  );
};

export default Navigation;
