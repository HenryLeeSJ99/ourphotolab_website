import "../header/header.css";
import Buttons from "./buttons/Buttons";

export default function header() {
  return (
    <div className="header-container">
      <div className="inner-container">
        <span className="logo-container">
          <img
            className="logo"
            src="./Capture.PNG"
            alt="logo"
          />
        </span>
      </div>
      <div className="header-navbar">
        <div className="container">
          <Buttons />
        </div>
      </div>
    </div>
  );
}
