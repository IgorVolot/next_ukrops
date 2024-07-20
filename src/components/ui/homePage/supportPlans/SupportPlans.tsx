/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import React from 'react';
import styles from "./Support.module.scss";
import Link from "next/link";
import Social from "@/components/ui/homePage/supportPlans/SocialIcons";
import {Button} from "@nextui-org/react";

const SupportPlans: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.blockTitle}>Support Plans</h1>
            <p className={styles.blockText}>Choose a plan that fits your needs and support Ukrainian medics effectively.</p>

            <div className={styles.mainBlock}>
                {/* Block 1*/}
                <div className={`${styles.block} bg-slate-50`}>
                    <h5 className={`${styles.title} text-gray-400`}>Basic Support</h5>
                    <div className={styles.costBlock}>
                        <h2 className={styles.cost}>Free</h2>
                    </div>
                    <div className={styles.choiceBlock}>
                        <span className={styles.choice}>Good choice for those who care</span>
                    </div>
                    <div>
                        <p className="text-center my-4 text-gray-500 dark:text-gray-400">Just tell about us in your public or donate now</p>
                    </div>

                    <div>
                        <Social/>
                    </div>
                    <Button className={styles.button}>
                        <Link href="/login">DONATE</Link>
                    </Button>
                </div>

                {/*Block 2*/}
                <div className={`${styles.block} bg-emerald-50`}>
                    <h5 className={`${styles.title} text-gray-700`}>Pro Support</h5>
                    <div className={styles.costBlock}>
                        <span className="text-3xl font-semibold">from 1</span>
                        <span className="text-2xl font-extrabold tracking-tight">£</span>
                        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400 mb-4">/per time</span>
                    </div>
                    <div className={styles.costBlock}>
                        <span className="text-3xl font-semibold">or any regular</span>
                        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/weak/month/year</span>
                    </div>
                    <div
                        className="flex items-baseline mt-4 border-b-2 border-b-slate-200 text-gray-500 dark:text-white">
                        <span className="ms-1 text-xl py-4 font-normal text-gray-500 dark:text-gray-400">Ideal for Individuals and Professionals</span>
                    </div>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-4 h-4 text-emerald-400 dark:text-blue-500"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">all payments are secure</span>
                        </li>
                        <li className="flex">
                            <svg className="flex-shrink-0 w-4 h-4 text-emerald-400 dark:text-blue-500"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">all payments are easy</span>
                        </li>
                        <li className="flex">
                            <svg className="flex-shrink-0 w-4 h-4 text-emerald-400 dark:text-blue-500"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">you can choose any plan</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">Scam</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">Fraud</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span
                                className="text-base font-normal leading-tight text-gray-500 ms-3">Swindle</span>
                        </li>
                        <li className="flex line-through decoration-gray-500">
                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">Spam</span>
                        </li>
                    </ul>
                    <Button className={styles.button}>
                        <Link href="/login">DONATE</Link>
                    </Button>
                </div>

                {/* Block 3*/}
                <div className={`${styles.block} bg-red-50`}>
                    <h5 className={`${styles.title} text-black`}>Enterprise Solutions</h5>
                    <div className={styles.costBlock}>
                        <p className="text-slate-800">Contact us if you would like to provide customized support
                            packages, as well as for companies wishing to make meaningful donations.</p>
                    </div>
                    <div
                        className="flex items-baseline mt-4 border-b-2 border-b-slate-200 text-gray-500 dark:text-white">
                        <span className="ms-1 text-xl py-4 font-normal text-gray-500 dark:text-gray-400">Perfect for Major Businesses</span>
                    </div>

                    <div className='py-8'>
                        <div>
                            <p className="text-center text-xl my-4 text-gray-900 dark:text-gray-400">
                                To book an appointment simply click
                            </p>
                        </div>

                        <Button className={`${styles.button} my-4`}>
                            <Link href="/login">BOOK NOW</Link>
                        </Button>

                        <div>
                            <p className=" my-4 text-gray-900 dark:text-gray-400">
                                feel free to leave your contact and an idea you would like to share or provide individualized support with.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPlans;
