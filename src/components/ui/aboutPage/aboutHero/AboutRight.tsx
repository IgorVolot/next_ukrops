/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import React from 'react';
import styles from "./AboutHero.module.scss";
import Link from "next/link";
import {Button} from "@nextui-org/react";

const AboutRight = () => {
    return (
        <div className={styles.aboutHeroRight}>
            <div className={`${styles.textBlock}`}>
                <h1 className="text-5xl font-bold">UKROPS Medical</h1>
                <div className="mt-2 md:mt-8 ">
                    <p className={`${styles.text} mt-2 md:mt-8`}>
                        The UKROPS Medical Charity was formed by a group of UK doctors to provide a direct aid to
                        Ukrainian medics. It was a logical progression of the work that was already being done by its
                        founder
                        <a
                            href="https://ukrivski.com/intro/"
                            target="_blank"
                            className={styles.link}
                            title="Welcome to my personal  project!"
                        > Dr. Leonid Krivskiy
                        </a> who had started raising money to help his Ukrainian colleagues since the beginning of Russian invasion.
                    </p>
                    <p className={`${styles.text} mt-2 md:mt-8`}>
                        He has been sourcing and delivering tactical medical and hospital disposables into Ukraine as
                        well as worked alongside his
                        <a
                            href="https://www.justgiving.com/crowdfunding/leonid-krivskiy"
                            target="_blank"
                            className={styles.link}
                            title="Crowdfunding to Ukrainian doctors, and frontline medics. on JustGiving"
                        > Ukrainian colleagues
                        </a> in a tertiary hospital in Kyiv.
                    </p>
                </div>
                <Button className={styles.button}>
                    <Link href="/login">Donate Now</Link>
                </Button>

                <div className="mt-4 md:mt-12 border-t-2 border-slate-300">
                    <p className={`${styles.text} mt-2 md:mt-12`}>
                        Have any questions?
                    </p>
                    <p className={`${styles.text} mb-2 md:mb-4`}>
                        Contact us!
                    </p>
                    <a href="mailto:leo@ukropsmedical.org" title="mail" className={styles.link}>
                        <address>
                            info@ukrops.medical.org
                        </address>
                    </a>

                </div>

            </div>


        </div>
    );
};

export default AboutRight;