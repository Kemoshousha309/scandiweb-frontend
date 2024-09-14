import { PropsWithChildren } from "react";
import styles from "./Header.module.scss";
const Header = ({ title, children }: { title: string } & PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.actions}>{children}</div>
    </header>
  );
};

export default Header;
