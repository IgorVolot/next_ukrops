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
import React, {Component} from 'react';
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from '@/public/footer/img_ukrops.jpg'

class Footer extends Component {
    render() {
        const current_year = new Date().getFullYear();
        return (

            <footer className={`${styles.footer} dark:bg-gray-900`}>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                            <div className="flex mx-auto">
                                <Link href="/home" className="flex">
                                    <Image src={Logo} className="p-4"
                                           alt="UKROPS Logo" width={220} height={200}/>
                                </Link>
                            </div>
                            <h3 className="text-center md:text-2xl md:my-auto font-semibold whitespace-nowrap dark:text-white">UKROPS Medical Charity</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <Link href="/home" className="hover:underline">
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Home</h2>
                                </Link>

                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="/aboutPage" className="hover:underline">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="hover:underline">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow
                                    us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="https://www.leosrow.com/"
                                              className="hover:underline ">Leo Row</Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.justgiving.com/crowdfunding/leonid-krivskiy"
                                              className="hover:underline">Crowdfunding</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              href="https://flowbite.com/" className="hover:underline">UKROPS Medical</a>. All Rights Reserved.
          </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/profile.php?id=100009578859571"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.linkedin.com/in/leo-krivski-3b1a47239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-linkedin">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                    <rect width="4" height="12" x="2" y="9"/>
                                    <circle cx="4" cy="4" r="2"/>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://www.instagram.com/krivski?igsh=a3F6cTEzYm0yYTl5&utm_source=qr"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-instagram">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://www.youtube.com/@leosrow"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-youtube">
                                    <path
                                        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                                    <path d="m10 15 5-3-5-3z"/>
                                </svg>
                                <span className="sr-only">Youtube</span>
                            </a>
                            <a href="mailto:leo@ukropsmedical.org"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="lucide lucide-mails">
                                    <rect width="16" height="13" x="6" y="4" rx="2"/>
                                    <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/>
                                    <path d="M2 8v11c0 1.1.9 2 2 2h14"/>
                                </svg>
                                <span className="sr-only">Contact</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
