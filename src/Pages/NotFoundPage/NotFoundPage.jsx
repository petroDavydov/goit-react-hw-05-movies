import s from './NotFoundPage.module.css';
import NotFoundMovie from '../../images/nofoundMovie.png';

export default function NotFoundPage() {
  return (
    <>
      <NotFoundMovie />
      <h1 className={s.text}>Sorry...</h1>
    </>
  );
}
