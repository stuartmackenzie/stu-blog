import cx from "classnames";
import Image from "next/image";
import styles from "./Logo.module.sass";

export default function Logo({ className, width = 40, height = 40 }) {
  return (
    <div className={cx(styles.logo, className)}>
      <Image
        src="/images/logo.png"
        alt="Stu's Code Lab logo"
        width={width}
        height={height}
      />
    </div>
  );
}
