import { Link } from 'react-router-dom';
import { CafeCard } from '@/components/CafeCard';
import { useFavorites } from '@/context/FavoritesContext';
import { useCafes } from '@/hooks/useCafes';
import styles from './FavoritesPage.module.css';

export function FavoritesPage() {
    const { favorites } = useFavorites();
    const { data: cafes = [], isLoading, isError, error } = useCafes();

    const favoriteCafes = cafes.filter((cafe) => favorites.includes(cafe.id));

    if (isLoading) {
        return <p>Načítám oblíbené kavárny...</p>;
    }

    if (isError) {
        return <p>Něco se pokazilo: {error.message}</p>;
    }

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h1>Oblíbené kavárny</h1>
                <p>
                    Tady najdeš kavárny uložené kavárny pro pozdější čtení, učení nebo práci.
                </p>
            </div>

            {favoriteCafes.length > 0 ? (
                <div className={styles.grid}>
                    {favoriteCafes.map((cafe) => (
                        <CafeCard key={cafe.id} cafe={cafe} />
                    ))}
                </div>
            ) : (
                <div className={styles.empty}>
                    <h2>Zatím tu nic není</h2>
                    <p>Ulož si první kavárnu a objeví se tady.</p>
                    <Link to="/cafes">Procházet kavárny</Link>
                </div>
            )}
        </section>
    );
}