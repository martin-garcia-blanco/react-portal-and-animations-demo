import { useState } from "react";
import Portal from "../../components/Portal/Portal";
import "./PortalPage.css";

const PortalPage = () => {
  const [isPortalOpen, setPortalVisibility] = useState(false);

  const handlePortalVisibility = () => {
    setPortalVisibility(!isPortalOpen);
  };

  return (
    <div className="portal">
      <h1>React Portal</h1>
      <p>Click in the button to execute a React Portal</p>
      <button onClick={handlePortalVisibility}>Open portal</button>
      <Portal isPortalOpen={isPortalOpen}></Portal>
    </div>
  );
};

export default PortalPage;
