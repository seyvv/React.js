import styles from './HomePage.module.css';

export function HomePage() {
    return (
        <section className={styles.hero}>
            <p className={styles.eyebrow}>Read. Study. Sip.</p>
            <h1>Najdi kavárnu, kde se dá v klidu číst, učit nebo pracovat!</h1>

            <p className={styles.description}>
                Cozy Pages ti pomůže vybrat místo podle atmosféry, hlučnosti, Wi-Fi, zásuvek a toho, jestli se tam dá opravdu v klidu číst.
            </p>
        </section>
    );
}