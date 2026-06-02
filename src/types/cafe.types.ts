export type NoiseLevel = 'quiet' | 'moderate' | 'busy';

export type Cafe = {
    id: number;
    name: string;
    city: string;
    address: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    noiseLevel: NoiseLevel;
    hasWifi: boolean;
    hasPowerOutlets: boolean;
    isBookFriendly: boolean;
    rating: number; // 1 to 5
    openingHours: string; // e.g., "8:00 AM - 10:00 PM"
    tags: string[];
};