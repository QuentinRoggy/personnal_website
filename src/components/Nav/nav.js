import Link from 'next/link';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.nav}>
      <Link href='/' >Home</Link>
      <Link href='/about' >About me</Link>
      <Link href='/skills' >Skills</Link>
      <Link href='/projects' >Projects</Link>
      <Link href='/contact' >Contact</Link>
    </div>
  );
}

export default Nav;
