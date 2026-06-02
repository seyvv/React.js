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
        <section>
            <h1>Kavárny</h1>

            <div className={styles.grid}>
                {cafes.map((cafe) => (
                    <CafeCard key={cafe.id} cafe={cafe} />
                ))}
            </div>
        </section>
    );
}