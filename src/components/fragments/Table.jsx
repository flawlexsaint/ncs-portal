import React, { useContext } from "react";
import "../fragments/fragment-css/Table.css";

import image from "../images/about-img.jpg";
import { StoreContext } from "../store/store";
import { motion } from "framer-motion";

const Table = () => {
  const { Students, Search } = useContext(StoreContext);

  let SearchedResult = Students.filter((searched) => {
    return searched.name.toLowerCase().includes(Search.toLowerCase());
  });

  const StudentsList = SearchedResult.map((student) => {
    return (
      <motion.div
        className="table-grid"
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <img src={image} alt="" className="image card-img" />
        <div className="name-column">
          <p className="non-muted">{student.name}</p>
          <p className="text-muted">{student.school}</p>
        </div>
        <div className="class-column">
          <p className="text-muted">CLASS</p>
          <p className="non-muted">{student.class}</p>
        </div>
        <div className="gender-column">
          <p className="text-muted">GENDER</p>
          <p className="non-muted">{student.gender}</p>
        </div>
        <div className="age-column">
          <p className="text-muted">AGE</p>
          <p className="non-muted">{student.age}</p>
        </div>
        <div className="state-column">
          <p className="text-muted">STATE</p>
          <p className="non-muted">{student.state}</p>
        </div>
        <button className="button-column">View</button>
      </motion.div>
    );
  });
  return <div className="table">{StudentsList}</div>;
};

export default Table;
