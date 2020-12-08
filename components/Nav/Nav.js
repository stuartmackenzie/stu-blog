import styles from "./Nav.module.sass";
import Brand from "../Brand/Brand";
import MenuButton from "../MenuButton/MenuButton";
import NavList from "../NavList/NavList";

export default function Nav({ page, open, children, onMenuClick }) {
  const handleMenuClick = () => {
    onMenuClick();
  };

  return (
    <nav className={styles.nav}>
      <Brand text={page.brand} />
      <NavList open={open} page={page} />
      <MenuButton
        className={styles.menubtn}
        open={open}
        onClick={handleMenuClick}
      />
    </nav>
  );
}
