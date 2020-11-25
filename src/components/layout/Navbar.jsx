import React from "react";
import style from "./Navbar.css";

import ncs from "../images/ncs 1.jpg";
import oval from "../images/Oval.jpg";

import { ReactComponent as Path } from "../images/svg/Path 4.svg";
import { ReactComponent as Bell } from "../images/svg/Object.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="row">
    <div className="col-12 p-0">
      <div className="tog_menu d-flex align-items-center justify-content-between">
        <div className="brand-logo">
          <NavLink to="/">
            <img src={ncs} alt="" className="navbar-brand" />
          </NavLink>
        </div>
        <ul className="navbar_nav d-flex align-items-center justify-content-between">
          <li className="nav-item mt-3">
            <NavLink to="/">DASHBOARD</NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink to="/students">STUDENTS</NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink to="/results">RESULTS</NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink to="/questions">QUESTIONS</NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink to="/settings">SETTINGS</NavLink>
          </li>
        </ul>
        <div className="style.owonikoko d-flex align-items-center justify-content-between">
          <NavLink to="#" className="text-white mr-3">
            Owonikoko
          </NavLink>
          <NavLink to="/login">
            <img src={oval} alt="" className="profile_image" />
          </NavLink>
          <NavLink to="#">
            <Path className="path" />
          </NavLink>
          <div className="notif ml-3">
            <p className="notif_counter ml-2">3</p>
            <Bell className="bell" />
          </div>
        </div>
      </div>
    </div>
    {/* <nav className="tog_menu">
      <div className="nav_width">
        <NavLink to="/">
          <img src={ncs} alt="" className="logo_image" />
        </NavLink>
        <div className="style.menu_wrap">
          <input type="checkbox" name="" className="style.toggler" id="" />
          <div className="style.hamburger">
            <div></div>
          </div>
          <div className="style.menu">
            <ul>
              <li>
                <NavLink to="/">DASHBOARD</NavLink>
              </li>
              <li>
                <NavLink to="/students">STUDENTS</NavLink>
              </li>
              <li>
                <NavLink to="/results">RESULTS</NavLink>
              </li>
              <li>
                <NavLink to="/questions">QUESTIONS</NavLink>
              </li>
              <li>
                <NavLink to="/settings">SETTINGS</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="style.owonikoko">
          <NavLink to="#">Owonikoko</NavLink>
          <img src={oval} alt="" className="style.profile_image" />
          <NavLink to="#">
            <Path className="style.path" />
          </NavLink>
          <div className="style.notif">
            <p className="style.notif_counter">3</p>
            <Bell className="style.bell" />
          </div>
        </div>
      </div>
    </nav> */}
  </div>
);

export default Navbar;
