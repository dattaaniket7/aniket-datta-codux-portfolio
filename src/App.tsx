import { useState } from 'react';
import styles from './App.module.scss';
import { Intro } from './components/intro/intro';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Intro />
        </div>
    );
}

export default App;
