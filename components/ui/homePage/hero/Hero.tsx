/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */

import {FC} from "react";
import HeroRight from "@/components/ui/homePage/hero/HeroRight";
import HeroLeft from "@/components/ui/homePage/hero/HeroLeft";
import styles from "@/components/ui/homePage/hero/Hero.module.scss";
import background from '@/public/homePage/hero/background.png'
import Image from "next/image";

const Hero: FC = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.mainContainer}>
                <Image src={background} alt='background' className='backgroundImage w-full bg-cover bg-no-repeat'/>
                <HeroLeft/>
                <HeroRight/>
            </div>
        </section>
    );
}

export default Hero;