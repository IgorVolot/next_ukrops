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
import styles from "./Empower.module.scss";
import Link from "next/link";
import {Button} from "@/components/ui/button/button";
import {Ambulance, BriefcaseMedical, HeartPulse, Microscope} from "lucide-react";


const Empower: React.FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.mainContainer}>
            <div className="flex flex-row justify-center">
                <h2 className="text-xl md:text-3xl">Empowering Ukrainian Medics</h2>
            </div>
            <div className="flex flex-row mt-4 md:mt-12 justify-center">
                <Button asChild className={styles.button} >
                    <Link href="/login" onClick={() => setOpen(!open)}>Join Us</Link>
                </Button>
                <Button asChild className={`${styles.button} ml-6`} style={{backgroundColor: "#f5f5f5"}}>
                    <Link href="/login" onClick={() => setOpen(!open)}>Learn More</Link>
                </Button>
            </div>

            <div className="flex flex-col columns-2 mt-4 md:mt-16">
                <div className="flex flex-row justify-around">
                    <div className="flex flex-row pt-12  order-1">
                        <div>
                            <Ambulance className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className="text-xl">Medical Aid</h3>
                            <p>
                                Direct support to Ukrainian medical teams in conflict zones.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row pt-12 md:pl-40 order-2">
                        <div>
                            <BriefcaseMedical className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className="text-xl">Emergency Kits</h3>
                            <p>
                                Supplying essential medical kits to front-line responders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-around">
                    <div className="flex flex-row pt-12  order-3">
                        <div>
                            <Microscope className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className="text-xl">Education Funds</h3>
                            <p>
                                Sponsoring advanced medical training for Ukrainian doctors.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row pt-12 md:pl-40 order-4">
                        <div>
                            <HeartPulse className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className="text-xl">Global Network</h3>
                            <p>
                                Connecting Ukrainian medics with global health experts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empower;
