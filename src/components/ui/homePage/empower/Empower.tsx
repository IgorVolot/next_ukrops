/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {useState} from 'react';
import styles from "./Empower.module.scss";
import Link from "next/link";
import {Ambulance, BriefcaseMedical, HeartPulse, Microscope} from "lucide-react";
import {Button} from "@nextui-org/react";


const Empower: React.FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Empowering Ukrainian Medics</h2>
            </div>
            <div className={styles.buttonBlock}>
                <Button className={styles.button} >
                    <Link href="/login" onClick={() => setOpen(!open)}>Join Us</Link>
                </Button>
                <Button className={`${styles.button} ml-6`} style={{backgroundColor: "#f5f5f5"}}>
                    <Link href="/login" onClick={() => setOpen(!open)}>Learn More</Link>
                </Button>
            </div>

            <div className={styles.itemsContainer}>
                <div className={styles.itemsBlock}>
                    <div className={`${styles.item} order-1`}>
                        <div>
                            <Ambulance className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className={styles.itemTitle}>Medical Aid</h3>
                            <p className={styles.itemText}>
                                Direct support to Ukrainian medical teams in conflict zones.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.item} md:pl-40 2xl:pl-20 order-2`}>
                        <div>
                            <BriefcaseMedical className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className={styles.itemTitle}>Emergency Kits</h3>
                            <p className={styles.itemText}>
                                Supplying essential medical kits to front-line responders.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.itemsBlock}>
                    <div className={`${styles.item} order-3`}>
                        <div>
                            <Microscope className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className={styles.itemTitle}>Education Funds</h3>
                            <p className={styles.itemText}>
                                Sponsoring advanced medical training for Ukrainian doctors.
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.item} md:pl-40 2xl:pl-20 order-4`}>
                        <div>
                            <HeartPulse className="icon mr-4"/>
                        </div>
                        <div>
                            <h3 className={styles.itemTitle}>Global Network</h3>
                            <p className={styles.itemText}>
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
