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
import styles from './OurActivity.module.scss';
import img1 from '@/public/aboutPage/ourActivity/img1.jpg'
import img2 from '@/public/aboutPage/ourActivity/img2.jpeg'
import img3 from '@/public/aboutPage/ourActivity/img3.jpeg'
import Image from "next/image";

const OurActivity: React.FC = () => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.textBlock}>
                <h1 className={styles.title}>Our activity</h1>
                <p className={styles.text}>
                    Based on the funds that we will be able to raise we will be getting involved in the projects that
                    will have a long-lasting and meaningful impact on the professional lives of our Ukrainian
                    colleagues. We will continue to get involved in education and training programmes including bringing
                    the colleagues over to the UK for Clinical Attachments, organising online and in-person lectures,
                    seminars, and master classes.
                </p>
            </div>
            <div className={styles.cardContainer}>


                <div className={styles.card}>
                    <Image className={styles.img} src={img1} alt="Leo_row" width={400} height={400}/>
                    <div className="p-5">
                        <h5 className={styles.title}>The solo Atlantic rowing</h5>
                        <p className={styles.cardText}> In January 2025, Leo will
                            embark on the extraordinary challenge of rowing solo across the Atlantic. Starting from
                            Tenerife and finishing in Barbados, this voyage is a true test of both physical strength and
                            mental resilience. Leo will navigate through the vast, open
                            waters, battling against unpredictable weather and [...]</p>
                        <div className={styles.footer}>
                            <data className={styles.data}>
                                January 2025
                            </data>
                            <a href={"https://www.leosrow.com/"} className={styles.link} target={'_blank'}> Read more</a>

                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image className={styles.img} src={img2} alt="aid" width={400} height={400}/>
                    <div className="p-5">
                        <h5 className={styles.title}>Latest trip to Ukraine to bring aid</h5>
                        <p className={styles.cardText}>{`I support through my travels
                            through my educational activity. Since 2014 I've been involved with my Ukrainian anesthetic
                            colleagues both by going there organizing seminars and conferences. I know quite a few
                            people in the medical world in Ukraine and I'm able to contact them directly and I really
                            know [...]`}</p>
                        <div className={styles.footer}>
                            <data className={styles.data}>
                                March 2024
                            </data>
                            <a href={"https://ukrivski.com/category/my-trips-to-ukraine/"} className={styles.link} target={'_blank'}>Read more</a>

                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image className={styles.img} src={img3} alt="aid" width={400} height={400}/>
                    <div className="p-5">
                        <h5 className={styles.title}>Join us to help</h5>
                        <p className={styles.cardText}> I am buying tactical medical disposables, and equipment, and
                            deliver it myself to Ukraine, where it is distributed directly to the people, who currently
                            need it most. I know everyone involved personally, and you could look into their eyes too.
                            Everything is being bought, and prioritized according to their current needs [...]</p>
                        <div className={styles.footer}>
                            <data className={styles.data}>
                                May 2022
                            </data>
                            <a href={"https://www.justgiving.com/crowdfunding/leonid-krivskiy"} className={styles.link} target={'_blank'}>Read more</a>

                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default OurActivity;
