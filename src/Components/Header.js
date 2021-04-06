import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import {ReactComponent as Dogs} from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = useContext(UserContext);
  console.log(data)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`} aria-label="Dogs - Home">
        <Link className={styles.logo} to="/">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
};

export default Header;