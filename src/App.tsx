import { useState } from 'react';
import styles from './App.module.css';
import { HomePage } from '@/pages/HomePage';
import { CafesPage } from '@/pages/CafesPage';

function App() {

  return (
    <main className={styles.app}>
      <HomePage />
      <CafesPage />
    </main>
  )
}

export default App
