import React from 'react';
import styles from './stylePages.module.css'

const HomePage = () => {
    return (
        <div>
            {
                <div className={styles.styleForLogo}>
                    <img src="https://ithub.ua/sites/default/files/okten-new.jpg" alt="okten"/>
                </div>
            }
        </div>
    );
};

export default HomePage;