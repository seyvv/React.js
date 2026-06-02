import type { CafeFilters } from "@/types/cafeFilters.types";
import styles from './CafeFilters.module.css';

type CafeFiltersProps = {
    filters: CafeFilters;
    cities: string[];
    onChange: (filters: CafeFilters) => void;
};

export function CafeFilters({
    filters,
    cities,
    onChange,
}: CafeFiltersProps) {
    return (
        <form className={styles.filters}>
            <label className={styles.field}>
                <span>Město</span>
                <select
                    value={filters.city}
                    onChange={(event) => {
                        onChange({
                            ...filters, city: event.target.value,
                        })
                    }}
                >
                    <option value='all'>Všechna města</option>

                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            </label>

            <label className={styles.field}>
                <span>Hlučnost</span>
                <select
                    value={filters.noiseLevel}
                    onChange={(event) =>
                        onChange({
                            ...filters, noiseLevel: event.target.value as CafeFilters['noiseLevel'],
                        })
                    }
                >
                    <option value='all'>Všechny úrovně hlučnosti</option>
                    <option value='quiet'>Tiché</option>
                    <option value='moderate'>Středně hlučné</option>
                    <option value='noisy'>Hlučné</option>
                </select>
            </label>

            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={filters.hasWifi}
                    onChange={(event) =>
                        onChange({
                            ...filters, hasWifi: event.target.checked,
                        })
                    }
                />
                <span>Wi-Fi</span>
            </label>

            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={filters.hasPowerOutlets}
                    onChange={(event) =>
                        onChange({
                            ...filters, hasPowerOutlets: event.target.checked,
                        })
                    }
                />
                <span>Zásuvky</span>
            </label>

            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={filters.isBookFriendly}
                    onChange={(event) =>
                        onChange({
                            ...filters, isBookFriendly: event.target.checked,
                        })
                    }
                />
                <span>Vhodné na čtení</span>
            </label>

        </form>
    )
}