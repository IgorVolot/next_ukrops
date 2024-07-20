/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {FC, useCallback, useEffect} from 'react'
import useEmblaCarousel from "embla-carousel-react";
import brCouncil from '../../../../../public/homePage/partners/british-council-1-logo-svgrepo-com.svg'
import netflix from '../../../../../public/homePage/partners/netflix-2-logo-svgrepo-com.svg'
import burberry from '../../../../../public/homePage/partners/burberry-3-logo-svgrepo-com.svg'
import equalHousing from '../../../../../public/homePage/partners/equal-housing-opportunity-logo-svgrepo-com.svg'
import intrax from '../../../../../public/homePage/partners/intrax-logo-svgrepo-com.svg'
import reebok from '../../../../../public/homePage/partners/reebok-5-logo-svgrepo-com.svg'
import spotify from '../../../../../public/homePage/partners/spotify-1-logo-svgrepo-com.svg'
import Image from "next/image";
import styles from './Partners.module.scss'

const Partners: FC = () => {
    const partners = [
        { src: brCouncil, alt: "British Council" },
        { src: equalHousing, alt: "Equal Housing Opportunity" },
        { src: burberry, alt: "Burberry" },
        { src: netflix, alt: "Netflix" },
        { src: intrax, alt: "Intrax" },
        { src: reebok, alt: "Reebok" },
        { src: spotify, alt: "Spotify" }
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollToNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
        }
    }, [emblaApi]);

    useEffect(() => {
        const intervalId = setInterval(() => scrollToNext(), 3000); // slides every 3 seconds
        return () => clearInterval(intervalId);
    }, [scrollToNext]);

    return (
        <div className={styles.partners}>
            <h1 className={styles.title}>Trusted Partners Supporting Us</h1>
            <div className={styles.logos} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {partners.map((partner, index) =>
                        <div key={index} className={styles.embla__slide}>
                            <Image src={partner.src} alt={partner.alt} className={styles.partnersLogo} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Partners;