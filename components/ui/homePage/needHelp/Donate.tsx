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
import {Button} from "@/components/ui/button/button";
import styles from "@/components/ui/homePage/needHelp/Help.module.scss";
import Link from "next/link";
import {HandCoins, HeartHandshake} from "lucide-react";

const Donate:React.FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="card-body-bottom flex border-t-2 border-t-slate-300 mt-4 py-4 px-2 justify-around">
            <Button asChild className={`${styles.button}`}>
                <Link href="/login" onClick={() => setOpen(!open)}>
                    DONATE
                    <HandCoins className="icon" style={{color: "#a3e635"}}/>
                </Link>
            </Button>
            <HeartHandshake className="icon mx-auto my-auto flex-row" style={{color: "#2E4049"}}/>
        </div>
    );
};

export default Donate;
