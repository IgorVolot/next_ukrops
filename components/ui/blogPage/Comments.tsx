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
import styles from './Blog.module.scss';
import Icon from "@/components/ui/homePage/faq/Icon";

// interface ItemsOpen {
//     [key: string]: boolean;
//
//     item: boolean;
// }

const Comments:React.FC = () => {
    // const [isOpen, setIsOpen] = useState<ItemsOpen>({
    //     item: false,
    // });
    //
    // const toggleAccordion = (item: string) => {
    //     setIsOpen(prevState => ({
    //         ...prevState,
    //         [item]: !prevState[item]
    //     }));
    // }

    return (
        <>

            <div id="default-modal" tabIndex={-1} aria-hidden="true"
                 className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/*// <!-- Modal content -->*/}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/*// <!-- Modal header -->*/}
                        <div
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                            </h3>
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/*// <!-- Modal body -->*/}
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws
                                for its citizens, companies around the world are updating their terms of service
                                agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
                                May 25 and is meant to ensure a common set of data rights in the European Union. It
                                requires organizations to notify users as soon as possible of high-risk data breaches
                                that could personally affect them.
                            </p>
                        </div>
                        {/*// <!-- Modal footer -->*/}
                        <div
                            className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I
                                accept
                            </button>
                            <button data-modal-hide="default-modal" type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div id="accordion-collapse" className={styles.faqContainer} data-accordion="collapse"*/}
            {/*     data-active-classes={styles.faqContainerActive}>*/}
            {/*    <h2 id="accordion-collapse-heading">*/}
            {/*        <button type="button"*/}
            {/*                onClick={() => toggleAccordion('item')}*/}
            {/*                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"*/}
            {/*                data-accordion-target="#accordion-collapse" aria-expanded={isOpen.item}*/}
            {/*                aria-controls="accordion-collapse">*/}
            {/*            <span>Show Comments</span>*/}
            {/*            <Icon/>*/}
            {/*        </button>*/}
            {/*    </h2>*/}
            {/*    <div id="accordion-collapse" className={isOpen.item ? "" : "hidden"}*/}
            {/*         aria-labelledby="accordion-collapse-heading">*/}
            {/*        <div className={styles.answerBlock}>*/}
            {/*            <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">*/}
            {/*                <footer className="flex justify-between items-center mb-2">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">*/}
            {/*                            <img*/}
            {/*                                className="mr-2 w-6 h-6 rounded-full"*/}
            {/*                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"*/}
            {/*                                alt="Michael Gough"/>Michael Gough</p>*/}
            {/*                        <p className="text-sm text-gray-600 dark:text-gray-400">*/}
            {/*                            /!*<time pubdate dateTime="2022-02-08"*!/*/}
            {/*                            /!*      title="February 8th, 2022">*!/*/}
            {/*                            Feb. 8, 2022*/}
            {/*                            /!*</time>*!/*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"*/}
            {/*                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
            {/*                            type="button">*/}
            {/*                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                             fill="currentColor" viewBox="0 0 16 3">*/}
            {/*                            <path*/}
            {/*                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>*/}
            {/*                        </svg>*/}
            {/*                        <span className="sr-only">Comment settings</span>*/}
            {/*                    </button>*/}

            {/*                    <div id="dropdownComment1"*/}
            {/*                         className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">*/}
            {/*                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"*/}
            {/*                            aria-labelledby="dropdownMenuIconHorizontalButton">*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </footer>*/}
            {/*                <p>Very straight-to-point article. Really worth time reading. Thank you! But tools are*/}
            {/*                    just the*/}
            {/*                    instruments for the UX designers. The knowledge of the design tools are as important*/}
            {/*                    as the*/}
            {/*                    creation of the design strategy.</p>*/}
            {/*                <div className="flex items-center mt-4 space-x-4">*/}
            {/*                    <button type="button"*/}
            {/*                            className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">*/}
            {/*                        <svg className="mr-1.5 w-3 h-3" aria-hidden="true"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">*/}
            {/*                            <path*/}
            {/*                                d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>*/}
            {/*                        </svg>*/}
            {/*                        Reply*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </article>*/}
            {/*            <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">*/}
            {/*                <footer className="flex justify-between items-center mb-2">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">*/}
            {/*                            <img*/}
            {/*                                className="mr-2 w-6 h-6 rounded-full"*/}
            {/*                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"*/}
            {/*                                alt="Jese Leos"/>Jese Leos</p>*/}
            {/*                        <p className="text-sm text-gray-600 dark:text-gray-400">*/}
            {/*                            /!*<time pubdate dateTime="2022-02-12"*!/*/}
            {/*                            /!*      title="February 12th, 2022">*!/*/}
            {/*                            Feb. 12, 2022*/}
            {/*                            /!*</time>*!/*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"*/}
            {/*                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
            {/*                            type="button">*/}
            {/*                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                             fill="currentColor" viewBox="0 0 16 3">*/}
            {/*                            <path*/}
            {/*                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>*/}
            {/*                        </svg>*/}
            {/*                        <span className="sr-only">Comment settings</span>*/}
            {/*                    </button>*/}

            {/*                    <div id="dropdownComment2"*/}
            {/*                         className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">*/}
            {/*                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"*/}
            {/*                            aria-labelledby="dropdownMenuIconHorizontalButton">*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </footer>*/}
            {/*                <p>Much appreciated! Glad you liked it ☺️</p>*/}
            {/*                <div className="flex items-center mt-4 space-x-4">*/}
            {/*                    <button type="button"*/}
            {/*                            className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">*/}
            {/*                        <svg className="mr-1.5 w-3 h-3" aria-hidden="true"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">*/}
            {/*                            <path*/}
            {/*                                d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>*/}
            {/*                        </svg>*/}
            {/*                        Reply*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </article>*/}
            {/*            <article*/}
            {/*                className="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">*/}
            {/*                <footer className="flex justify-between items-center mb-2">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">*/}
            {/*                            <img*/}
            {/*                                className="mr-2 w-6 h-6 rounded-full"*/}
            {/*                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"*/}
            {/*                                alt="Bonnie Green"/>Bonnie Green</p>*/}
            {/*                        <p className="text-sm text-gray-600 dark:text-gray-400">*/}
            {/*                            /!*<time pubdate dateTime="2022-03-12"*!/*/}
            {/*                            /!*      title="March 12th, 2022">*!/*/}
            {/*                            Mar. 12, 2022*/}
            {/*                            /!*</time>*!/*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"*/}
            {/*                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
            {/*                            type="button">*/}
            {/*                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                             fill="currentColor" viewBox="0 0 16 3">*/}
            {/*                            <path*/}
            {/*                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>*/}
            {/*                        </svg>*/}
            {/*                        <span className="sr-only">Comment settings</span>*/}
            {/*                    </button>*/}

            {/*                    <div id="dropdownComment3"*/}
            {/*                         className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">*/}
            {/*                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"*/}
            {/*                            aria-labelledby="dropdownMenuIconHorizontalButton">*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </footer>*/}
            {/*                <p>The article covers the essentials, challenges, myths and stages the UX designer*/}
            {/*                    should consider while creating the design strategy.</p>*/}
            {/*                <div className="flex items-center mt-4 space-x-4">*/}
            {/*                    <button type="button"*/}
            {/*                            className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">*/}
            {/*                        <svg className="mr-1.5 w-3 h-3" aria-hidden="true"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">*/}
            {/*                            <path*/}
            {/*                                d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>*/}
            {/*                        </svg>*/}
            {/*                        Reply*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </article>*/}
            {/*            <article*/}
            {/*                className="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">*/}
            {/*                <footer className="flex justify-between items-center mb-2">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">*/}
            {/*                            <img*/}
            {/*                                className="mr-2 w-6 h-6 rounded-full"*/}
            {/*                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"*/}
            {/*                                alt="Helene Engels"/>Helene Engels</p>*/}
            {/*                        <p className="text-sm text-gray-600 dark:text-gray-400">*/}
            {/*                            /!*<time pubdate dateTime="2022-06-23"*!/*/}
            {/*                            /!*      title="June 23rd, 2022">*!/*/}
            {/*                            Jun. 23, 2022*/}
            {/*                            /!*</time>*!/*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"*/}
            {/*                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"*/}
            {/*                            type="button">*/}
            {/*                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
            {/*                             fill="currentColor" viewBox="0 0 16 3">*/}
            {/*                            <path*/}
            {/*                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>*/}
            {/*                        </svg>*/}
            {/*                    </button>*/}

            {/*                    <div id="dropdownComment4"*/}
            {/*                         className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">*/}
            {/*                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"*/}
            {/*                            aria-labelledby="dropdownMenuIconHorizontalButton">*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>*/}
            {/*                            </li>*/}
            {/*                            <li>*/}
            {/*                                <a href="#"*/}
            {/*                                   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </footer>*/}
            {/*                <p>Thanks for sharing this. I do came from the Backend development and explored some of*/}
            {/*                    the tools to design my Side Projects.</p>*/}
            {/*                <div className="flex items-center mt-4 space-x-4">*/}
            {/*                    <button type="button"*/}
            {/*                            className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400">*/}
            {/*                        <svg className="mr-1.5 w-3 h-3" aria-hidden="true"*/}
            {/*                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">*/}
            {/*                            <path*/}
            {/*                                d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>*/}
            {/*                        </svg>*/}
            {/*                        Reply*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </article>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

export default Comments;
