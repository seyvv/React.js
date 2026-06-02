import { Link } from 'react-router-dom';
import type { Cafe } from '@/types/cafe.types';
import styles from './CafeCard.module.css';

type CafeCardProps = {
    cafe: Cafe;
};

const noiseLevelLabels = {
    quiet: 'Tiché',
    moderate: 'Středně rušné',
    busy: 'Rušné',
};

export function CafeCard({ cafe }: CafeCardProps) {
    return (
        <article className={styles.card}>
            <img className={styles.image} src={cafe.imageUrl} alt={cafe.name} />

            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>{cafe.name}</h2>
                    <span className={styles.rating}>{cafe.rating.toFixed(1)} ★</span>
                </div>

                <p className={styles.city}>{cafe.city}</p>
                <p>{cafe.description}</p>

                <ul className={styles.tags}>
                    <li>{noiseLevelLabels[cafe.noiseLevel]}</li>
                    {cafe.hasWifi && <li>Wi-Fi</li>}
                    {cafe.hasPowerOutlets && <li>Zásuvky</li>}
                    {cafe.isBookFriendly && <li>Vhodné na čtení</li>}
                </ul>

                <Link className={styles.detailLink} to={`/cafes/${cafe.id}`}>
                    Zobrazit detail
                </Link>
            </div>
        </article>
    );
}