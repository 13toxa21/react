import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="textContent">
      <h1>Everything You Love About Coffee</h1>
      <img src="./images/Beanslogo.png" alt="logo" />
      <p>We makes every day full of energy and taste</p>
      <p>Want to try our beans?</p>
      <div className="btn_More">
        <a href="1">More</a>
      </div>
    </div>
  );
};

export default Home;
