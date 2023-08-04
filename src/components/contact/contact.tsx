import classNames from 'classnames';
import styles from './contact.module.scss';
import { useState } from 'react';
import formAnimation from '../../assets/form-submitted.json';
import Lottie from 'lottie-react';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    const [query, setQuery] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    // Update inputs value
    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <div className={classNames(styles.root, className)}>
            <h2 className={styles['form-title']}>Get in touch 👋</h2>
            <form className={styles.form}>
                <label className={styles.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    value={query.name}
                    onChange={handleParam()}
                    className={styles.input}
                />
                <label className={styles.label}>Email</label>
                <input
                    type="text"
                    name="email"
                    required
                    className={styles.input}
                    value={query.email}
                    onChange={handleParam()}
                />
                <label className={styles.label}>Message</label>
                <input
                    name="message"
                    required
                    className={styles.input}
                    value={query.message}
                    onChange={handleParam()}
                />
            </form>
        </div>
    );
};
