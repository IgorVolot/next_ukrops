/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import React from 'react';
import Image from "next/image";
import styles from './Voices.module.scss'
import img1 from '../../../../../public/homePage/respondents/img1.jpg'
import img2 from '../../../../../public/homePage/respondents/img2.jpeg'
import img3 from '../../../../../public/homePage/respondents/img3.jpeg'
import img4 from '../../../../../public/homePage/respondents/img4.jpeg'
import img5 from '../../../../../public/homePage/respondents/img5.jpeg'
import img6 from '../../../../../public/homePage/respondents/img6.jpeg'
import img7 from '../../../../../public/homePage/respondents/img7.jpeg'
import img8 from '../../../../../public/homePage/respondents/img8.jpeg'


const VoicesOfImpact: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>{`Voices of Impact: Hear from Those Who've Experienced Our Support`}</h1>
            <div className={styles.mainBlock}>

                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet, quo ei simul congue exerci</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.

                            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.

                            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.
                        </p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img1}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet, quo ei simul congue exerci</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img2}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img3}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img4}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img5}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Lorem ipsum dolor sit amet</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img6}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Efficient Collaborating</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img7}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className={styles.card}>
                    <blockquote className={styles.blockquote}>
                        <h3 className={styles.title}>Efficient Collaborating</h3>
                        <p className={styles.quote}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
                    </blockquote>
                    <figcaption className={styles.imgBlock}>
                        <Image className={styles.img}
                               src={img8}
                               alt="profile picture"/>
                        <div className={styles.name}>
                            <div>Dr. Who</div>
                            <div className={styles.position}>Surgeon</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>


    );
};

export default VoicesOfImpact;
