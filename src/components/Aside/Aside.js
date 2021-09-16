import {
  container,
  top,
  section,
  label,
  name,
  bottom,
  item,
} from "./Aside.module.css";

import Avatar from "../Avatar/Avatar";

const Aside = ({ data }) => {
  return (
    <div className={container}>
      <div className={top}>
        <Avatar pic={data.picture} />
        <div className={section}>
          <p className={label}>Report for</p>
          <p className={name}>{data.name}</p>
        </div>
      </div>
      <div className={bottom}>
        <p className={item}>Daily</p>
        <p className={item}>Weekly</p>
        <p className={item}>Monthly</p>
      </div>
    </div>
  );
};

export default Aside;
