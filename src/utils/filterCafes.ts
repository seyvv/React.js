import type { Cafe } from '@/types/cafe.types';
import type { CafeFilters } from '@/types/cafeFilters.types';

export function filterCafes(cafes: Cafe[], filters: CafeFilters): Cafe[] {
    return cafes.filter((cafe) => {
        const matchesCity = filters.city === 'all' || cafe.city === filters.city;
        const matchesNoiseLevel = filters.noiseLevel === 'all' || cafe.noiseLevel === filters.noiseLevel;
        const matchesWifi = !filters.hasWifi || cafe.hasWifi;
        const matchesPowerOutlets = !filters.hasPowerOutlets || cafe.hasPowerOutlets;
        const matchesBookFriendly = !filters.isBookFriendly || cafe.isBookFriendly;

        return (
            matchesCity &&
            matchesNoiseLevel &&
            matchesWifi &&
            matchesPowerOutlets &&
            matchesBookFriendly
        );
    });
}