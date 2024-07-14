/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import React from 'react';
import styles from './Founders.module.scss'
import leo from '../../../../../public/aboutPage/founders/img_leo.jpeg'
import anna from '../../../../../public/aboutPage/founders/img_anna.jpeg'
import justas from '../../../../../public/aboutPage/founders/img_justas.jpeg'
import Image from "next/image";

const Founders: React.FC = () => {
    return (
        <section className={styles.mainContainer}>
            <div>
                <h1 className={styles.mainTitle}>Foundation founders</h1>
            </div>
            <div className={styles.cardBlock}>

                <div
                    className={styles.card}>
                    <Image className={styles.img} src={leo} alt="Leo" width={300} height={300}/>
                    <div className="p-5">
                        <h2 className={styles.title}>Dr. Leo Krivskiy</h2>
                        <h3 className={styles.subTitle}>Founder</h3>
                        <div className={styles.article}>
                            <p className={styles.text}>As a small charity, I would like to set up realistic, but
                                impactful
                                goals, which would make a real difference to the lives of the people that I know,
                                respect
                                and trust. Hence, I have made a decision to concentrate on helping doctors who are also
                                in
                                leadership positions within their hospitals and will be able to make real positive
                                changes.
                            </p>
                            <p className={styles.text}>
                                Dr. Leonid Krivskiy,
                                the driving force behind UKROPS qualified from a Moscow University and went on to train
                                and
                                work as an Anaesthetist in Russia and the UK. He has been a Consultant Anaesthetist at
                                the
                                University Hospital Southampton since 2009. He specialises in Major Surgery including
                                Vascular, Thoracic and liver surgery, but is a self-confessed “Jack-of-all-trades” who
                                tries
                                to maintain an expertise in a wide range of surgical specialities.
                            </p>
                            <p className={styles.text}>
                                He has been engaged in training of his Ukrainian colleagues for a long time, primarily
                                through online educational platforms, but also organising lectures and workshops in
                                Ukraine
                                since the annexation of Crimea and the start of the war in the Eastern Ukraine in 2014.
                                Since the Russian invasion in February, 2022 he has raised a significant amount of money
                                through his JustGiving page, which he has used to buy tactical medical kit and delivered
                                it
                                personally to Ukraine. He has also continued with his educational projects including
                                setting
                                up a joint online platform with his Intensive Care colleagues from the World-famous Mayo
                                Clinic in the U.S. called
                                <a className={styles.link} href="https://www.icertain.org/ukraine"
                                   title="CERTAIN Ukraine" target="_blank"> CERTAIN Ukraine
                                </a> which is aimed at providing Ukrainian
                                anaesthetists with the latest scientific evidence, as well as answering practical
                                clinical
                                questions. Dr Krivskiy also provides practical advice to his colleagues throughout
                                Ukraine
                                including those working at frontline hospitals and stabilisation facilities.
                            </p>
                            <p className={styles.text}>
                                He also visited a Kyiv hospital in March, 2023 where he worked and shared his experience
                                with his anaesthetic colleagues and friends. Dr. Krivskiy has been writing about his
                                experiences in Ukraine on his blog Leo Krivski – Real People. Real Stories. Real
                                Solutions.
                                He has also been recording stories of Ukrainian doctors there to let the World see the
                                war
                                through the eyes of ordinary Ukrainians whose lives have been turned upside down, and
                                what
                                choices they have had to made to survive and remain true to themselves. It has become a
                                project that Leonid considers to be just as important as any other aspect of his work in
                                Ukraine.
                            </p>
                            <p className={styles.text}>
                                Dr. Krivskiy is currently preparing to row across the Atlantic Ocean solo and unassisted
                                in
                                support of his Ukrainian medical colleagues. Hopefully, he will be able to raise enough
                                money for a bigger project, which would have a long-term impact on the lives of his
                                amazing
                                friends and contribute to the post-war recovery of their country.
                            </p>
                        </div>
                        <div>
                            <p
                                className={styles.signature}
                                id={styles.leoSignature}
                            >
                                Leo Krivskiy
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.card}>
                    <Image className={styles.img} src={anna} alt="Anna" width={300} height={300}/>
                    <div className="p-5">
                        <h2 className={styles.title}>Dr. Anna Hunter</h2>
                        <h3 className={styles.subTitle}>Co-Founder</h3>

                        <div className={styles.article}>
                            <p className={styles.text}>Anna Hunter qualified from Crimean State Medical University and
                                practiced as an anaesthetist in Ukraine and in the UK.
                            </p>
                            <p className={styles.text}>
                                Dr. Anna Hunter,
                                Currently she holds a Consultant Anaesthetist post in Queen Elizabeth University
                                Hospital in
                                Glasgow, sub-specialising in Obstetrics Anaesthesia and Anaesthesia for the ENT surgery,
                                as
                                well as delivering anaesthetic care for multiple other surgical specialties, including
                                Trauma and Orthopaedics, General and Vascular Surgery. She has non-clinical interest in
                                Medical Law, Complaints Management and Administrative justice and teaching
                                student-selected
                                Medical Law course at the University of Glasgow. Dr Hunter is also regular faculty at
                                the
                                Advanced Life Support (ALS) and IMPACT courses.
                            </p>
                            <p className={styles.text}>
                                Dr. Anna Hunter,
                                As a Ukrainian, Dr Hunter always desired to share the skills and expertise gained in the
                                UK
                                training to her Ukrainian counterparts, especially in the field of Obstetric Anaesthesia
                                and
                                Maternity Critical Care. She is delighted to become a trustee of the UKROPS Charity to
                                help
                                the charity to achieve its set goals and objectives, and especially the training of the
                                Ukrainian doctors and nurses, among other important goals.
                            </p>
                        </div>
                        <div>
                            <p
                                className={styles.signature}
                                id={styles.annaSignature}
                            >
                                Anna Hunter
                            </p>
                        </div>

                    </div>
                </div>
                <div
                    className={styles.card}>
                    <Image className={styles.img} src={justas} alt="Justas" width={300} height={300}/>
                    <div className="p-5">
                        <h2 className={styles.title}>Dr. Justas Mazunaitis</h2>
                        <h3 className={styles.subTitle}>Co-Founder</h3>
                        <div className={styles.article}>
                            <p className={styles.text}>Justas Mazunaitis has trained and worked as an anaesthetist in
                                Lithuania and arrived to the UK in 2014, coincidentally - the time when annexation of
                                Crimea was happening.
                            </p>
                            <p className={styles.text}>
                                Dr. Justas Mazunaitis
                                completed a fellowship in Trauma Intensive Care and later switched to anaesthetics with
                                special interest in trauma and regional anaesthesia at the Royal London Hospital where
                                he
                                worked as a consultant.
                            </p>
                            <p className={styles.text}>
                                He is currently practicing anaesthetics at University Hospital Southampton NHS
                                Foundation
                                Trust with main focus to trauma and regional anaesthesia.
                            </p>
                            <p className={styles.text}>
                                {`Justas has taken part in Dr. Leonid Krivskiy's efforts gathering and taking essential
                                supplies and vehicles to Ukraine in the early days of the war, and as someone coming from
                                the Baltics where the historical presence and wrongdoings of the current invader of Ukraine
                                had been felt for years, is keen to support the efforts of UKROPS charity.`}
                            </p>
                        </div>
                        <div>
                            <p
                                id={styles.justasSignature}
                                className={styles.signature}
                            >
                                Mazunaitis Justas
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    );
};

export default Founders;
