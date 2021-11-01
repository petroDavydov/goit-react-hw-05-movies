import s from './NotFoundPage.module.css';
import NotFoundMovie from '../../images/nofoundMovie.png';

export default function NotFoundPage() {
  return (
    <>
      <h1 className={s.text}>Sorry...</h1>
      <img src={NotFoundMovie} alt="NoFoundPicture" />
    </>
  );
}
