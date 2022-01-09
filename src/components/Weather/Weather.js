import React from "react";
import { Link } from "react-router-dom";

const Weather = () => {
  const handleClick = (id) => {
    const target = document.getElementById(id);
    target.style.backgroundColor = "black";
  };

  const handleBlur = (id) => {
    document.getElementById(id).style.backgroundColor = "green";
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <ul className="nav">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <li key={index} className="nav-item" style={style.navItem}>
            <Link
              className="nav-link"
              style={style.navLink}
              to={`/weather/${index}`}
              aria-current="page"
              id={day}
              onClick={() => handleClick(day)}
              onBlur={() => handleBlur(day)}
            >
              {day}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;

const style = {
  navItem: {
    marginRight: "50px",
  },
  navLink: {
    backgroundColor: "green",
    color: "white",
    borderRadius: "50px",
    padding: "5px 20px",
    fontSize: "20px",
  },
  active: {
    backgroundColor: "black",
  },
};
