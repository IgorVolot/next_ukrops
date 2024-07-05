/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */

import React from 'react';
import styles from "@/components/ui/homePage/needHelp/Help.module.scss";
import Image from "next/image";
import img1 from "@/public/homePage/needHelp/img1.jpeg";
import ProgressBar from "@ramonak/react-progress-bar";
import img2 from "@/public/homePage/needHelp/img2.jpeg";
import img3 from "@/public/homePage/needHelp/img3.jpeg";
import img4 from "@/public/homePage/needHelp/img4.jpeg";
import Donate from "@/components/ui/homePage/needHelp/Donate";

const CardsBlock: React.FC = () => {
    return (
        <>
            <div className={styles.cardsBlock}>
                <div className={`${styles.cardContainer} mx-auto md:px-4 order-1`}>
                    <Image src={img1} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-1`}>
                        <div className="card-body-top  p-2">
                            <button className={styles.button1} disabled={true}>First Aid</button>
                            <h3 className="mt-8">Help the Ukrainians to stay alive</h3>
                        </div>
                        <div className="card-body-center">
                            <ProgressBar
                                completed={60}
                                bgColor="#a3e635"
                                height="8px"
                                borderRadius="5px"
                                isLabelVisible={false}
                                labelColor="#e80909"
                                className="bar mx-1.5"
                            />
                            <div className="flex flex-row mt-4 justify-between">
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Goal</p>
                                    <p className="text  py-2">£ 7404</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Collected</p>
                                    <p className="text  py-2">£ 4713</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Remaining</p>
                                    <p className="text  py-2">£ 2961</p>
                                </div>
                            </div>
                        </div>
                        <Donate/>
                    </div>
                </div>
                <div className="block mx-auto md:px-4 order-2">
                    <Image src={img2} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <button className={styles.button2} disabled={true}>Emergency Kits</button>
                            <h3 className="mt-8">Save solders life</h3>
                        </div>
                        <div className="card-body-center">
                            <ProgressBar
                                completed={74}
                                bgColor="#a3e635"
                                height="8px"
                                borderRadius="5px"
                                isLabelVisible={false}
                                labelColor="#e80909"
                                className="bar mx-1.5"
                            />
                            <div className="flex flex-row mt-4 justify-between">
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Goal</p>
                                    <p className="text  py-2">£ 5236</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Collected</p>
                                    <p className="text  py-2">£ 3927</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Remaining</p>
                                    <p className="text  py-2">£ 1309</p>
                                </div>
                            </div>
                        </div>
                        <Donate/>
                    </div>
                </div>
                <div className="block mx-auto md:px-4 order-3">
                    <Image src={img3} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <button className={styles.button3} disabled={true}>Special medical equipment</button>
                            <h3 className="mt-8">Help save each life</h3>
                        </div>
                        <div className="card-body-center">
                            <ProgressBar
                                completed={82}
                                bgColor="#a3e635"
                                height="8px"
                                borderRadius="5px"
                                isLabelVisible={false}
                                labelColor="#e80909"
                                className="bar mx-1.5"
                            />
                            <div className="flex flex-row mt-4 justify-between">
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Goal</p>
                                    <p className="text  py-2">£ 85462</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Collected</p>
                                    <p className="text  py-2">£ 70079</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Remaining</p>
                                    <p className="text  py-2">£ 15383</p>
                                </div>
                            </div>
                        </div>
                        <Donate/>
                    </div>
                </div>
                <div className="block mx-auto md:px-4 order-4">
                    <Image src={img4} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <button className={styles.button4} disabled={true}>Education</button>
                            <h3 className="mt-8">Make them better trained</h3>
                        </div>
                        <div className="card-body-center">
                            <ProgressBar
                                completed={45}
                                bgColor="#a3e635"
                                height="8px"
                                borderRadius="5px"
                                isLabelVisible={false}
                                labelColor="#e80909"
                                className="bar mx-1.5"
                            />
                            <div className="flex flex-row mt-4 justify-between">
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Goal</p>
                                    <p className="text  py-2">£ 7813</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Collected</p>
                                    <p className="text  py-2">£ 3516</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-xs text-slate-400">Remaining</p>
                                    <p className="text  py-2">£ 4297</p>
                                </div>
                            </div>
                        </div>
                        <Donate/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardsBlock;
