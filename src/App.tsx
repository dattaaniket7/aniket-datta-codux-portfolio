import styles from './App.module.scss';
import { Home } from './components/home/home';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';

function App() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
