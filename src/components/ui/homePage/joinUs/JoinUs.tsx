/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {FC, useState} from 'react';
import styles from "@/components/ui/homePage/joinUs/JoinUs.module.scss";
import Link from "next/link";
import joinUs from "../../../../../public/homePage/joinUs/joinUs.jpg";
import Image from "next/image";
import {Button} from "@nextui-org/react";

const JoinUs: FC = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <Image
                    src={joinUs}
                    alt="join"
                    className={styles.img}
                    priority
                    width={600}
                    height={600}
                />
            </div>
            <div className={styles.textBlock}>
                <h2 className={styles.title}>{`Join Us in Supporting Ukraine's Medics`}</h2>
                <p className={styles.text}>
                    UKROPS Medical Charity focuses on providing essential
                    aid to Ukrainian medical professionals in need.
                </p>
                <Button className={styles.button} >
                    <Link href="/login" onClick={() => setOpen(!open)} >Donate Now</Link>
                </Button>
            </div>
        </div>
    );
};

export default JoinUs;
