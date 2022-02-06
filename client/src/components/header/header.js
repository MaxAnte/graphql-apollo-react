import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import styles from "./header.module.css";

function Header() {
  return (
    <Link to="/">
      <header className={styles.header}>
        <img src={logo} width={"50px"} />
        <h1 className={styles.title}>Pizza House</h1>
      </header>
    </Link>
  );
}

export default Header;
