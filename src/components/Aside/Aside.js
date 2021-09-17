import {
  container,
  top,
  section,
  label,
  name,
  bottom,
  item,
  highlight,
} from "./Aside.module.css";

import Avatar from "../Avatar/Avatar";

const Aside = ({
  data,
  itemOnClick,
  highlightDaily,
  highlightWeekly,
  highlightMonthly,
}) => {
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
        <p
          id="daily"
          className={`${item} ${highlightDaily ? highlight : ""}`}
          onClick={itemOnClick}
        >
          Daily
        </p>
        <p
          id="weekly"
          className={`${item} ${highlightWeekly ? highlight : ""}`}
          onClick={itemOnClick}
        >
          Weekly
        </p>
        <p
          id="monthly"
          className={`${item} ${highlightMonthly ? highlight : ""}`}
          onClick={itemOnClick}
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default Aside;
