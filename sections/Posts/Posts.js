import cx from "classnames";
import Link from "next/link";
import styles from "./Posts.module.sass";
import ustyles from "../../styles/utils.module.sass";
import Date from "../../components/Date/Date";

export default function Posts({ items }) {
  const els = items.map((item) => (
    <li key={item.id} className={styles.item}>
      <Link href={{ pathname: "/posts/[id]", query: { id: item.id } }}>
        <a className={styles.link}>
          <h2 className={cx(styles.title, ustyles.gradientText)}>
            {item.title}
          </h2>
        </a>
      </Link>
      <Date className={styles.date} text={item.date} />
      <p className={styles.text}>{item.text}</p>
    </li>
  ));
  return (
    <section className={styles.section}>
      <ul className={styles.list}>{els}</ul>
    </section>
  );
}
