import ShowHideWithCssTransition from "../../components/Animations/ShowHideWithCssTransition/ShowHideWithCssTransition";
import TransitionWithSwitchTransition from "../../components/Animations/TransitionWithSwitchTransition/TransitionWithSwitchTransition";
import "./animations.css";

const Animations = () => {
  return (
    <div className="animations">
      <h1>Animations</h1>
      <ShowHideWithCssTransition />
      <TransitionWithSwitchTransition />
    </div>
  );
};

export default Animations;
