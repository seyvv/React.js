import { useCafes } from '@/hooks/useCafes';

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

            <ul>
                {cafes.map((cafe) => (
                    <li key={cafe.id}>
                        <h2>{cafe.name} – {cafe.city}</h2>
                        <p>{cafe.description}</p>
                        <img src={cafe.imageUrl} alt={cafe.name} width={200} />
                    </li>
                ))}
            </ul>
        </section>
    )
}