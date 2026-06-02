import { useCafes } from '@/hooks/useCafes';
import { CafeCard } from '@/components/CafeCard';
import styles from "./CafesPage.module.css";

export function CafesPage() {
    const { data: cafes = [], isLoading, isError, error } = useCafes();

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

            <div className={styles.grid}>
                {cafes.map((cafe) => (
                    <CafeCard key={cafe.id} cafe={cafe} />
                ))}
            </div>
        </section>
    );
}