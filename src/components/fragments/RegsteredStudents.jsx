import React from "react";
import "../fragments/fragment-css/RegisteredStudents.css";
import Table from "./Table";
import { motion } from "framer-motion";

const RegisteredStudents = () => {
  return (
    <div className="registered-students">
      <motion.div
        className="registered-students-header"
        initial={{ x: "10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <p className="reg-student-header">Registered Students</p>
        <span></span>
        <a href="/students">View All</a>
      </motion.div>
      <Table />
      <motion.div
        className="registered-students-header"
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1.7,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <p className="reg-student-header">Result</p>
        <span></span>
        <a href="/results" className="">
          View All
        </a>
      </motion.div>
    </div>
  );
};

export default RegisteredStudents;
