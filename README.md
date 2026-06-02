# Cozy Pages

Cozy Pages je vlastní React aplikace pro hledání kaváren vhodných na čtení, studium nebo klidnou práci. Uživatel si může prohlížet seznam kaváren, filtrovat je podle vlastností, otevřít detail konkrétní kavárny a ukládat si oblíbená místa.

Projekt vznikl jako semestrální práce v Reactu.

## Funkce aplikace

* výpis kaváren z JSON dat
* filtrování kaváren podle města, hlučnosti, Wi-Fi a zásuvek
* detail konkrétní kavárny
* ukládání kaváren do oblíbených
* stránka s oblíbenými kavárnami
* ukládání oblíbených kaváren do `localStorage`
* routing mezi stránkami
* ošetření loading a error stavů při načítání dat
* stránka pro neexistující URL

## Použité technologie

* React
* TypeScript
* Vite
* React Router
* TanStack Query
* Context API
* CSS Modules
* Vitest
* React Testing Library

## Struktura projektu

```txt
src/
  components/
    CafeCard.tsx
    CafeFilters.tsx
    FavoriteButton.tsx
    Layout.tsx

  context/
    FavoritesContext.tsx

  hooks/
    useCafes.ts

  pages/
    CafeDetailPage.tsx
    CafesPage.tsx
    FavoritesPage.tsx
    HomePage.tsx
    NotFoundPage.tsx

  test/
    setup.ts

  types/
    cafe.types.ts
    cafeFilters.types.ts

  utils/
    filterCafes.ts
    filterCafes.test.ts

  App.tsx
  main.tsx
```

Data kaváren jsou uložená v souboru:

```txt
public/data/cafes.json
```

## Routing

Aplikace obsahuje tyto stránky:

| Cesta        | Popis                            |
| ------------ | -------------------------------- |
| `/`          | úvodní stránka a výpis kaváren   |
| `/cafes`     | seznam kaváren s filtrováním     |
| `/cafes/:id` | detail konkrétní kavárny         |
| `/favorites` | uložené oblíbené kavárny         |
| `*`          | stránka 404 pro neexistující URL |

## Data fetching

Načítání dat je řešené pomocí TanStack Query v hooku `useCafes`.

```ts
useQuery({
  queryKey: ['cafes'],
  queryFn: fetchCafes,
  staleTime: 5 * 60 * 1000,
});
```

Data se načítají z lokálního JSON souboru přes:

```ts
fetch('/data/cafes.json')
```

## Oblíbené kavárny

Oblíbené kavárny jsou řešené přes `FavoritesContext`.

Context poskytuje:

* `favoriteIds`
* `toggleFavorite(id)`
* `isFavorite(id)`

Oblíbené kavárny se ukládají do `localStorage`, takže zůstanou uložené i po obnovení stránky.

## Testy

Projekt obsahuje dva typy testů:

### Unit test

Unit test ověřuje pomocnou funkci `filterCafes`.

Soubor:

```txt
src/utils/filterCafes.test.ts
```

Testuje například:

* vrácení všech kaváren při výchozích filtrech
* filtrování podle města
* filtrování podle hlučnosti a dostupnosti zásuvek

### Integrační test

Integrační test ověřuje stránku `CafesPage`.

Soubor:

```txt
src/pages/CafesPage.test.tsx
```

Test kontroluje, že:

* se kavárny správně načtou a zobrazí
* uživatel může vybrat město ve filtru
* po změně filtru se zobrazí jen odpovídající kavárny

## Spuštění projektu

Nejdřív je potřeba nainstalovat závislosti:

```bash
npm install
```

Spuštění vývojového serveru:

```bash
npm run dev
```

Aplikace se spustí na adrese:

```txt
http://localhost:5173/
```

## Spuštění testů

```bash
npm run test
```

## Build projektu

```bash
npm run build
```

## Co projekt splňuje

| Požadavek          | Splnění v projektu                                                       |
| ------------------ | ------------------------------------------------------------------------ |
| Komponenty         | `CafeCard`, `CafeFilters`, `FavoriteButton`, `Layout`                    |
| Hooks              | `useCafes`, `useFavorites`                                               |
| Routing            | React Router stránky `/`, `/cafes`, `/cafes/:id`, `/favorites`           |
| Data fetching      | TanStack Query + `fetch('/data/cafes.json')`                             |
| TypeScript         | typy `Cafe`, `NoiseLevel`, `CafeFilters`                                 |
| Unit test          | test funkce `filterCafes`                                                |
| Integrační test    | test komponenty `CafesPage`                                              |
| Struktura projektu | rozdělení na `components`, `pages`, `hooks`, `context`, `utils`, `types` |
| README             | popis projektu, spuštění, technologie, testy                             |
