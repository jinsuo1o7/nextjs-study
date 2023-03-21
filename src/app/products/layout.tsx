import React from 'react';
import styles from './layout.module.css';
const ProductLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <ul className={styles.nav}>
                <li>Man</li>
                <li>Woman</li>
            </ul>
            <section>{children}</section>
        </>
    );
};

export default ProductLayout;