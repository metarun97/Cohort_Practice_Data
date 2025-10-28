import styles from '../components/header/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Sheriyans</h1>
      <button className={styles.btn}>LogIn</button>
    </div>
  );
};

export default Header;
