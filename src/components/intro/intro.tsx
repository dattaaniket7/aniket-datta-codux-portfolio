import classNames from 'classnames';
import styles from './intro.module.scss';
import { Animation } from '../animation/animation';
import { motion } from 'framer-motion';
import { Portfolio } from '../portfolio/portfolio';

export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h2 className={styles.title}>Aniket Datta</h2>
                <h3 className={styles.h3}>Software Developer</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.line}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                <p className={styles.p}>Creative Front-End Web Developer</p>
                <button className={styles.cta}>Let&apos;s get in touch 🥱</button>
            </div>
            <Animation />
            <Portfolio />
        </div>
    );
};
