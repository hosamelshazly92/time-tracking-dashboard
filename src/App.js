import { container, section } from "./App.module.css";
import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";
import { v4 as uuid } from "uuid";

function App() {
  const user = {
    name: "Jeremy Robson",
    picture:
      "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631827404/Assets/image-jeremy_iiel4y.png",
    activities: [
      {
        id: uuid(),
        type: "Work",
        duration: 32,
        timestamp: 36,
        color: "orange",
        icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828548/Assets/icon-work_qmwf2n.svg",
      },
      {
        id: uuid(),
        type: "Play",
        duration: 10,
        timestamp: 8,
        color: "blue",
        icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-play_z6kaw6.svg",
      },
      {
        id: uuid(),
        type: "Study",
        duration: 4,
        timestamp: 7,
        color: "red",
        icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828547/Assets/icon-study_qrcdlg.svg",
      },
      {
        id: uuid(),
        type: "Exercise",
        duration: 4,
        timestamp: 5,
        color: "green",
        icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-exercise_rmxsqf.svg",
      },
      {
        id: uuid(),
        type: "Social",
        duration: 5,
        timestamp: 10,
        color: "purple",
        icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-social_hot3pz.svg",
      },
      {
        id: uuid(),
        type: "Self Care",
        duration: 2,
        timestamp: 2,
        color: "yellow",
        icon: "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-self-care_x1v3ut.svg",
      },
    ],
  };

  return (
    <div className={container}>
      <Aside data={user} />
      <div className={section}>
        {user.activities.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
