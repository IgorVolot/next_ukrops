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
import styles from './AboutUs.module.scss';
import img1 from '@/public/about/aboutUs/img1.jpeg'
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button/button";

const AboutUs:React.FC = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.block}>
                <div className={styles.textBlock}>
                    <p className={styles.subTitle}>WHO WE ARE</p>
                    <h1 className={styles.title}>About us</h1>
                    <p className={styles.text}>
                        As a small charity, I would like to set up realistic, but impactful goals, which would make a
                        real difference to the lives of the people that I know, respect and trust. Hence, I have made a
                        decision to concentrate on helping doctors who are also in leadership positions within their
                        hospitals
                        and will be able to make real positive changes.

                    </p>
                    <p className={styles.text}>
                        Dr. Leonid Krivskiy, the driving force behind UKROPS qualified from a Moscow University and went
                        on to train and work as an Anaesthetist in Russia and the UK. He has been a Consultant
                        Anaesthetist
                        at the University Hospital Southampton since 2009. He specialises in Major Surgery including
                        Vascular, Thoracic and liver surgery, but is a self-confessed “Jack-of-all-trades” who tries to
                        maintain
                        an expertise in a wide range of surgical specialities.
                    </p>
                    <div className={styles.buttonBlock}>
                        <Button asChild className={styles.button}>
                            <Link href="/login">Read more</Link>
                        </Button>
                    </div>
                </div>

                <div className={styles.imageBlock}>
                    <Image src={img1} alt="About_Us" className={styles.img} width={1400} height={1400}/>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;