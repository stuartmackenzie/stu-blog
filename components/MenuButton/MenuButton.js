import cx from "classnames";
import styles from "./MenuButton.module.sass";

export default function MenuButton({ className, open, onClick }) {
  return (
    <div
      className={cx(styles.button, className, open ? styles.open : "")}
      onClick={onClick}
    >
      <div className={cx(styles.line, styles.line1)}></div>
      <div className={cx(styles.line, styles.line2)}></div>
      <div className={cx(styles.line, styles.line3)}></div>
    </div>
  );
}
