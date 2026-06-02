import type { ReactNode } from 'react';
import styles from './Layout.module.css';

type layoutProps = {
    children: ReactNode;
};

// TODO - přidat navigaci

export function Layout({ children }: layoutProps) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <p className={styles.logo}>Cozy Pages</p>
            </header>

            <main className={styles.main}>{children}</main>
        </div>
    )
}
