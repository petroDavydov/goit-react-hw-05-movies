import s from "./NotFoundPage.module.css";
import NoFoundMovie from "../../images/nofoundMovie.png";

export default function NotFoundMovie() {
  return (
    <>
      <NoFoundMovie />
      <h1 className={s.text}>Sorry...</h1>
    </>
  );
}
