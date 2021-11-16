import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

function HeaderOptions({ title, Icon, avatar }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_avatar" src={avatar} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
