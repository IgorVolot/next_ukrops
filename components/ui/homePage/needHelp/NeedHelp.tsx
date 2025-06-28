/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */

'use client'
import React, {useState} from 'react';
import Link from "next/link";
import styles from '@/components/ui/homePage/needHelp/Help.module.scss'
import CardsBlock from "@/components/ui/homePage/needHelp/CardsBlock";
import {Button} from "@nextui-org/react";

const NeedHelp: React.FC = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className={`${styles.mainContainer} px-4 md:px-10 lg:px-20 lg:pt-24 lg:pb-96 `}>
            <div className="flex flex-col items-center py-10 md:py-20">
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
