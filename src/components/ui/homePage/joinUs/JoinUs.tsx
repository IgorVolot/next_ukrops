/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {FC, useState} from 'react';
import styles from "@/components/ui/homePage/hero/Hero.module.scss";
import Link from "next/link";
import joinUs from "../../../../../public/homePage/hero/joinUs.jpg";
import Image from "next/image";
import {Button} from "@nextui-org/react";

const JoinUs: FC = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className='flex px-4 md:px-40 py-4 md:py-24 flex-row'>
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
            <div className='flex flex-col my-auto mx-auto'>
                <h2 className='text-xl md:text-3xl'>{`Join Us in Supporting Ukraine's Medics`}</h2>
                <p className='py-4'>
                    UKROPS Medical Charity focuses on providing essential<br/>
                    aid to Ukrainian medical professionals in need.
                </p>
                <Button className={styles.button} style={{width:"150px"}}>
                    <Link href="/login" onClick={() => setOpen(!open)} >Donate Now</Link>
                </Button>
            </div>
        </div>
    );
};

export default JoinUs;
