import { useFavorites } from '@/context/FavoritesContext';
import styles from './FavoriteButton.module.css';

type FavoriteButtonProps = {
    cafeId: number;
};

export function FavoriteButton({ cafeId }: FavoriteButtonProps) {
    const { isFavorite, toggleFavorite } = useFavorites();
    const isSaved = isFavorite(cafeId);

    return (
        <button
            className={styles.button}
            type="button"
            onClick={() => toggleFavorite(cafeId)}
            aria-pressed={isSaved}
        >
            {isSaved ? 'Uloženo ★' : 'Uložit ☆'}
        </button>
    );
}