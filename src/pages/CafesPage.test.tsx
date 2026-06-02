import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { CafesPage } from './CafesPage';

const mockCafes = [
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
        name: 'Espresso & Pages',
        city: 'Brno',
        address: 'Česká 5, Brno',
        description: 'Moderní kavárna vhodná na práci.',
        longDescription: 'Kavárna nabízí rychlou Wi-Fi a několik stolů u zásuvek.',
        imageUrl: 'https://example.com/image-2.jpg',
        noiseLevel: 'moderate',
        hasWifi: true,
        hasPowerOutlets: true,
        isBookFriendly: true,
        rating: 4.4,
        openingHours: 'Po–Ne 7:30–21:00',
        tags: ['wifi', 'work friendly'],
    },
    {
        id: 3,
        name: 'Čtecí dvorek',
        city: 'Olomouc',
        address: 'Křížkovského 3, Olomouc',
        description: 'Klidná kavárna s venkovním dvorkem.',
        longDescription: 'Tiché prostředí vhodné na pomalé čtení.',
        imageUrl: 'https://example.com/image-3.jpg',
        noiseLevel: 'quiet',
        hasWifi: false,
        hasPowerOutlets: false,
        isBookFriendly: true,
        rating: 4.5,
        openingHours: 'Po–So 9:00–18:00',
        tags: ['quiet', 'books'],
    },
];

function renderWithProviders() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    return render(
        <QueryClientProvider client={queryClient}>
            <FavoritesProvider>
                <BrowserRouter>
                    <CafesPage />
                </BrowserRouter>
            </FavoritesProvider>
        </QueryClientProvider>,
    );
}

const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};

vi.stubGlobal('localStorage', localStorageMock);


describe('CafesPage', () => {
    afterEach(() => {
        vi.restoreAllMocks();
        vi.clearAllMocks();
    });

    it('renders cafes and filters them by selected city', async () => {
        vi.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: true,
            json: async () => mockCafes,
        } as Response);

        const user = userEvent.setup();

        renderWithProviders();

        expect(await screen.findByText('Kavárna Mezi řádky')).toBeInTheDocument();
        expect(screen.getByText('Espresso & Pages')).toBeInTheDocument();
        expect(screen.getByText('Čtecí dvorek')).toBeInTheDocument();

        await user.selectOptions(screen.getByLabelText(/město/i), 'Praha');

        expect(screen.getByText('Kavárna Mezi řádky')).toBeInTheDocument();
        expect(screen.queryByText('Espresso & Pages')).not.toBeInTheDocument();
        expect(screen.queryByText('Čtecí dvorek')).not.toBeInTheDocument();
    });
});