import Link from "next/link";
import Button from "../../../components/Button";

import styles from "./Header.module.scss";
import logo from "../../../assets/Common/logo.svg";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className="container">
        <div className={styles.header__box}>
          <div className={styles.header__logo}>
            <Link href="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.header__menu}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <div className={styles.header__btn}>
              <Button onClick={() => alert("Hello")}>Hello :)</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
