import type { Cafe } from '@/types/cafe.types';
import { useQuery } from '@tanstack/react-query';

async function fetchCafes(): Promise<Cafe[]> {
    const response = await fetch('/data/cafes.json');

    if (!response.ok) {
        throw new Error('Nepodařilo se načíst kavárny');
    }

    return response.json();
}

export function useCafes() {
    return useQuery({
        queryKey: ['cafes'],
        queryFn: fetchCafes,
        staleTime: 1000 * 60 * 5, // 5 minut
    });
}

