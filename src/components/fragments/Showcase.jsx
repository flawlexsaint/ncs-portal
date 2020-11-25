import React from "react";
import "../fragments/fragment-css/Showcase.css";
import { motion } from "framer-motion";

import { ReactComponent as Vector } from "../images/svg/Vector.svg";
import { ReactComponent as Nine } from "../images/svg/9.svg";
import { ReactComponent as Learning } from "../images/svg/Currently Learning.svg";

import qa from "../images/qa.jpg";
import q from "../images/q.png";
import s from "../images/s.jpg";
import o from "../images/o.jpg";

const Showcase = () => (
  <motion.div
    className="container"
    style={{ padding: 0 }}
    initial={{ x: "-20vw", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.3, type: "spring", stiffness: 100 }}
  >
    <p className="showcase-header">Dashboard</p>
    <div className="showcase">
      <img className="showcase-img" src={qa} alt="" />
      <img className="showcase-img" src={q} alt="" />
      <img className="showcase-img" src={s} alt="" />
      <div className="showcase-img-svgs">
        <Vector className="showcase-svgs vector" />
        <Nine className="showcase-svgs nine" />
        <Learning className="showcase-svgs learning" />
        <img className="showcase-img" src={o} alt="" />
      </div>
    </div>
  </motion.div>
);

export default Showcase;
