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
import styles from "@/components/ui/aboutPage/aboutHero/AboutHero.module.scss";
import AboutLeft from '@/components/ui/aboutPage/aboutHero/AboutLeft';
import AboutRight from '@/components/ui/aboutPage/aboutHero/AboutRight';
import Image from "next/image";
import backgroundImage from "@/public/aboutPage/hero/Hero.png";

const AboutHero:React.FC = () => {
    return (
        <section className={styles.mainSection}>
            <div className={`${styles.mainContainer}`}>
                <Image src={backgroundImage} alt='backgroundImage' className='backgroundImage w-full bg-cover bg-no-repeat' />
                <AboutLeft />
                <AboutRight/>
            </div>
        </section>
    );
};

export default AboutHero;
