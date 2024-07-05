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

const Hero: FC = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.mainContainer}>
                <HeroLeft/>
                <HeroRight/>
            </div>
        </section>
    );
}

export default Hero;