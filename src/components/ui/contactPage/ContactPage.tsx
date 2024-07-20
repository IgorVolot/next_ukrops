/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import React from 'react';
import styles from './Contact.module.scss'
import {Button} from "@nextui-org/react";

const ContactPage:React.FC = () => {
    return (
        <section>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                </div>
                <div className={styles.rightContainer}>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                            Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got
                            a technical issue? Want to send feedback? Let us know.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                    email</label>
                                <input type="email" id="email"
                                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="your.personal@email.com" required/>
                            </div>
                            <div>
                                <label htmlFor="subject"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject"
                                       className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                       placeholder="Let us know how we can help you" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                                    message</label>
                                <textarea id="message" rows={6}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Leave a comment..."></textarea>
                            </div>
                            <Button type="submit"
                                    className="py-3 px-5 text-sm font-medium text-center text-slate-700 rounded-lg border border-slate-300 bg-white sm:w-fit hover:shadow-2xl hover:border-slate-500 hover:!text-teal-700 focus:ring-4 focus:outline-none focus:ring-slate-400 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                                message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
