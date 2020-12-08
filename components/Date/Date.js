import cx from "classnames";
import { parseISO, format } from "date-fns";
import styles from "./Date.module.sass";

export default function Date({ text, className, template = "LLLL io, yyyy" }) {
  const date = parseISO(text);
  return (
    <div className={cx(styles.date, className)}>
      <time dateTime={text}>{format(date, template)}</time>
    </div>
  );
}
