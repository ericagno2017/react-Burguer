import React from "react";
import clasess from "./DrawerToggle.module.css";
const drawerToggle = (props) => (
  <div className={clasess.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
