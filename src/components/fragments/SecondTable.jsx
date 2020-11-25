import React, { useContext } from "react";
import image from "../images/about-img.jpg";
import { StoreContext } from "../store/store";
import { motion } from "framer-motion";


const SecondTable = () => {
  const { Students, Search } = useContext(StoreContext);
  let SearchStudent = Students.filter((searched) => {
    return searched.name.toLowerCase().includes(Search.toLowerCase());
  });
  const StudentsList = SearchStudent.map((student) => {
    return (
      <motion.div
        className="dashboard"
        key={student.name}
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.4,
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
            <p>{student.duration}</p>
          </div>
          <div className="question-section">
            <p className="text-muted">QUESTIONS</p>
            <p>{student.questions}</p>
          </div>
          <div className="date-section">
            <p className="text-muted">DATE</p>
            <p>{student.date}</p>
          </div>
          <button className="button-section">
            View
          </button>
        </div>
      </motion.div>
    );
  });
  return <div style={{ backgroundColor:"#f5f6f7"}}>{StudentsList}</div>;
};

export default SecondTable;
