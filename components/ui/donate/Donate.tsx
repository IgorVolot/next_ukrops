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
import styles from "@/components/ui/donate/Donate.module.scss";
import {Button} from "@/components/ui/button/button";
import Link from "next/link";
import Image from "next/image";
import background from '@/public/donation/background.png'


const Donate: React.FC = () => {
    return (
        <section className={styles.mainContainer}>
            {/*<Image src={background} alt={''}/>*/}
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Donation</h1>
                <p className={styles.text}>
                    {`Welcome to the "UKROPS Medical". As a small newly registered charity we are aiming to continue
                        building up on the work started by our founder Leo Krivskiy. We continue to gratefully receive used
                        medical equipment and disposables from UK hospitals and medical companies, which is then delivered
                        into Ukraine by our partners at the Medical Lifelines UK and sent directly to our contacts who need
                        them most. There are no middlemen, or big charities involved – we know the people we help personally
                        and respond to their requests directly.`}
                </p>
                <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420" height="315"
                        src="https://www.youtube.com/embed/wKWVc-5VPFA?autoplay=1&mute=1">
                </iframe>
                <p className={styles.text}>
                    If you are an interested member of the public, welcome. Ultimately, we would like to be supporting
                    and facilitating the reconstruction of existing (and the development of new) hospitals and other
                    medical and healthcare facilities and infrastructure in Ukraine when the war is finally over. We are
                    starting small, but we are aiming big!
                </p>
                <p className={styles.text}>
                    At Ukrops, we are all doctors who not only have a deep understanding of the needs of the Ukrainian
                    medics but are also able to communicate to them in their language and appreciate and respond to the
                    real situation on the ground.
                    Having established relationships with numerous Ukrainian doctors, and particularly the ones in
                    leadership positions we are able to offer tailor-made aid packages that would have real and
                    long-lasting impact on the working lives of medics and their patients. We have a few potential
                    projects that we wanted to work on, but it all depends on the success of our fundraising campaigns.
                    At the moment, our main campaign is<a className={styles.link} href="https://www.leosrow.com/"
                                                          title="Leo_Row" target="_blank"> Leo’s Row</a> – a solo
                    transatlantic rowing challenge that Dr
                    Krivskiy is planning to embark upon in January 2025.
                    We are also involved in various educational and training projects both in Ukraine and over here in
                    the United Kingdom. We have already managed to bring a few Ukrainian doctors over here for short
                    clinical attachments, but the reality is that most of them are not able to afford the costs
                    involved. There is a great interest in both the Ukrainian, and the UK’s medical communities to learn
                    from each other’s experiences and it would be great to be able to help them learn more about the
                    Western healthcare model while sharing their experiences of treatment of major trauma with limited
                    resources in an unsafe environment.
                    Ultimately, we would like to be supporting and facilitating the reconstruction of existing (and the
                    development of new) hospitals and other medical and healthcare facilities and infrastructure in
                    Ukraine when the war is finally over. We are starting small, but we are aiming big!
                </p>
                <Button asChild className={styles.button}>
                    <Link href="/login">DONATE</Link>
                </Button>
                <Button asChild className={styles.button}>
                    <Link href="/login">BACK</Link>
                </Button>

            </div>

        </section>
    );
};

export default Donate;
