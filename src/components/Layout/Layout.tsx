import React from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;
