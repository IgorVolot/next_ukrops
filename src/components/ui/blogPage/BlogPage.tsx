/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React from 'react';
import Image from "next/image";
import leo from '../../../../public/blogPage/img_leo_1.jpg';
import styles from './Blog.module.scss';
import {Button, useDisclosure} from "@nextui-org/react";
import ModalComponent1 from "@/components/ui/blogPage/modals/ModalComponent1";
import img1 from "../../../../public/blogPage/img1.jpeg";
import ModalComponent2 from "@/components/ui/blogPage/modals/ModalComponent2";
import ModalComponent3 from "@/components/ui/blogPage/modals/ModalComponent3";
import ModalComponent4 from "@/components/ui/blogPage/modals/ModalComponent4";

const BlogPage = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <main className="pt-8 pb-16 lg:pt-20 lg:pb-24 dark:bg-gray-900 antialiased">
                <h1 className={styles.mainTitle}>{`What we have done and what we are going to do with you together`}</h1>
                <div className="flex flex-col justify-between px-4 mx-auto max-w-screen-xl">

                    {/* Article 3 */}
                    <article
                        className={`${styles.article} format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`}>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <Image className="mr-4 w-16 h-16 rounded-full" src={leo} alt="Leo"/>
                                    <div>
                                        <a href="#" rel="author"
                                           className="text-xl font-bold text-gray-900 dark:text-white">
                                            Dr. Leo Krivskiy
                                        </a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Consultant anaesthesiologist, Hospital of Southampton
                                        </p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Founder of UKROPS Medical
                                        </p>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                            <time dateTime="2024-05-13" title="May 13th, 2024">
                                                May 13, 2024
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h2 className={styles.articleTitle}>
                                Atlantic row
                            </h2>
                        </header>
                        <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420"
                                height="315" src="https://www.youtube.com/embed/wKWVc-5VPFA?autoplay=1&mute=1">
                        </iframe>
                        <p className={`${styles.text} lead`}>
                            In January 2025, Leo will embark on the extraordinary challenge of rowing solo across the
                            Atlantic. Starting from Tenerife and finishing in Barbados, this voyage is a true test of
                            both physical strength and mental resilience. Leo will navigate through the vast, open
                            waters, battling against unpredictable weather and towering waves, all while facing the
                            daunting solitude of the ocean.
                        </p>
                        <p className={styles.text}>
                            The immense task of maintaining physical endurance and mental focus amidst the breath-taking
                            yet relentless expanse of the Atlantic will push Leo to his limits.
                        </p>
                        <p className={styles.text}>
                            {`Reaching Barbados won't just signify the end of a geographical voyage; it will mark the
                                completion of an incredible personal achievement, showcasing human determination and spirit
                                at its finest. This remarkable journey also serves as a platform for Leo's commitment to
                                fundraise and support Ukrainian medical professionals, providing them with essential medical
                                equipment and supplies, further underlining the profound impact of this Atlantic row.`}
                        </p>

                        <section className="not-format">
                            <form className="my-6">
                                <div
                                    className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows={6}
                                              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                              placeholder="Write a comment..." required={true}></textarea>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <Button type="submit" className={styles.button}>
                                        Post comment
                                    </Button>
                                    <Button id={styles.commentsButton} type="button" onClick={onOpen}>
                                        (5) comments
                                    </Button>
                                    <ModalComponent1 key={1} isOpen={isOpen} onClose={onClose}/>
                                </div>
                            </form>
                        </section>
                    </article>
                    {/* Article 2 */}
                    <article
                        className={`${styles.article} format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`}>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <Image className="mr-4 w-16 h-16 rounded-full" src={leo} alt="Leo"/>
                                    <div>
                                        <a href="#" rel="author"
                                           className="text-xl font-bold text-gray-900 dark:text-white">
                                            Dr. Leo Krivskiy
                                        </a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Consultant anaesthesiologist, Hospital of Southampton
                                        </p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Founder of UKROPS Medical
                                        </p>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                            <time dateTime="2024-05-13" title="May 13th, 2024">
                                                May 13, 2024
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h2 className={styles.articleTitle}>
                                Introduction of UKROPS Medical Charity
                            </h2>
                        </header>
                        <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420" height="315"
                                src="https://www.youtube.com/embed/QHVJb38N8QE?si=n3r_qdfC7cWBBbhM?autoplay=1&mute=1">
                        </iframe>
                        <p className={`${styles.text} lead`}>
                            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his,
                            te elit voluptua dignissim per, habeo iusto primis ea eam.
                        </p>
                        {/*<p>*/}
                        {/*    The immense task of maintaining physical endurance and mental focus amidst the breath-taking*/}
                        {/*    yet relentless expanse of the Atlantic will push Leo to his limits.*/}
                        {/*</p>*/}


                        <section className="not-format">
                            <form className="my-6">
                                <div
                                    className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows={6}
                                              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                              placeholder="Write a comment..." required={true}></textarea>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <Button type="submit" className={styles.button}>
                                        Post comment
                                    </Button>
                                    <Button id={styles.commentsButton} type="button" onClick={onOpen}>
                                        (5) comments
                                    </Button>
                                    <ModalComponent2 key={2} isOpen={isOpen} onClose={onClose}/>
                                </div>
                            </form>
                        </section>
                    </article>
                    {/* Article 3 */}
                    <article
                        className={`${styles.article} format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`}>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <Image className="mr-4 w-16 h-16 rounded-full" src={leo} alt="Leo"/>
                                    <div>
                                        <a href="#" rel="author"
                                           className="text-xl font-bold text-gray-900 dark:text-white">
                                            Dr. Leo Krivskiy
                                        </a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Consultant anaesthesiologist, Hospital of Southampton
                                        </p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Founder of UKROPS Medical
                                        </p>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                            <time dateTime="2024-05-13" title="May 13th, 2024">
                                                May 13, 2024
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h2 className={styles.articleTitle}>
                                Another version with a more personal touch
                            </h2>
                        </header>
                        <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420" height="315"
                                src="https://www.youtube.com/embed/z1ZCNKs-Ies?si=dH8b2q8g6orQUT6B?autoplay=1&mute=1">
                        </iframe>
                        <p className={`${styles.text} lead`}>
                            {`I support through my
                            travels through my educational activity. Since 2014 I've been involved with my Ukrainian
                            anesthetic colleagues both by going there organizing seminars and conferences. I know quite
                            a few people in the medical world in Ukraine and I'm able to contact them directly and I
                            really know their needs and respond to them of course.`}
                        </p>
                        <p className={styles.text}>
                            {`Please support us, please follow us and please keep your interest in what's going on Ukraine
                                alive. This is vitally important that we help those people survive and save as many lives as
                                possible. Thank you.`}
                        </p>

                        <section className="not-format">
                            <form className="my-6">
                                <div
                                    className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows={6}
                                              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                              placeholder="Write a comment..." required={true}></textarea>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <Button type="submit" className={styles.button}>
                                        Post comment
                                    </Button>
                                    <Button id={styles.commentsButton} type="button" onClick={onOpen}>
                                        (5) comments
                                    </Button>
                                    <ModalComponent3 key={3} isOpen={isOpen} onClose={onClose}/>
                                </div>
                            </form>
                        </section>
                    </article>
                    {/* Article 4 */}
                    <article
                        className={`${styles.article} format format-sm sm:format-base lg:format-lg format-blue dark:format-invert`}>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <Image className="mr-4 w-16 h-16 rounded-full" src={leo} alt="Leo"/>
                                    <div>
                                        <a href="#" rel="author"
                                           className="text-xl font-bold text-gray-900 dark:text-white">
                                            Dr. Leo Krivskiy
                                        </a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Consultant anaesthesiologist, Hospital of Southampton
                                        </p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            Founder of UKROPS Medical
                                        </p>
                                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                            <time dateTime="2022-03-13" title="March, 2022">
                                                March, 2022
                                            </time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h2 className={styles.articleTitle}>
                                Another version with a more personal touch
                            </h2>
                        </header>
                        <a href="https://www.justgiving.com/crowdfunding/leonid-krivskiy" target="_blank"
                           rel="noopener noreferrer">
                            <Image className={styles.img} src={img1} alt="volounteers" width={360} height={360}/>
                        </a>
                        <p className={`${styles.text} lead`}>
                            I am buying tactical medical disposables, and equipment, and
                            deliver it myself to Ukraine, where it
                            is distributed directly to the people, who currently need it most. I know everyone involved
                            personally,
                            and you could look into their eyes too. Everything is being bought, and prioritized
                            according to their
                            current needs. I am in charge of the whole process, and my name is on it.
                        </p>
                        <p className={styles.text}>
                            I have already done two deliveries, and am planning another one.
                        </p>
                        <p className={styles.text}>
                            Before I had planned my first trip to Ukraine, I just wanted to do
                            something useful on a small scale,
                            and hence my natural choice was tactical medical disposables for the frontline medics. CAT
                            tourniquets,
                            Celox, Israeli bandages - they have been, and are in great demand, and limited supply. I
                            also had a
                            specific request for bulletproof vests from a group of medics, who were operating near Kyiv,
                            a hotspot
                            at the time of my first trip. I did not know the situation on the ground very well then, and
                            just
                            concentrated on the things you can’t go wrong with, as well as also responding to a few
                            specific
                            requests from the people I’d gotten to know previously.
                        </p>
                        <p className={styles.text}>
                            Now, after my second mission is completed, I have a much better idea
                            about where I want to go with this,
                            provided I manage to attract more funding.
                        </p>

                        <section className="not-format">
                            <form className="my-6">
                                <div
                                    className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows={6}
                                              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                              placeholder="Write a comment..." required={true}></textarea>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <Button type="submit" className={styles.button}>
                                        Post comment
                                    </Button>
                                    <Button id={styles.commentsButton} type="button" onClick={onOpen}>
                                        (5) comments
                                    </Button>
                                    <ModalComponent4 key={4} isOpen={isOpen} onClose={onClose}/>
                                </div>
                            </form>
                        </section>
                    </article>
                </div>
            </main>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md sm:text-center">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Sign up for our newsletter
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free
                            to sign up with your email.
                        </p>
                        <form action="#">
                            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="email"
                                           className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                        address</label>
                                    <div
                                        className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path
                                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                            <path
                                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                        </svg>
                                    </div>
                                    <input
                                        className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your email" type="email" id="email"/>
                                </div>
                                <div>
                                    <button type="submit"
                                            className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div
                                className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                                We care about the protection of your data. <a href="#"
                                                                              className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read
                                our Privacy Policy</a>.
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
