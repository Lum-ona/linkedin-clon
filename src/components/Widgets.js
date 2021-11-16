import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Papa Lummy is always here", "Top news - 909 readers")}
      {newsArticle("Papa Lummy is always here", "Top news - 909 readers")}
      {newsArticle("Papa Lummy is always here", "Top news - 909 readers")}
      {newsArticle("Papa Lummy is always here", "Top news - 909 readers")}
      {newsArticle("Papa Lummy is always here", "Top news - 909 readers")}
    </div>
  );
}

export default Widgets;
