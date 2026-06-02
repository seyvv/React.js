import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

// TODO - přidat navigaci

export function Layout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <NavLink to='/' className={styles.logo}>
                    Cozy Pages
                </NavLink>

                <nav className={styles.nav}>
                    <NavLink to='/' end>
                        Domů
                    </NavLink>
                    <NavLink to='/cafes'>Kavárny</NavLink>
                </nav>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}
