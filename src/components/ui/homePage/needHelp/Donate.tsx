/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {useState} from 'react';
import styles from "./Help.module.scss";
import Link from "next/link";
import {HandCoins, HeartHandshake} from "lucide-react";
import {Button} from "@nextui-org/react";

const Donate:React.FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="card-body-bottom flex border-t-2 border-t-slate-300 mt-4 py-4 px-2">
            <Button className={`${styles.button} `}>
                <Link className='flex flex-row' href="/login" onClick={() => setOpen(!open)}>
                    DONATE
                    <HandCoins className="icon mx-4" style={{color: "#a3e635"}}/>
                </Link>
            </Button>
            <HeartHandshake className="icon mx-2 my-auto flex-row" style={{color: "#2E4049"}}/>
        </div>
    );
};

export default Donate;
