// import robotArm from "./assets/robot-arm.svg";
import "./App.css";
import { useEffect } from "react";

const RobotArm = () => (
  <svg
    fill="#000000"
    height="800px"
    width="800px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-33.53 -33.53 402.40 402.40"
    xmlSpace="preserve"
    transform="rotate(90)"
    stroke="#000000"
    strokeWidth="0.00335342"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="3.35342"
    />

    <g id="SVGRepo_iconCarrier">
      <path
        className="robot-arm"
        d="M310.271,297.342h-39.019l-128.93-129.192c-1.192-9.67-4.551-18.673-9.579-26.516l61.934-47.292h52.676 c6.931,0,12.96-4.749,14.583-11.487l6.588-27.352c1.94-8.055-3.017-16.156-11.07-18.096c-8.057-1.941-16.156,3.017-18.096,11.07 l-3.82,15.865h-30.933V33.409l15.865-3.822c8.054-1.94,13.01-10.043,11.069-18.097c-1.941-8.053-10.044-13.01-18.097-11.069 l-27.352,6.59c-6.737,1.624-11.486,7.652-11.486,14.583v50.329l-63.829,48.739c-9.379-5.414-20.243-8.53-31.829-8.53 c-35.223,0-63.877,28.655-63.877,63.877c0,32.999,25.152,60.232,57.294,63.539l57.795,57.794H84.938c-5.522,0-10,4.478-10,10v18 c0,5.522,4.478,10,10,10h225.333c5.523,0,10-4.478,10-10v-18C320.271,301.819,315.795,297.342,310.271,297.342z M78.947,202.132 c-14.404,0-26.123-11.719-26.123-26.123s11.719-26.123,26.123-26.123s26.123,11.719,26.123,26.123S93.351,202.132,78.947,202.132z M108.073,232.83c12.109-6.233,21.979-16.215,28.062-28.411l92.734,92.923h-56.284L108.073,232.83z"
      />
    </g>
  </svg>
);

function App() {
  useEffect(() => {
    const robotArm = document.querySelector(".robot-arm") as HTMLImageElement;

    const handleMouseOver = () => {
      robotArm.classList.toggle("move-hand");
    };

    robotArm.addEventListener("mouseover", handleMouseOver);

    return () => robotArm.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div className="robot-arm-container">
      <RobotArm />
    </div>
  );
}

export default App;
