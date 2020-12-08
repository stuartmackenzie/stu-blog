import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import styles from "./NavList.module.sass";

export default function NavList({ page, open }) {
  const router = useRouter();
  const els = page.nav.items.map((item) => (
    <li key={item.text} className={styles.item}>
      <Link href={item.href}>
        <a
          className={cx(
            styles.link,
            item.href === router.pathname ? styles.active : ""
          )}
        >
          {item.text}
        </a>
      </Link>
    </li>
  ));

  return (
    <div className={cx(styles.navlist, open ? styles.open : "")}>
      <ul className={styles.list}>{els}</ul>
    </div>
  );
}
