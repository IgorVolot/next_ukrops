/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

import React from 'react';
import styles from "@/components/ui/homePage/needHelp/Help.module.scss";
import Image from "next/image";
import img1 from "../../../../../public/homePage/needHelp/img1.jpeg";
import img2 from "../../../../../public/homePage/needHelp/img2.jpeg";
import img3 from "../../../../../public/homePage/needHelp/img3.jpeg";
import img4 from "../../../../../public/homePage/needHelp/img4.jpeg";
import Donate from "@/components/ui/homePage/needHelp/Donate";

const CardsBlock: React.FC = () => {
    return (
        <>
            <div className={styles.cardsBlock}>
                <div className={`${styles.cardContainer} mx-auto md:px-4 order-1`}>
                    <Image src={img1} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <span
                                className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >First Aid
                            </span>
                            <h3 className="mt-8">Help the Ukrainians to stay alive</h3>
                        </div>
                        <div className="card-body-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-teal-500 h-2 rounded-full" style={{width: "70%"}}></div>
                            </div>

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
                <div className={`${styles.cardContainer} mx-auto md:px-4 order-2`}>
                    <Image src={img2} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <span
                                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                            >Emergency Kits
                            </span>
                            <h3 className="mt-8">Save solders life</h3>
                        </div>
                        <div className="card-body-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-blue-500 h-2 rounded-full" style={{width: "86%"}}></div>
                            </div>
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
                <div className={`${styles.cardContainer} mx-auto md:px-4 order-3`}>
                    <Image src={img3} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <span
                                className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
                            >Special medical equipment
                            </span>
                            <h3 className="mt-8">Help save each life</h3>
                        </div>
                        <div className="card-body-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-pink-500 h-2 rounded-full" style={{width: "80%"}}></div>
                            </div>
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
                <div className={`${styles.cardContainer} mx-auto md:px-4 order-4`}>
                    <Image src={img4} alt="help" className={`${styles.img} z-0`}/>
                    <div className={`${styles.cardBody} z-10`}>
                        <div className="card-body-top  p-2">
                            <span
                                className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
                            >Education
                            </span>
                            <h3 className="mt-8">Make them better trained</h3>
                        </div>
                        <div className="card-body-center">
                            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                                <div className="bg-yellow-300 h-2 rounded-full" style={{width: "35%"}}></div>
                            </div>
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
