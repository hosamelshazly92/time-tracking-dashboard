import { container, image, tooltip, hideTooltip } from "./Avatar.module.css";
import { useState } from "react";

const Avatar = ({ pic }) => {
  const [hide, setHide] = useState(true);

  const handleEnter = () => {
    setHide(false);
  };

  const handleLeave = () => {
    setHide(true);
  };

  return (
    <div className={container}>
      <img
        className={image}
        src={pic}
        alt="user avatar"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
      <span className={`${tooltip} ${hide ? hideTooltip : ""}`}>
        Jeremy Robson
      </span>
    </div>
  );
};

export default Avatar;
