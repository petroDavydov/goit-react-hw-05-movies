import s from "./Bar.module.css";
import Navigation from "./Navigation/Navigation";

export default function Bar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
