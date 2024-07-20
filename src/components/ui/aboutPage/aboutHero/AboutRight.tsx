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
                <h1 className={styles.title}>UKROPS Medical</h1>
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
                        </a> who had started raising money to help his Ukrainian colleagues since the beginning of
                        Russian invasion.
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
                <div className={`${styles.buttonBlock}  border-b-2 border-double border-slate-300`}>
                    <Button className={`${styles.button} mb-6 `}>
                        <Link href="/login">Donate Now</Link>
                    </Button>
                </div>

                <div className={styles.emailBlock}>
                    <p className={`${styles.text} mt-2 md:mt-12`}>
                        <Link href="/contact" title='contact'>
                            Have any questions?
                        </Link>
                    </p>
                    <p className={`${styles.text} mb-2 md:mb-4`}>
                        <Link href="/contact" title='contact'>
                            Contact us!
                        </Link>

                    </p>
                    <a href="mailto:leo@ukropsmedical.org" title="mail" className={`${styles.link} text-lg`}>
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
