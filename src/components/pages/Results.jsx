import React, { useContext } from "react";
import { StoreContext } from "../store/store";
import { motion } from "framer-motion";
import image from "../images/about-img.jpg";

import SecondTable from "../fragments/SecondTable";

const Results = () => {
  const {
    Students,
    handleNameSort,
    handleAgeSort,
    handleStateSort,
    handleSearch,
  } = useContext(StoreContext);

  return (
    <div className="container">
      <motion.div
        className="registered-students-header"
        initial={{ x: "10vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
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
      <motion.div
        className="students_tab"
        initial={{ x: "-30vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div className="search-sort-row">
          <div className="filter_area">
            <label htmlFor="">filter</label>
            <input
              className="input_field"
              type="search"
              name=""
              id=""
              placeholder="Search for Student"
              onChange={handleSearch}
            />
          </div>
          <div className="sort_area">
            <button className="sort_dropdown">SORT BY</button>
            <ul>
              <li>
                <a className="" href="#" onClick={handleNameSort}>
                  Name
                </a>
              </li>
              <li>
                <a className="" href="#" onClick={handleAgeSort}>
                  Age
                </a>
              </li>
              <li>
                <a className="" href="#" onClick={handleStateSort}>
                  State
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <SecondTable />
      {/* {StudentsList} */}
    </div>
  );
};

export default Results;
