import { HomePage } from '@/pages/HomePage';
import { CafesPage } from '@/pages/CafesPage';
import { Layout } from '@/components/Layout';
import { Route, Routes } from 'react-router-dom';
import { CafeDetailPage } from '@/pages/CafeDetailPage';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={
            <>
              <HomePage />
              <CafesPage />
            </>
          }
        />
        <Route path='/cafes' element={<CafesPage />} />
        <Route path='/cafes/:id' element={<CafeDetailPage />} />
      </Route>
    </Routes>

  );
}

export default App
