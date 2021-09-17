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
} from "./Card.module.css";

const Card = ({ data }) => {
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
          />
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
