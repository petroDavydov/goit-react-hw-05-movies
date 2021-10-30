import s from "./Footer.module.css";
import { FaReact } from "react-icons/fa";

const Footer = () => (
  <footer className={s.footer}>
    <div className={s.description}>
      <FaReact className={s.FaReact} />
      Training Site For Understanding React ☣ 30.10.2021
    </div>
  </footer>
);
export default Footer;
