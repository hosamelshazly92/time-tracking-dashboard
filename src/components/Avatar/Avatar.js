import { image } from "./Avatar.module.css";

const Avatar = ({ pic }) => {
  return <img className={image} src={pic} alt="user avatar" />;
};

export default Avatar;
