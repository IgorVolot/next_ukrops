/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {useState} from 'react';
import Link from "next/link";
import styles from './Help.module.scss'
import CardsBlock from "./CardsBlock";
import {Button} from "@nextui-org/react";

const NeedHelp: React.FC = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className={`${styles.mainContainer}`}>
            <div className="flex flex-col items-center py-10">
                <Button className={styles.donateButton}>
                    <Link href="/login" onClick={() => setOpen(!open)}>Donate Now</Link>
                </Button>
                <h1 className={styles.title}>Your help is Needed</h1>
            </div>
            <CardsBlock/>
        </div>
    );
};

export default NeedHelp;
