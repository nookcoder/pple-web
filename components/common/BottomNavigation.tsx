import React from 'react';
import styles from '../../styles/common/bottomNavigation.module.scss';
import Link from "next/link";

const BottomNavigation: React.FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <Link href="/">홈</Link>
            <Link href="/story">사연</Link>
            <a href="#">채팅</a>
            <a href="#">마이페이지</a>
        </div>
    );
};

export default BottomNavigation;