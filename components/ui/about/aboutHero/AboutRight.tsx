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
import styles from "@/components/ui/about/aboutHero/AboutHero.module.scss";

const AboutRight = () => {
    return (
        <div className={styles.aboutHeroRight}>
            <div className={`${styles.textBlock} absolute lg:max-w-lg lg:top-80 lg:right-72`}>
                <h1 className="text-5xl font-bold">UKROPS Medical</h1>
                <div className="block text-slate-700 mt-2 md:mt-8 ">
                    <p >
                        The UKROPS Medical Charity was formed by a group of UK doctors to provide a direct aid to
                        Ukrainian
                        medics. It was a logical progression of the work that was already being done by its founder Dr
                        Leonid Krivskiy who had started raising money to help his Ukrainian colleagues since the
                        beginning
                        of Russian invasion.
                        He has been sourcing and delivering tactical medical and hospital disposables into Ukraine as
                        well
                        as worked alongside his Ukrainian colleagues in a tertiary hospital in Kyiv.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutRight;
