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

    // Form Submit function
    const formSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });
        fetch('https://getform.io/f/8a3e3f67-0fb6-422f-a22d-b3172adb3333', {
            method: 'POST',
            body: formData,
        }).then(() => {
            setQuery({ name: '', email: '', message: '' });
            setSubmitted(true);
        });
    };

    return (
        <div className={classNames(styles.root, className)}>
            {submitted && (
                <div className={styles['animation-wrapper']}>
                    <Lottie
                        animationData={formAnimation}
                        loop={false}
                        className={styles['form-animation']}
                    />
                </div>
            )}
            {!submitted && (
                <>
                    <h2 className={styles['form-title']}>Get in touch 👋</h2>
                    <form onSubmit={formSubmit} className={styles.form}>
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
                            className={classNames('form-control', styles.input)}
                            value={query.email}
                            onChange={handleParam()}
                        />
                        <label className={styles.label}>Message</label>
                        <textarea
                            name="message"
                            required
                            className={classNames('form-control', styles.input)}
                            value={query.message}
                            onChange={handleParam()}
                        />
                        <button type="submit" className={styles.submit}>
                            Send
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};
