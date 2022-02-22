import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import CreateSchedule from "./components/createSchedule";
import DataManagement from "./components/dataManagement";
import Room from "./components/room";
import Subject from "./components/subject";
import Instructor from "./components/instructor";
import Section from "./components/section";
import ViewClassSchedule from "./components/ViewClassSchedule";
import ViewInstructorSchedule from "./components/ViewInstructorSchedule";
import SchoolYear from "./components/SchoolYear";
import Verification from "./components/verification";
import Settings from "./components/settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="credential" exact element={<Verification />}>
            <Route path=":auth" exact element={<Verification />} />
          </Route>
          <Route path="settings" exact element={<Settings />} />
          <Route path="login" exact element={<Login />} />
          <Route path="dashboard" exact element={<Dashboard />} />
          <Route path="schedule" exact element={<CreateSchedule />} />
          <Route path="class/schedule" exact element={<ViewClassSchedule />} />
          <Route
            path="class/instructor"
            exact
            element={<ViewInstructorSchedule />}
          />
          <Route path="management" exact element={<DataManagement />}>
            <Route path="room" exact element={<Room />} />
            <Route path="section" exact element={<Section />} />
            <Route path="subject" exact element={<Subject />} />
            <Route path="instructor" exact element={<Instructor />} />
            <Route path="school/year" exact element={<SchoolYear />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
