/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {FC, useState} from "react";
import Link from "next/link";
import styles from './Hero.module.scss'
import {Button} from "@nextui-org/react";


const HeroLeft: FC = () => {
    const [open, setOpen] = useState(true);
    // const originalTitle = 'Supporting Ukrainian Medics';
    // const words = originalTitle.split(' ');
    //
    //
    // const trail = useTrail(words.length, {
    //     config: { mass: 1, tension: 120, friction: 14 },
    //     opacity: open ? 1 : 0,
    //     x: open ? 0 : 20,
    //     height: open ? 110 : 0,
    //     from: { opacity: 0, x: 20, height: 0 }
    // });

    return (
        <div className={`${styles.heroLeft}`}>
            <h1 className={styles.title}>
                {/*<TitleTrail/>*/}
                Supporting Ukrainian Medics
                {/*{trail.map(({ height, ...style }, index) => (*/}
                {/*    <animated.div key={words[index]} style={{ ...style, transform: style.x.to(x => `translate3d(0,${x}px,0.0001)`) }}>*/}
                {/*        {words[index]}&nbsp;*/}
                {/*    </animated.div>*/}
                {/*))}*/}
            </h1>
            <p className={styles.text}>
                Join our mission to provide critical medical aid
            </p>
            <Button className={`${styles.button} uppercase`} >
                <Link href="/signup" onClick={() => setOpen(!open)}>
                    get involved
                    {/*<small className='pl-4 lowercase align-top font-light'>(sign up)</small>*/}
                </Link>
            </Button>
        </div>
    );
}

export default HeroLeft;

