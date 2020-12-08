import cx from "classnames";
import styles from "./PostDetail.module.sass";
import ustyles from "../../styles/utils.module.sass";

import Date from "../Date/Date";

export default function PostDetail({ item }) {
  const { title, text, date, html } = item;
  return (
    <article className={styles.article}>
      <h1 className={cx(styles.title, ustyles.gradientText)}>{title}</h1>
      <Date className={styles.date} text={date} />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
