import ReactDOM from "react-dom";
import "./portal.css";

const Portal = ({ isPortalOpen, children }) => {
  if (!isPortalOpen) return null;
  return ReactDOM.createPortal(
    <div className="portal">
      <h1>I'm a portal</h1>
      {children}
      <button>+1</button>
    </div>,
    document.body
  );
};

export default Portal;
