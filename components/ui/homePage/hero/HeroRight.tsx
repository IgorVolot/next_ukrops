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
                className={`${styles.relative} ${styles.imageContainer} `}>
                <Image
                    src={hero}
                    alt="Hero"
                    className={styles.img}
                    priority
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
}

export default HeroRight;