import type { NoiseLevel } from './cafe.types';

export type CafeFilters = {
    city: string;
    noiseLevel: NoiseLevel | 'all';
    hasWifi: boolean;
    hasPowerOutlets: boolean;
    isBookFriendly: boolean;
};