import { container } from "./App.module.css";
import Aside from "./components/Aside/Aside";

function App() {
  const user = {
    name: "Jeremy Robson",
    picture:
      "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631827404/Assets/image-jeremy_iiel4y.png",
    activities: [
      {
        type: "Work",
        duration: 32,
        timestamp: 36,
        background:
          "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828548/Assets/icon-work_qmwf2n.svg",
      },
      {
        type: "Play",
        duration: 10,
        timestamp: 8,
        background:
          "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-play_z6kaw6.svg",
      },
      {
        type: "Study",
        duration: 4,
        timestamp: 7,
        background:
          "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828547/Assets/icon-study_qrcdlg.svg",
      },
      {
        type: "Exercise",
        duration: 4,
        timestamp: 5,
        background:
          "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-exercise_rmxsqf.svg",
      },
      {
        type: "Social",
        duration: 5,
        timestamp: 10,
        background:
          "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-social_hot3pz.svg",
      },
      {
        type: "Self Care",
        duration: 2,
        timestamp: 2,
        background:
          "https://res.cloudinary.com/ux-ui-designer/image/upload/v1631828546/Assets/icon-self-care_x1v3ut.svg",
      },
    ],
  };

  return (
    <div className={container}>
      <Aside data={user} />
    </div>
  );
}

export default App;
