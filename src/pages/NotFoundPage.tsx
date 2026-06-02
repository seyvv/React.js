import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
    return (
        <section className={styles.section}>
            <p className={styles.code}>404</p>
            <h1>Stránka nenalezena</h1>
            <p>
                Tahle adresa v aplikaci neexistuje. Můžeš se vrátit zpět na hlavní
                stránku nebo procházet kavárny.
            </p>

            <div className={styles.actions}>
                <Link to="/">Domů</Link>
                <Link to="/cafes">Procházet kavárny</Link>
            </div>
        </section>
    );
}