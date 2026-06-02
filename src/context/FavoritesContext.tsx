import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type FavoritesContextValue = {
    favorites: number[];
    toggleFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

type FavoritesProviderProps = {
    children: ReactNode;
};

export function FavoritesProvider({ children }: FavoritesProviderProps) {
    const [favorites, setFavorites] = useState<number[]>(() => {
        const storedValue = localStorage.getItem('favoriteCafeIds');

        if (!storedValue) {
            return [];
        }

        try {
            return JSON.parse(storedValue) as number[];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('favoriteCafeIds', JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(id: number) {
        setFavorites((currentFavorites) =>
            currentFavorites.includes(id)
                ? currentFavorites.filter((favoriteId) => favoriteId !== id)
                : [...currentFavorites, id],
        );
    }

    function isFavorite(id: number) {
        return favorites.includes(id);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }

    return context;
}