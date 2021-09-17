import {
  container,
  orange,
  blue,
  red,
  green,
  purple,
  yellow,
  top,
  bottom,
  sectionTop,
  icon,
  sectionBottom,
  main,
  secondary,
  menu,
  hide,
} from "./Card.module.css";
import { useState } from "react";

const Card = ({ data }) => {
  const [show, setShow] = useState(true);

  const handleEnter = () => {
    setShow(false);
  };

  const handleLeave = () => {
    setShow(true);
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className={`${container} ${data.type === "Work" ? orange : ""} ${
        data.type === "Play" ? blue : ""
      } ${data.type === "Study" ? red : ""} ${
        data.type === "Exercise" ? green : ""
      } ${data.type === "Social" ? purple : ""} ${
        data.type === "Self Care" ? yellow : ""
      }`}
    >
      <div className={top}>
        <img src={data.icon} alt={data.type} />
      </div>
      <div className={bottom}>
        <div className={sectionTop}>
          <h4>{data.type}</h4>
          <img
            className={icon}
            src="https://res.cloudinary.com/ux-ui-designer/image/upload/v1631832476/Assets/icon-ellipsis_npi85r.svg"
            alt={data.color}
            onMouseEnter={handleEnter}
            onClick={handleClick}
          />
        </div>

        <div
          className={`${menu} ${show ? hide : ""}`}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <ul>
            <li>Save</li>
            <hr />
            <li>Edit</li>
          </ul>
        </div>

        <div className={sectionBottom}>
          <p className={main}>{data.duration}hrs</p>
          <p className={secondary}>
            Last Week - <strong>{data.timestamp}hrs</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
