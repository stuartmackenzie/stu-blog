import Link from "next/link";
import styles from "./Brand.module.sass";
import Logo from "../Logo/Logo";

export default function Brand({ text }) {
  return (
    <div className={styles.brand}>
      <Link href="/">
        <a className={styles.link}>
          <Logo className={styles.logo} />
          <span className={styles.name}>{text}</span>
        </a>
      </Link>
    </div>
  );
}
