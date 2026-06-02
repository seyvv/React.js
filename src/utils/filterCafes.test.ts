import { describe, expect, it } from 'vitest';
import type { Cafe } from '@/types/cafe.types';
import type { CafeFilters } from '@/types/cafeFilters.types';
import { filterCafes } from './filterCafes';

const cafes: Cafe[] = [
    {
        id: 1,
        name: 'Kavárna Mezi řádky',
        city: 'Praha',
        address: 'Vodičkova 12, Praha',
        description: 'Tichá kavárna s knihovnou.',
        longDescription: 'Ideální místo pro čtení nebo klidné studium.',
        imageUrl: 'https://example.com/image-1.jpg',
        noiseLevel: 'quiet',
        hasWifi: true,
        hasPowerOutlets: true,
        isBookFriendly: true,
        rating: 4.8,
        openingHours: 'Po–Pá 8:00–20:00',
        tags: ['quiet', 'wifi', 'books'],
    },
    {
        id: 2,
        name: 'Urban Brew Hub',
        city: 'Praha',
        address: 'Karlínské náměstí 4, Praha',
        description: 'Rušnější kavárna na práci.',
        longDescription: 'Hodí se hlavně na práci s notebookem.',
        imageUrl: 'https://example.com/image-2.jpg',
        noiseLevel: 'busy',
        hasWifi: true,
        hasPowerOutlets: true,
        isBookFriendly: false,
        rating: 4.1,
        openingHours: 'Po–Ne 7:00–22:00',
        tags: ['wifi', 'power outlets'],
    },
    {
        id: 3,
        name: 'Tichý Šálek',
        city: 'Olomouc',
        address: 'Univerzitní 8, Olomouc',
        description: 'Malá útulná kavárna.',
        longDescription: 'Klidná kavárna vhodná na čtení.',
        imageUrl: 'https://example.com/image-3.jpg',
        noiseLevel: 'quiet',
        hasWifi: true,
        hasPowerOutlets: false,
        isBookFriendly: true,
        rating: 4.6,
        openingHours: 'Po–Pá 9:00–19:00',
        tags: ['quiet', 'books'],
    },
];

describe('filterCafes', () => {
    it('returns all cafes when filters are set to default values', () => {
        const filters: CafeFilters = {
            city: 'all',
            noiseLevel: 'all',
            hasWifi: false,
            hasPowerOutlets: false,
            isBookFriendly: false,
        };

        const result = filterCafes(cafes, filters);

        expect(result).toHaveLength(3);
    });

    it('filters cafes by city', () => {
        const filters: CafeFilters = {
            city: 'Olomouc',
            noiseLevel: 'all',
            hasWifi: false,
            hasPowerOutlets: false,
            isBookFriendly: false,
        };

        const result = filterCafes(cafes, filters);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Tichý Šálek');
    });

    it('filters cafes by noise level and power outlets', () => {
        const filters: CafeFilters = {
            city: 'all',
            noiseLevel: 'quiet',
            hasWifi: false,
            hasPowerOutlets: true,
            isBookFriendly: false,
        };

        const result = filterCafes(cafes, filters);

        expect(result).toHaveLength(1);
        expect(result[0].name).toBe('Kavárna Mezi řádky');
    });
});