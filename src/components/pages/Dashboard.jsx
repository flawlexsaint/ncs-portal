import React from "react";
import "../pages/css_modules/Dashboard.css";

import Showcase from "../fragments/Showcase";
import RegisteredStudents from "../fragments/RegsteredStudents";

import { useContext } from "react";
import { StoreContext } from "../store/store";
import { motion } from "framer-motion";

import image from "../images/about-img.jpg";

const Dashboard = () => {
  const { Students } = useContext(StoreContext);
  const StudentsList = Students.map((student) => {
    return student ? (
      <motion.div
        className="dashboard"
        key={student.name}
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1.7,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="dashboard-grid">
          <input className="checkbox-field" type="checkbox" />
          <img src={image} alt="" className="card-img image-column" />
          <div className="name-section">
            <p className="non-muted">{student.name}</p>
            <p className="text-muted">{student.school}</p>
          </div>
          <p className="score">{student.score}</p>
          <div className="duration-section">
            <p className="text-muted">DURATION</p>
            <p className="non-muted">{student.duration}</p>
          </div>
          <div className="question-section">
            <p className="text-muted">QUESTIONS</p>
            <p className="non-muted">{student.questions}</p>
          </div>
          <div className="date-section">
            <p className="text-muted">DATE</p>
            <p className="non-muted">{student.date}</p>
          </div>
          <button className="button-section">View</button>
        </div>
      </motion.div>
    ) : (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  });

  return (
    <div className="container">
      <Showcase />
      <RegisteredStudents />
      {StudentsList[0]}
      {StudentsList[2]}
      {StudentsList[4]}
    </div>
  );
};

export default Dashboard;
