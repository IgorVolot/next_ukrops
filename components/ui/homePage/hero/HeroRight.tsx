/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */

'use client'
import {FC} from "react";
import Image from "next/image";
import hero from "@/public/homePage/hero/hero.jpg";
import styles from './Hero.module.scss'


const HeroRight: FC = () => {
    return (
        <div className={styles.heroRight}>
            <div
                className={`${styles.relative} ${styles.imageContainer}`}>
                <Image
                    src={hero}
                    alt="Hero"
                    className={styles.img}
                    priority
                    width={600}
                    height={600}
                />
            </div>
            <svg
                className={styles.svgSmall}
                height="100%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="7"/>
            </svg>
            <svg
                className={styles.svgLarge}
                height="140%"
                width="140%"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="67" cy="30" r="50"/>
            </svg>
        </div>
    );
}

export default HeroRight;