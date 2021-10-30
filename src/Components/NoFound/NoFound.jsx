import s from "./NoFaund.module.css";
import nofoundMovie from "../../images/nofoundMovie.png";

export default function NoFound() {
  return (
    <div role="alert">
      <img className={s.image} src={nofoundMovie} alt="SorryCanNotFindImage" />
      <span className={s.text}>Sorry, I Really Tried...</span>
    </div>
  );
}
