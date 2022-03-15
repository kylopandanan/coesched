import React, { useState, useEffect, useLayoutEffect } from "react";
import Navigation from "./navigation";
import { FaAngleDown } from "react-icons/fa";
import Image from "../assets/school-logo.png";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import Api from "./api.json";
import { useNavigate } from "react-router-dom";

const ViewInstructorSchedule = () => {
  document.title = "View Instructor Schedule";
  const [isSection, setSection] = useState([]);
  const [isSchedule, setSchedule] = useState([]);
  const [isSelectSection, setSelectSection] = useState("Select");
  const [isSelectVisible, setSelectVisible] = useState(false);
  const [isID, setID] = useState("");
  const [isSemester, setSemester] = useState([]);

  const SearchSectionAPI = `${Api.api}/api/search-by-instructor/`;
  const SectionAPI = `${Api.api}/api/instructor/`;
  const InstructorAPI = `${Api.api}/api/instructor/`;
  const SemesterAPI = `${Api.api}/api/semester`;
  const VerifyAPI = `${Api.api}/api/verify`;
  const navigate = useNavigate();
  const [isVerify, setVerify] = useState(false);
  const [isInstructor, setInstructor] = useState([]);

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
            setVerify(false);
          }
          setVerify(false);
        });
    }, 100);

    return () => AbortCntrlr.abort();
  }, [VerifyAPI, navigate]);

  const HandleCapture = () => {
    if (isSchedule.length === 0) return;
    htmlToImage
      .toPng(document.getElementById("Capture"))
      .then(function (dataUrl) {
        download(dataUrl, "Schedule.png");
      });
  };

  const HandleTable = () => {
    const isObject = [];

    const rawT1 = [];
    const rawT2 = [];
    const rawT3 = [];
    const rawT4 = [];
    const rawT5 = [];
    const rawT6 = [];
    const rawT7 = [];
    const rawT8 = [];
    const rawT9 = [];
    const rawT10 = [];

    isSchedule.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? rawT1.push(data)
        : data.timeslot === "8:00 - 9:00"
        ? rawT2.push(data)
        : data.timeslot === "9:00 - 10:00"
        ? rawT3.push(data)
        : data.timeslot === "10:00 - 11:00"
        ? rawT4.push(data)
        : data.timeslot === "11:00 - 12:00"
        ? rawT5.push(data)
        : data.timeslot === "12:00 - 1:00"
        ? rawT6.push(data)
        : data.timeslot === "1:00 - 2:00"
        ? rawT7.push(data)
        : data.timeslot === "2:00 - 3:00"
        ? rawT8.push(data)
        : data.timeslot === "3:00 - 4:00"
        ? rawT9.push(data)
        : data.timeslot === "4:00 - 5:00"
        ? rawT10.push(data)
        : undefined;
    });

    const Monday = [];
    const Tuesday = [];
    const Wednesday = [];
    const Thursday = [];
    const Friday = [];
    const Saturday = [];
    const Sunday = [];

    rawT1.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT2.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT3.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT4.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT5.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT6.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT7.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT8.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT9.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    rawT10.map((data) => {
      return data.day === "Monday"
        ? Monday.push(data)
        : data.day === "Tuesday"
        ? Tuesday.push(data)
        : data.day === "Wednesday"
        ? Wednesday.push(data)
        : data.day === "Thursday"
        ? Thursday.push(data)
        : data.day === "Friday"
        ? Friday.push(data)
        : data.day === "Saturday"
        ? Saturday.push(data)
        : data.day === "Sunday"
        ? Sunday.push(data)
        : undefined;
    });

    const FinalRawTimeSlot1 = [];
    const FinalRawTimeSlot2 = [];
    const FinalRawTimeSlot3 = [];
    const FinalRawTimeSlot4 = [];
    const FinalRawTimeSlot5 = [];
    const FinalRawTimeSlot6 = [];
    const FinalRawTimeSlot7 = [];
    const FinalRawTimeSlot8 = [];
    const FinalRawTimeSlot9 = [];
    const FinalRawTimeSlot10 = [];

    Monday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    Tuesday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    Wednesday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    Thursday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    Friday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    Saturday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    Sunday.map((data) => {
      return data.timeslot === "7:00 - 8:00"
        ? FinalRawTimeSlot1.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "8:00 - 9:00"
        ? FinalRawTimeSlot2.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "9:00 - 10:00"
        ? FinalRawTimeSlot3.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "10:00 - 11:00"
        ? FinalRawTimeSlot4.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "11:00 - 12:00"
        ? FinalRawTimeSlot5.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "12:00 - 1:00"
        ? FinalRawTimeSlot6.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "1:00 - 2:00"
        ? FinalRawTimeSlot7.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "2:00 - 3:00"
        ? FinalRawTimeSlot8.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "3:00 - 4:00"
        ? FinalRawTimeSlot9.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : data.timeslot === "4:00 - 5:00"
        ? FinalRawTimeSlot10.push({
            subject: data.subject,
            timeslot: data.timeslot,
            room: data.room,
            section: data.section,
            day: data.day,
          })
        : undefined;
    });

    const FinalRawObject = [
      { Schedule: FinalRawTimeSlot1 },
      { Schedule: FinalRawTimeSlot2 },
      { Schedule: FinalRawTimeSlot3 },
      { Schedule: FinalRawTimeSlot4 },
      { Schedule: FinalRawTimeSlot5 },
      { Schedule: FinalRawTimeSlot6 },
      { Schedule: FinalRawTimeSlot7 },
      { Schedule: FinalRawTimeSlot8 },
      { Schedule: FinalRawTimeSlot9 },
      { Schedule: FinalRawTimeSlot10 },
    ];

    FinalRawObject.map((data) => {
      return isObject.push(data.Schedule);
    });

    return (
      <table>
        <thead>
          <tr>
            <th>PERIOD</th>
            <th>MONDAY</th>
            <th>TUESDAY</th>
            <th>WEDNESDAY</th>
            <th>THURSDAY</th>
            <th>FRIDAY</th>
            <th>SATURDAY</th>
            <th>SUNDAY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7:00 - 8:00</td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[0].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>8:00 - 9:00</td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[1].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>9:00 - 10:00</td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[2].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>10:00 - 11:00</td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[3].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>11:00 - 12:00</td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[4].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>12:00 - 1:00</td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[5].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>1:00 - 2:00</td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[6].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>2:00 - 3:00</td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[7].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>3:00 - 4:00</td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[8].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
          <tr>
            <td>4:00 - 5:00</td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Monday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Tuesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Wednesday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Thursday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Friday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Saturday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
            <td>
              {isObject[9].map((data) => {
                return data.day === "Sunday" ? (
                  <div key={data._id} className="custom-tbl">
                    <div className="tbl-dt">{data.room}</div>
                    <div className="tbl-dt">{data.section}</div>
                    <div className="tbl-dt">{data.subject}</div>
                  </div>
                ) : undefined;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    const GetSectionRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    (async () => {
      await fetch(SectionAPI, GetSectionRequest)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data");
          }
          return response.json();
        })
        .then((result) => setSection(result))
        .catch((error) => console.log("error", error));
    })();

    (async () => {
      await fetch(SemesterAPI, GetSectionRequest)
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not fetch the data");
          }
          return response.json();
        })
        .then((result) => setSemester(result))
        .catch((error) => console.log("error", error));
    })();
  }, [SectionAPI, SemesterAPI]);

  const HandleGetSections = async () => {
    if (isID === "") return;
    const GetScheduleRequest = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    await fetch(SearchSectionAPI + isID, GetScheduleRequest)
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data");
        }
        return response.json();
      })
      .then((result) => setSchedule(result))
      .catch((error) => console.log("error", error));

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": sessionStorage.getItem("token"),
      },
      redirect: "follow",
    };

    await fetch(InstructorAPI + isSelectSection, requestOptions)
      .then((response) => response.json())
      .then((result) => setInstructor(result))
      .catch((error) => console.log("error", error));
  };

  const HandleDropdownVisibility = () => {
    setSelectVisible(!isSelectVisible);
  };

  const HandleSelected = (data) => {
    setSelectSection(data.instructor);
    setID(data.instructor);
    setSelectVisible(false);
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
      {isSelectVisible ? (
        <div className="drop-shadow" onClick={() => setSelectVisible(false)} />
      ) : undefined}
      <div className="vcs-con">
        <div className="wrapper-con">
          <div className="btns-sched">
            <div className="con-sep">
              <div className="custom-dropdown">
                <div
                  className="default"
                  onClick={() => HandleDropdownVisibility()}
                >
                  <div>{isSelectSection}</div>
                  <div className="drp-icon">
                    <FaAngleDown color="black" />
                  </div>
                </div>
                <div
                  className="dropdown"
                  style={{
                    display: `${isSelectVisible ? "block" : "none"}`,
                    zIndex: `${isSelectVisible ? 99999 : "none"}`,
                  }}
                >
                  {isSelectVisible ? (
                    <>
                      {isSection.length === 0 ? (
                        <div className="no-data">NO DATA</div>
                      ) : undefined}
                      {isSection.map((data) => {
                        return (
                          <div
                            key={data._id}
                            className="d-data"
                            onClick={() => HandleSelected(data)}
                          >
                            {data.instructor}
                          </div>
                        );
                      })}
                    </>
                  ) : undefined}
                </div>
              </div>
              <div className="btn" onClick={() => HandleGetSections()}>
                View
              </div>
            </div>
            <div className="btn-print" onClick={() => HandleCapture()}>
              Download Schedule
            </div>
          </div>
          {isSchedule.length !== 0 ? (
            <div className="print-sched-con" id="Capture">
              <div className="print-title-con">
                <div className="logo">
                  <img src={Image} alt="logo" />
                </div>
                <div className="titles-con">
                  <span className="t1">Republic of the Philippines</span>
                  <span className="t2">
                    Laguna State Polytechnic University
                  </span>
                  <span className="t3">Province of Laguna</span>
                  <span className="t4">College of Engineering</span>
                  <span className="t5">INSTRUCTOR SCHEDULE</span>
                  {isSemester.map((data) => {
                    return (
                      <span
                        className="t6"
                        key={data._id}
                      >{`${data.semester}, A.Y. ${data.year}`}</span>
                    );
                  })}
                </div>
              </div>
              <div className="simple-details">
                <span className="sim-det">{`Instructor: ${isInstructor.map(
                  (data) => {
                    return data.instructor;
                  }
                )}`}</span>
              </div>
              <HandleTable />
              <div className="signature-con">
                <span className="prepared">Prepared by:</span>
                <div className="signature">
                  <span className="sigs">Associate Dean</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-datas">NO SCHEDULE</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewInstructorSchedule;
