import { useState } from 'react';
import styles from './App.module.scss';
import { Intro } from './components/intro/intro';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Intro />} />
            </Routes>
        </div>
    );
}

export default App;
