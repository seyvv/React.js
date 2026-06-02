import { useCafes } from '@/hooks/useCafes';
import { CafeCard } from '@/components/CafeCard';
import { CafeFilters } from '@/components/CafeFilters';
import type { CafeFilters as CafeFiltersType } from '@/types/cafeFilters.types';
import { filterCafes } from '@/utils/filterCafes';
import { useState } from 'react';
import styles from "./CafesPage.module.css";

const defaultFilters: CafeFiltersType = {
    city: 'all',
    noiseLevel: 'all',
    hasWifi: false,
    hasPowerOutlets: false,
    isBookFriendly: false,
};

export function CafesPage() {
    const [filters, setFilters] = useState<CafeFiltersType>(defaultFilters);
    const { data: cafes = [], isLoading, isError, error } = useCafes();

    const cities = Array.from(new Set(cafes.map((cafe) => cafe.city)));
    const filteredCafes = filterCafes(cafes, filters);

    if (isLoading) {
        return <p>Načítám kavárny...</p>;
    }

    if (isError) {
        return <p>Chyba při načítání kaváren: {error.message}</p>;
    }

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Doporučené kavárny</h2>
                <p>Výběr míst, kde si můžeš v klidu číst, učit se nebo vytáhnout notebook bez pocitu, že překážíš.</p>
            </div>

            <CafeFilters filters={filters} cities={cities} onChange={setFilters} />

            <p className={styles.resultCount}>
                Nalezeno kaváren: {filteredCafes.length}
            </p>

            {filteredCafes.length > 0 ? (
                <div className={styles.grid}>
                    {filteredCafes.map((cafe) => (
                        <CafeCard key={cafe.id} cafe={cafe} />
                    ))}
                </div>
            ) : (
                <p className={styles.empty}>
                    Žádná kavárna neodpovídá vybraným filtrům.
                </p>
            )}

        </section>
    );
}