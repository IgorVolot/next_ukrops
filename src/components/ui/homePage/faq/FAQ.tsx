/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {useState} from 'react';
import styles from './FAQ.module.scss';
import Link from "next/link";

interface ItemsOpen {
    [key: string]: boolean;
    item: boolean;
}

const FAQ: React.FC = () => {

    const [isOpen, setIsOpen] = useState<ItemsOpen>({
        item: false,
    });


    const toggleAccordion = (item: string) => {
        setIsOpen(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    }

    return (
        <div className={styles.mainContainer}>
            <div>
                <h1 className={styles.title1}>FAQs on Medical Aid</h1>
                <p className={styles.title2}>Your Questions Answered</p>
            </div>

            <div id="accordion-color" className={styles.faqContainer} data-accordion="collapse"
                 data-active-classes={styles.faqContainerActive}>
                <h2 id="accordion-color-heading-1">
                    <button type="button"
                            onClick={() => toggleAccordion('item1')}
                            className={`${styles.buttonLine} rounded-t-xl`}
                            data-accordion-target="#accordion-color-body-1" aria-expanded={isOpen.item1}
                            aria-controls="accordion-color-body-1">
                        <span>What is UKROPS Medical Charity?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img" className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item1 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-1" className={isOpen.item1 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-1">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>As a small newly registered charity we are aiming to continue
                            building up on the work started by our founder Leo Krivskiy. We continue to gratefully
                            receive used medical equipment and disposables from UK hospitals and medical companies,
                            which is then delivered into Ukraine by our partners at the Medical Lifelines UK and sent
                            directly to our contacts who need them most. There are no middlemen, or big charities
                            involved – we know the people we help personally and respond to their requests directly.
                        </p>
                        <p className={styles.answer}>At UKROPS, we are all doctors who not only have a deep
                            understanding of the needs of the Ukrainian medics but are also able to communicate to them
                            in their language and appreciate and respond to the real situation on the ground.
                        </p>
                        <p className={`${styles.answer} italic text-sm mt-4`}><Link
                            href="/about"
                            className={styles.link}>Learn more</Link>
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-2">
                    <button type="button"
                            onClick={() => toggleAccordion('item2')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-2" aria-expanded={isOpen.item2}
                            aria-controls="accordion-color-body-2">
                        <span>How does the charity assist Ukrainian medics?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item2 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-2" className={isOpen.item2 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-2">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>UKROPS Medical Charity provides essential medical supplies,
                            training, and support to Ukrainian medics on the front lines. By coordinating with local and
                            international partners, the charity ensures timely and effective aid to those in need.
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-3">
                    <button type="button"
                            onClick={() => toggleAccordion('item3')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-3" aria-expanded={isOpen.item3}
                            aria-controls="accordion-color-body-3">
                        <span>Can I volunteer or donate to the charity?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item3 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-3" className={isOpen.item3 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-3">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>{`Absolutely! UKROPS Medical Charity welcomes both volunteers and
                            donations. Whether you're a medical professional or simply someone looking to help, there
                            are numerous ways to get involved and make a significant impact.`}
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-4">
                    <button type="button"
                            onClick={() => toggleAccordion('item4')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-4" aria-expanded={isOpen.item4}
                            aria-controls="accordion-color-body-4">
                        <span>What impact has the charity had so far?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item4 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-4" className={isOpen.item4 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-4">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>Since its inception, UKROPS Medical Charity has successfully
                            delivered over 10,000 medical kits and has trained hundreds of medical staff, dramatically
                            improving the emergency response capabilities in conflict zones.
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-5">
                    <button type="button"
                            onClick={() => toggleAccordion('item5')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-5" aria-expanded={isOpen.item5}
                            aria-controls="accordion-color-body-5">
                        <span>Where does the funding come from?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item5 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-5" className={isOpen.item5 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-5">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>Funding for UKROPS Medical Charity comes from a variety of sources
                            including private donations, grants from health foundations, and partnerships with global
                            health organizations, ensuring a diverse and sustainable financial base.
                        </p>
                    </div>
                </div>

                <h2 id="accordion-color-heading-6">
                    <button type="button"
                            onClick={() => toggleAccordion('item6')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-6" aria-expanded={isOpen.item6}
                            aria-controls="accordion-color-body-6">
                        <span>How is the charity ensuring transparency?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item6 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-6" className={isOpen.item6 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-6">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>{`Transparency is a core value at UKROPS Medical Charity. Regular
                            reports detailing the allocation and impact of funds are published on the charity's website
                            and are available to all stakeholders.`}
                        </p>
                    </div>
                </div>

                <h2 id="accordion-color-heading-7">
                    <button type="button"
                            onClick={() => toggleAccordion('item7')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-7" aria-expanded={isOpen.item7}
                            aria-controls="accordion-color-body-7">
                        <span>{`I'd like to make a donation. Is it safe?`}</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item7 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-7" className={isOpen.item7 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-7">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>Absolutely. Our partner Donorbox guarantees the security of
                            transactions, regardless of the amount of your donations.
                        </p>
                        <p className={`${styles.answer} italic text-sm mt-4`}>Learn more about the <a
                            href="https://donorbox.org/"
                            className={styles.link}>Donorbox</a> service.
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-8">
                    <button type="button"
                            onClick={() => toggleAccordion('item8')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-8" aria-expanded={isOpen.item8}
                            aria-controls="accordion-color-body-8">
                        <span>Which countries does Donorbox support?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item8 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-8" className={isOpen.item8 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-8">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>
                            Donorbox is supported in any country where Stripe or PayPal is available.
                        </p>
                        <p className={styles.answer}>
                            For PayPal accounts, please check that local bank deposits are possible so your received
                            donations can be paid out from PayPal into your bank account.
                        </p>
                        <p className={`${styles.answer} italic text-sm mt-4`}>More information about the <a
                            href="https://donorbox.zendesk.com/hc/en-us/articles/360020559651-Which-countries-does-Donorbox-support"
                            className={styles.link}>Donorbox service</a> can be found here.
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-9">
                    <button type="button"
                            onClick={() => toggleAccordion('item9')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-9" aria-expanded={isOpen.item9}
                            aria-controls="accordion-color-body-9">
                        <span>Can I donate without registering?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item9 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-9" className={isOpen.item9 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-9">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>Of course you can.
                        </p>
                        <p className={styles.answer}>{`By clicking on the "DONATE" button you will be
                            redirected to the Donorbox payment system where you can securely make a payment.`}
                        </p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-10">
                    <button type="button"
                            onClick={() => toggleAccordion('item10')}
                            className={styles.buttonLine}
                            data-accordion-target="#accordion-color-body-10" aria-expanded={isOpen.item10}
                            aria-controls="accordion-color-body-10">
                        <span>Why do I need to register on the site?</span>
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink"
                             aria-hidden="true" role="img"
                             className={`iconify w-6 h-6 iconify--emojione-monotone ${isOpen.item10 ? 'rotate-180' : ''}`}
                             preserveAspectRatio="xMidYMid meet" fill="#000000" transform="rotate(270)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M48.86 38.033V7.182C48.86 4.324 46.466 2 43.523 2c-2.924 0-5.303 2.324-5.303 5.182v14.16c-1.643-.774-5.643-.107-6.437 2.437c-2.248-3.127-9.597-2.502-9.597 3.208c-2.776-2.877-8.721-.919-8.721 3.231c0 0 .051 3.376 0 4.165c-.23 3.575-.929 7.188.009 14.33c1.002 7.646 7.683 12.853 17.02 13.264c.358.015.716.023 1.078.023c7.958 0 16.968-3.836 18.907-12.584c1.17-5.273.253-8.757-1.619-11.383M39.766 6.901c0-3.754 6.428-3.438 6.428.091v28.212c-1.246-1.048-4.108-2.97-4.108-2.97v-5.69c0-2.247-1.449-3.747-2.33-4.393l.01-15.25m.079 19.269v4.771c-1.587-.599-2.868-.245-4.295.169c-.748.216-1.771.497-2.826.646l-.124-5.275c0-5.092 7.245-4.622 7.245-.311m-9.207.624v5.057c-2.644-.347-5.414 1.841-4.896 5.183c-.945-.599-2.058-1.608-2.058-2.869l-.272-7.138c0-4.001 7.226-4.96 7.226-.233m-15.746 4.211c0-3.825 7.146-4.801 7.146.517v5.69c0 5.813-7.249 5.923-7.249.522l.103-6.729m31.957 20.812c-4.747 7.188-14.331 8.92-21.813 6.791c-4.715-1.466-12.035-6.5-10.583-17.25c2.057 3.414 8.667 2.979 9.834-2.92a5.19 5.19 0 0 0 2.506 1.055c.41.511 2.161 2.345 4.641 2.468c-2.201 1.266-3.979 3.741-2.904 7.792c-.085-6.665 6.353-8.602 8.064-8.104c1.15.335 2.386 2.439 2.84 3.605c.165.424.099 1.914.099 1.914s.433-1.437.347-1.915c-.289-1.61-2.195-4.541-4.17-5.042c-1.657-.421-4.107.844-6.772-.968c-1.652-1.123-2.241-2.994-1.898-4.136c.309-1.021 1.04-2.104 2.25-2.063c3.066.106 5.242-.479 6.688-.896c1.673-.483 3.279-.662 4.813.375c0 0 5.91 4.577 7.229 7.146c1.905 3.724.906 8.998-1.171 12.148"
                                    fill="#000000"></path>
                            </g>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-10" className={isOpen.item10 ? "" : "hidden"}
                     aria-labelledby="accordion-color-heading-10">
                    <div className={styles.answerBlock}>
                        <p className={styles.answer}>If you are
                        </p>
                        <ul className="ps-5 text-cyan-900 list-disc dark:text-gray-400">
                            <li className="dark:text-blue-500">not indifferent to the issues covered by this
                                foundation
                            </li>
                            <li className="dark:text-blue-500">if you want to take an active part in volunteering</li>
                            <li className="dark:text-blue-500">discuss questions</li>
                            <li className="dark:text-blue-500">if you just care</li>
                        </ul>
                        <p className={`${styles.answer} mt-4`}> by registering on our resource you will have the
                            opportunity to express your idea and actively participate in the life of the foundation.
                        </p>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default FAQ;
