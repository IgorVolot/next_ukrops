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
import img1 from '@/public/aboutPage/hero/img1.jpg'
import img2 from '@/public/aboutPage/hero/img2.jpeg'
import img3 from '@/public/aboutPage/hero/img3.jpeg'
import img4 from '@/public/aboutPage/hero/img4.jpeg'
import img5 from '@/public/aboutPage/hero/img5.jpeg'
import img6 from '@/public/aboutPage/hero/img6.jpeg'
import img7 from '@/public/aboutPage/hero/img7.jpeg'
import img8 from '@/public/aboutPage/hero/img8.jpeg'

import styles from "@/components/ui/aboutPage/aboutHero/AboutHero.module.scss";
import Image from "next/image";

const AboutLeft = () => {
    return (
        <div className={`${styles.aboutHeroLeft} relative`}>
            <section className={styles.imgSection}>
                <Image src={img6} alt="hero" className={styles.img6} width={140} height={140} />
                <Image src={img8} alt="hero" className={styles.img8} width={210} height={210} />
                <Image src={img5} alt="hero" className={styles.img5} width={160} height={160} />
                <Image src={img4} alt="hero" className={styles.img4} width={170} height={170} />
                <Image src={img3} alt="hero" className={styles.img3} width={100} height={100} />
                <Image src={img2} alt="hero" className={styles.img2} width={90} height={90} />
                <Image src={img7} alt="hero" className={styles.img7} width={100} height={100} />
                <Image src={img1} alt="hero" className={styles.img1} width={220} height={220} />
            </section>
        </div>
    );
};

export default AboutLeft;
