import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import StudentPage from "./components/StudentPage";
import AlumniPage from "./components/AlumniPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/student" element={<StudentPage />} />
      <Route path="/alumni" element={<AlumniPage />} />
      <Route path="/homepage" element={<div>Homepage</div>} />
    </Routes>
  );
};

export default App;
