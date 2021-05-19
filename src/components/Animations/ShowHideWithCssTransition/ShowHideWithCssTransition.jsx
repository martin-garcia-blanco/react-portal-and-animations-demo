import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import DummyDiv from "../../DummyDiv/DummyDiv";
import "../animations.css";

const ShowHideWithCssTransition = () => {
  const [isOpen, setVisibility] = useState(false);
  const handleVisibility = () => setVisibility(!isOpen);

  return (
    <div>
      <h2>Appear and leave with CssTransitionGroup</h2>
      <div className="animation-example">
        <div>
          <button onClick={handleVisibility}>show/hide</button>
        </div>
        <CSSTransition
          in={isOpen}
          unmountOnExit
          timeout={1500}
          classNames="dummyDiv"
        >
          <DummyDiv />
        </CSSTransition>
      </div>
    </div>
  );
};

export default ShowHideWithCssTransition;
