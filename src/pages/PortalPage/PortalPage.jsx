import { useState } from "react";
import Portal from "../../components/Portal/Portal";
import "./PortalPage.css";

const PortalPage = () => {
  const [isPortalOpen, setPortalVisibility] = useState(false);
  const [clicks, setClicks] = useState(0);

  const handlePortalVisibility = () => {
    setPortalVisibility(!isPortalOpen);
  };

  const handleClick = () => setClicks(clicks + 1);

  return (
    <div className="portal-page">
      <h1>React Portal</h1>
      <p>Click in the button to execute a React Portal</p>
      <button onClick={handlePortalVisibility}>Open portal</button>
      <p>Times user has clicked in button {clicks}</p>
      <div onClick={handleClick}>
        <Portal isPortalOpen={isPortalOpen}>
          {<h2>The event is listening in the parent not in the portal</h2>}
        </Portal>
      </div>
    </div>
  );
};

export default PortalPage;
