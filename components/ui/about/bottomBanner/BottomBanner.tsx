/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */


import React from 'react';
import styles from './BottomBanner.module.scss';
import Image from "next/image";
import banner from '@/public/footer/footerImg.jpg'

const BottomBanner = () => {
    return (
        <section className={styles.mainContainer}>
            <Image src={banner} alt={'banner'} className={styles.img}  style={{width: '100%', height: '100%'}} />
        </section>
    );
};

export default BottomBanner;
