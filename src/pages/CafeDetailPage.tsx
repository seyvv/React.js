import { Link, useParams } from 'react-router-dom';
import { useCafes } from '@/hooks/useCafes';
import { FavoriteButton } from '@/components/FavoriteButton';
import styles from './CafeDetailPage.module.css';

const noiseLevelLabels = {
    quiet: 'Tiché',
    moderate: 'Středně rušné',
    busy: 'Rušné',
};

export function CafeDetailPage() {
    const { id } = useParams();
    const { data: cafes = [], isLoading, isError, error } = useCafes();

    const cafe = cafes.find((cafe) => cafe.id === Number(id));

    if (isLoading) {
        return <p>Načítám detail kavárny...</p>;
    }

    if (isError) {
        return <p>Něco se pokazilo: {error.message}</p>;
    }

    if (!cafe) {
        return (
            <section className={styles.notFound}>
                <h1>Kavárna nenalezena</h1>
                <p>Možná byla kavárna odstraněna, nebo máš špatnou adresu.</p>
                <Link className={styles.backLink} to="/cafes">
                    Zpět na seznam kaváren
                </Link>
            </section>
        );
    }

    return (
        <section className={styles.detail}>
            <Link className={styles.backLink} to="/cafes">
                ← Zpět na kavárny
            </Link>

            <div className={styles.hero}>
                <img className={styles.image} src={cafe.imageUrl} alt={cafe.name} />

                <div className={styles.content}>
                    <p className={styles.eyebrow}>{cafe.city}</p>

                    <div className={styles.titleRow}>
                        <h1>{cafe.name}</h1>
                        <span className={styles.rating}>{cafe.rating.toFixed(1)} ★</span>
                    </div>

                    <p className={styles.description}>{cafe.longDescription}</p>

                    <div className={styles.actions}>
                        <FavoriteButton cafeId={cafe.id} />
                    </div>

                    <ul className={styles.tags}>
                        <li>{noiseLevelLabels[cafe.noiseLevel]}</li>
                        {cafe.hasWifi && <li>Wi-Fi</li>}
                        {cafe.hasPowerOutlets && <li>Zásuvky</li>}
                        {cafe.isBookFriendly && <li>Vhodné na čtení</li>}
                    </ul>
                </div>
            </div>

            <div className={styles.infoGrid}>
                <article className={styles.infoCard}>
                    <h2>Adresa</h2>
                    <p>{cafe.address}</p>
                </article>

                <article className={styles.infoCard}>
                    <h2>Otevírací doba</h2>
                    <p>{cafe.openingHours}</p>
                </article>
            </div>
        </section>
    );
}