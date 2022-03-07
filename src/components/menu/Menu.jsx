import React from "react";
import { Link } from "gatsby";
import SocialMedia from "../socialMedia/SocialMedia";
import "./Menu.scss";
import Courses from '../courses/Courses';
const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog developer</h2>
      </Link>
      <p>
        Blog sobre desarollo web, programación JavaScript, React, Node,
        Electron, Next, Gatsby, Angular...
      </p>
      <SocialMedia />
      <Courses />
    </div>
  );
};

export default Menu;
