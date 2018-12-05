import React from "react";
import { Link } from "react-router-dom";
import articles from "./../../assets/article.png";
import videos from "./../../assets/video.png";
import calendar from "./../../assets/calendar.png";

export default function Main() {
  return (
    <div>
      <div className="container container-fluid text-center bees learnCategories">
        <h1 className="display-2">Learn</h1>
        <div className="categories">
          <Link className="category card queens" to="/learn/articles">
            <h3 className="display-4">Articles</h3>
            <img src={articles} className="learnCategoryPic" alt="Articles" />
          </Link>
          <Link className="category card nucs" to="/learn/videos">
            <h3 className="display-4">Videos</h3>
            <img src={videos} className="learnCategoryPic" alt="Videos" />
          </Link>
          <Link className="category card packages" to="/learn/calendar">
            <h3 className="display-4">Calendar</h3>
            <img src={calendar} className="learnCategoryPic" alt="Calendar" />
          </Link>
        </div>
      </div>
    </div>
  );
}
