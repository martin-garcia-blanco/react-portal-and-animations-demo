import { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import DummyDiv from "../../DummyDiv/DummyDiv";
import "../animations.css";

const dummyDivList = [
  { id: 0, foo: "a", component: <div>a</div> },
  { id: 1, foo: "b", component: <div>b</div> },
];

const TransitionWithSwitchTransition = () => {
  const [state, setState] = useState(false);
  const [currentItemFromList, setCurrentItemFromList] = useState(0);
  const handleCurrentItemFromList = () => setState(!state);
  console.log(currentItemFromList);

  return (
    <div>
      <h2>
        Transitions between elements, first remove the element and then put the
        new one
      </h2>
      <div className="animation-example">
        <div>
          <button onClick={handleCurrentItemFromList}>transition</button>
        </div>
        <SwitchTransition>
          <CSSTransition
            key={state}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="transitionDiv"
            timeout={1000}
          >
            <p> {state ? "Goodbye, world!" : "Hello, world!"}</p>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default TransitionWithSwitchTransition;
