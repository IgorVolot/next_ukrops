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
import styles from './DonateUs.module.scss';
import Link from "next/link";
import {Button} from "@/components/ui/button/button";

const DonateUs = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.textBlock}>
                <p className={styles.subTitle}>How donation can help</p>
                <h1 className={styles.title}>Donation</h1>
                <p className={styles.text}>
                    {`Welcome to the "UKROPS Medical". As a small newly registered charity we are aiming to continue
                        building up on the work started by our founder Leo Krivskiy. We continue to gratefully receive used
                        medical equipment and disposables from UK hospitals and medical companies, which is then delivered
                        into Ukraine by our partners at the Medical Lifelines UK and sent directly to our contacts who need
                        them most. There are no middlemen, or big charities involved – we know the people we help personally
                        and respond to their requests directly.`}
                </p>
                <p className={styles.text}>
                    If you are an interested member of the public, welcome. Ultimately, we would like to be supporting
                    and facilitating the reconstruction of existing (and the development of new) hospitals and other
                    medical and healthcare facilities and infrastructure in Ukraine when the war is finally over. We are
                    starting small, but we are aiming big!
                </p>
                <Button asChild className={styles.button}>
                    <Link href="/about/donation">Read more</Link>
                </Button>
            </div>
            <div className={styles.mediaBlock}>
                <iframe title="Leo-Row-Atlantic" width="420" height="315"
                        src="https://www.youtube.com/embed/wKWVc-5VPFA?autoplay=1&mute=1">
                </iframe>
            </div>
        </section>
    );
};

export default DonateUs;
