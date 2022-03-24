import styles from './Header.module.scss';
import logo from '../../assets/header/icon.png';
import search from '../../assets/header/search.png';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  console.log(styles);
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.icon}>
          <img src={logo} alt="logo" />
          <h5 className={styles.title}>挖！影</h5>
        </div>
        <div className={styles.search_input}>
          <div>
            <img className={styles.search} src={search} alt="search" />
            <input
              type="text"
              name="search_text"
              placeholder="搜尋劇名 / 演員"
            />
          </div>
        </div>
      </div>

      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#" target="_self">
              電影
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              戲劇
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              主題館
            </a>
          </li>
          <li>
            <a href="#" target="_self">
              我的片單
            </a>
          </li>
          <li>
            <div className={styles.avator}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
