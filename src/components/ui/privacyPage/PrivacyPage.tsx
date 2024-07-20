/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {useState} from 'react';
import styles from './Privacy.module.scss';
import AccordionItem from "@/components/ui/AccordionItem";
import Link from "next/link";

interface ItemsOpen {
    [key: string]: boolean;
}


const PrivacyPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState<ItemsOpen>({});


    const toggleAccordion = (item: string) => {
        setIsOpen(prevState => ({
            ...prevState,
            [item]: !prevState[item]
        }));
    }
    return (
        <article>
            <div className={`${styles.block}`}>
                <h1 className={`${styles.title} text-4xl`}>Privacy Policy</h1>

                <div className={`${styles.title}`}>
                    Last updated: 19 May 2024 10:56
                </div>
                <div className={`${styles.text}`}>
                    {`We value your privacy very highly. Please read this Privacy Policy carefully before using the
                        www.ukropsmedical.org
                        Website (the "Website") operated by Leo Krivskiy ("us," "we," "our") as this Privacy Policy contains
                        important
                        information regarding your privacy and how we may use the information we collect about you.`}
                </div>
                <div className={`${styles.text}`}>
                    Your access to and use of the Website is conditional upon your acceptance of and compliance with
                    this Privacy
                    Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and
                    others,
                    who wish to access or use the Website.
                </div>
                <div className={`${styles.text}`}>
                    By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree
                    with any part
                    of the Privacy Policy, then you do not have our permission to access or use the Website.
                </div>
                <div className={styles.title}>
                    {`WHAT INFORMATION WE COLLECT, WHERE WE GET THIS INFORMATION, HOW WE USE THIS INFORMATION, WHAT
                        HAPPENS IF WE
                        DON'T HAVE IT, AND THE LEGAL BASIS FOR PROCESSING THIS INFORMATION`}
                </div>
                <div className={`${styles.text}`}>
                    We collect and store any and all information that you enter on this Website. We collect and store
                    the
                    following information about you:
                </div>

                <div id="accordion-color" className={styles.faqContainer}
                     data-accordion="collapse"
                     data-active-classes={styles.faqContainerActive}
                >
                    <AccordionItem
                        question="IDENTIFYING INFORMATION - NAME"
                        id="item1"
                        isOpen={isOpen['item1']}
                        toggleOpen={() => toggleAccordion('item1')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Name</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Information submitted by the consumer.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information.</li>
                                </ul>

                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />
                    <AccordionItem
                        question="IDENTIFYING INFORMATION - PHONE NUMBER"
                        id="item2"
                        isOpen={isOpen['item2']}
                        toggleOpen={() => toggleAccordion('item2')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Phone number</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>

                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Information submitted by the consumer.</li>
                                </ul>

                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information.</li>
                                </ul>

                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="IDENTIFYING INFORMATION - IP ADDRESS"
                        id="item3"
                        isOpen={isOpen['item3']}
                        toggleOpen={() => toggleAccordion('item3')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>IP address</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Tracking pixels;</li>
                                    <li>The observation and recording of activities by the business, such as through the
                                        use
                                        of cookies.
                                    </li>
                                </ul>

                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Analytics;</li>
                                    <li>Counting ad impressions to unique visitors;</li>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Protecting against malicious, deceptive, fraudulent or illegal activity, and
                                        prosecuting those
                                        responsible for such activities;
                                    </li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information;</li>
                                    <li>Verifying position and quality of ad impressions.</li>
                                </ul>

                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="IDENTIFYING INFORMATION - EMAIL ADDRESS"
                        id="item4"
                        isOpen={isOpen['item4']}
                        toggleOpen={() => toggleAccordion('item4')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Email address</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Information submitted by the consumer.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="IDENTIFYING INFORMATION - DEVICE IDENTIFIER"
                        id="item5"
                        isOpen={isOpen['item5']}
                        toggleOpen={() => toggleAccordion('item5')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Device identifier</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Tracking pixels;</li>
                                    <li>The observation and recording of activities by the business, such as through the
                                        use
                                        of cookies.
                                    </li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="INTERNET OR OTHER ELECTRONIC ACTIVITY - INFORMATION REGARDING YOUR INTERACTION WITH OUR WEBSITE OR APPLICATION"
                        id="item6"
                        isOpen={isOpen['item6']}
                        toggleOpen={() => toggleAccordion('item6')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Information regarding your interaction
                                    with our website or application</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Tracking pixels;</li>
                                    <li>The observation and recording of activities by the business, such as through the
                                        use
                                        of cookies.
                                    </li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="INTERNET OR OTHER ELECTRONIC ACTIVITY - INFORMATION
                            REGARDING YOUR INTERACTIONS WITH
                            ADVERTISEMENTS"
                        id="item7"
                        isOpen={isOpen['item7']}
                        toggleOpen={() => toggleAccordion('item7')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of information</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Information regarding your interactions
                                    with advertisements</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Legal basis for processing this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>The user has provided consent to the processing of their information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Where we get this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Tracking pixels;</li>
                                    <li>The observation and recording of activities by the business, such as through the
                                        use
                                        of cookies.
                                    </li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>How we use this information</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Enforcing our Terms of Service;</li>
                                    <li>Marketing and advertising;</li>
                                    <li>Participation in surveys and contests;</li>
                                    <li>Performing services;</li>
                                    <li>Processing or fulfilling orders or transactions;</li>
                                    <li>Processing payments;</li>
                                    <li>Providing customer service;</li>
                                    <li>Resolving disputes;</li>
                                    <li>Verifying customer information.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>{`What happens if we don't have this information`}</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Our use of your data for enforcing our Terms of Service will not be possible;
                                    </li>
                                    <li>Our use of your data for marketing and advertising will not be possible;</li>
                                    <li>Our use of your data for participation in surveys and contests will not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for performing services will not be possible;</li>
                                    <li>Our use of your data for processing or fulfilling orders or transactions will
                                        not be
                                        possible;
                                    </li>
                                    <li>Our use of your data for processing payments will not be possible;</li>
                                    <li>Our use of your data for providing customer service will not be possible;</li>
                                    <li>Our use of your data for resolving disputes will not be possible;</li>
                                    <li>Our use of your data for verifying customer information will not be possible.
                                    </li>
                                </ul>
                            </>
                        }
                    />
                </div>

                <div className={`${styles.text}`}>We are not required to collect this information by a law, court order,
                    nor by a
                    tribunal order. We combine or link the personal information that we hold about you.
                </div>
                <div className={styles.title}>WITH WHOM WE SHARE YOUR PERSONAL
                    INFORMATION
                </div>
                <div className={`${styles.text}`}>We share the personal information below with the following third
                    parties for
                    the following reason(s):
                </div>

                <div id="accordion-color"
                     className={styles.faqContainer}
                     data-accordion="collapse"
                     data-active-classes={styles.faqContainerActive}
                >
                    <AccordionItem
                        question="A IDENTIFYING INFORMATION - NAME"
                        id="item8"
                        isOpen={isOpen['item8']}
                        toggleOpen={() => toggleAccordion('item8')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Name</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To manage our interactions with you;</li>
                                    <li>To market to you via email.</li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="IDENTIFYING INFORMATION - PHONE NUMBER"
                        id="item9"
                        isOpen={isOpen['item9']}
                        toggleOpen={() => toggleAccordion('item9')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Phone number</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To manage our interactions with you;</li>
                                    <li>To market to you via email.</li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="IDENTIFYING INFORMATION - IP"
                        id="item10"
                        isOpen={isOpen['item10']}
                        toggleOpen={() => toggleAccordion('item10')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>IP address</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Advertising networks;</li>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Data analytics providers;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Fraud prevention services vendors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website;</li>
                                    <li>Social networks.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To provide you with advertisements;</li>
                                    <li>To manage our interactions with you;</li>
                                    <li>To analyze your interactions with us or our website;</li>
                                    <li>To market to you via email;</li>
                                    <li>To prevent or investigate fraud.</li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="IDENTIFYING INFORMATION - EMAIL ADDRESS"
                        id="item11"
                        isOpen={isOpen['item11']}
                        toggleOpen={() => toggleAccordion('item11')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Email address</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To manage our interactions with you;</li>
                                    <li>To market to you via email.v</li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="To market to you via email."
                        id="item12"
                        isOpen={isOpen['item12']}
                        toggleOpen={() => toggleAccordion('item12')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Device identifier</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Advertising networks;</li>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Data analytics providers;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Fraud prevention services vendors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website;</li>
                                    <li>Social networks.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To provide you with advertisements;</li>
                                    <li>To manage our interactions with you;</li>
                                    <li>To analyze your interactions with us or our website;</li>
                                    <li>To market to you via email;</li>
                                    <li>To prevent or investigate fraud.</li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="INTERNET OR OTHER ELECTRONIC ACTIVITY - INFORMATION REGARDING YOUR INTERACTION WITH OUR WEBSITE OR APPLICATION"
                        id="item13"
                        isOpen={isOpen['item13']}
                        toggleOpen={() => toggleAccordion('item13')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Information regarding your interaction
                                    with our website or application</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Advertising networks;</li>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Data analytics providers;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Fraud prevention services vendors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website;</li>
                                    <li>Social networks.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To provide you with advertisements;</li>
                                    <li>To manage our interactions with you;</li>
                                    <li>To analyze your interactions with us or our website;</li>
                                    <li>To market to you via email;</li>
                                    <li>To prevent or investigate fraud.</li>
                                </ul>
                            </>
                        }
                    />

                    <AccordionItem
                        question="INTERNET OR OTHER ELECTRONIC ACTIVITY - INFORMATION REGARDING YOUR INTERACTIONS WITH ADVERTISEMENTS"
                        id="item14"
                        isOpen={isOpen['item14']}
                        toggleOpen={() => toggleAccordion('item14')}
                        answer={
                            <>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Specific piece of personal information shared</strong>
                                </p>
                                <p className={`${styles.text} ${styles.answer}`}>Information regarding your interactions
                                    with advertisements</p>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Categories of third parties with whom personal information is/was
                                        shared</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>Advertising networks;</li>
                                    <li>Content management systems;</li>
                                    <li>Customer management systems;</li>
                                    <li>Data analytics providers;</li>
                                    <li>Email marketing vendors;</li>
                                    <li>Email service providers;</li>
                                    <li>Financial transactions processors;</li>
                                    <li>Fraud prevention services vendors;</li>
                                    <li>Hosting providers;</li>
                                    <li>Parties that need to operate the website;</li>
                                    <li>Social networks.</li>
                                </ul>
                                <p className={`${styles.text} ${styles.answer}`}>
                                    <strong>Reason(s) for sharing</strong>
                                </p>
                                <ul className={`${styles.textBlock} ${styles.a}`}>
                                    <li>To provide you with advertisements;</li>
                                    <li>To manage our interactions with you;</li>
                                    <li>To analyze your interactions with us or our website;</li>
                                    <li>To market to you via email;</li>
                                    <li>To prevent or investigate fraud.</li>
                                </ul>
                            </>
                        }
                    />

                </div>


                <div className={styles.title}>HOW WE PROTECT YOUR PERSONAL INFORMATION
                </div>
                <div className={`${styles.text}`}>We have implemented the following measures to protect and safeguard
                    your
                    personal information:
                </div>
                <ul className={`${styles.textBlock} ${styles.a}`}>
                    <li>Using ssl or other secure connection technologies when receiving or sending personal information
                        beyond
                        internal networks;
                    </li>
                    <li>Maintaining up-to-date software and safeguards.</li>
                </ul>
                <div className={styles.title}>SALE OF YOUR INFORMATION</div>
                <div className={`${styles.text}`}>We do not sell your personal information.</div>
                <div className={styles.title}>COOKIES</div>
                <div className={`${styles.text}`}>A cookie is a small piece of data sent from a website and stored on
                    your device
                    by your browser. This Website collects cookies. Please visit our Cookie Policy to learn more about
                    what
                    cookies we collect, why we collect them, and how to change your cookie settings.
                </div>
                <div className={styles.title}>{`CHILDREN'S PRIVACY`}</div>
                <div className={`${styles.text}`}>This Website is intended for use by a general audience and does not
                    offer
                    services to children. Should a child whom we know to be under 18 send personal information to us, we
                    will use
                    that information only to respond to that child to inform him or her that they cannot use this
                    Website.
                </div>
                <div className={styles.title}>ANALYTICS PROGRAMS</div>
                <div className={`${styles.text}`}>This Website uses Google Analytics to collect information about you
                    and your behaviors. If you would like to opt out of Google Analytics, please visit
                    <a href="https://tools.google.com/dlpage/gaoptout/."
                       title="Google Analytics"
                       className={styles.link}
                       target="_blank"
                    > https://tools.google.com/dlpage/gaoptout/.
                    </a>
                </div>
                <div className={styles.title}>INFORMATION RETENTION</div>
                <div className={`${styles.text}`}>We retain all of the information that we collect until we no longer
                    need the
                    information to contact you.
                </div>
                <div className={styles.title}>DIRECT MARKETING</div>
                <div className={`${styles.text}`}>We use the information that we collect about you for direct marketing
                    purposes.
                    Direct marketing is the act of selling products or services directly to consumers rather than
                    through
                    retailers. You may, at any time, request that we cease to use your information for direct marketing
                    purposes by emailing us at
                    <a href='mailto:leo@ukropsmedical.com' className={styles.link}> leo@ukropsmedical.com.</a>
                </div>
                <div className={styles.title}>YOUR RIGHTS</div>
                <div className={`${styles.text}`}>All visitors or users of this website have the following rights with
                    regard to
                    their personal information:
                </div>
                <ol className={`${styles.textBlock} ${styles.b}`}>
                    <li>The right to access the personal information that we have collected about you.</li>
                    <li>The right to say no to the sale of your personal information.</li>
                    <li>The right to request that we delete all or some of the personal information that we have
                        collected on
                        you.
                    </li>
                    <li>The right to ask us to transmit your personal information that we have collected on you to
                        another
                        provider (where technically feasible).
                    </li>
                    <li>The right to request that we amend any of the information that we have collected about you.</li>
                    <li>The right to withdraw your consent to the processing of your data.</li>
                    <li>The right to request that we restrict the processing of your data.</li>
                    <li>The right to lodge a complaint regarding our collection, sharing and processing of data with
                        competent
                        authorities in the proper jurisdiction.
                    </li>
                    <li>The right to not have to identify yourself, or of using a pseudonym in certain circumstances.
                    </li>
                    <li>The right to stop receiving unwanted direct marketing.</li>
                </ol>
                <div className={styles.title}>EXERCISING YOUR RIGHTS</div>
                <div className={`${styles.text}`}>You may exercise the rights specified above by submitting a consumer
                    request
                    to:
                </div>

                <address className={`${styles.text}`}>
                    Leo Krivskiy<br/>
                    UKROPS Medical Charity<br/>
                    <a href="mailto:leo@ukropsmedical.com" className={styles.link} title='mail'> leo@ukropsmedical.com.</a>
                    <br/>
                    07850 962868<br/>
                    Garden Cottage, Chapel Lane, Nomansland, Salisbury. SP5 2DA<br/>
                    England, UK<br/>
                    <a href="https://ukropsmedical.org" className={styles.link} title="UKROPS" target='_blank'> ukropsmedical.org</a>
                    <br/>
                </address>

                <div className={`${styles.text}`}>We will need to verify your identity prior to effectuating your
                    request. To
                    verify your identity, you will need to provide us with the following information with your request:
                </div>
                <ul className={`${styles.textBlock} ${styles.a}`}>
                    <li>Email address.</li>
                </ul>
                <div className={`${styles.text}`}>Please note that we may be unable to process your request if you do
                    not
                    provide
                    us with the above information.
                </div>
                <div className={`${styles.text}`}>We will respond to most consumer requests within 30 to 45 days of
                    receipt,
                    depending upon where you reside. However, some requests may take longer. We will notify you in
                    writing if we
                    need more time to respond. We have the ability to deny your request(s) if certain exceptions in the
                    law apply.
                    If we do deny your request, we will provide you with the reasons for such denial.
                </div>

                <div className={styles.title}>COMPLAINTS</div>
                <div className={`${styles.text}`}>You have the right to lodge a complaint regarding our collection, use
                    and
                    sharing of your personal information by contacting us at the following contact information:
                </div>
                <address className={`${styles.text}`}>
                    Leo Krivskiy<br/>
                    UKROPS Medical Charity<br/>
                    <a href="mailto:leo@ukropsmedical.com" className={styles.link} title='mail'> leo@ukropsmedical.com.</a><br/>
                    07850 962868<br/>
                    Garden Cottage, Chapel Lane, Nomansland, Salisbury. SP5 2DA<br/>
                    England, UK<br/>
                </address>
                <div className={`${styles.text}`}>Any such complaints must first be addressed to us in writing as
                    required by
                    Australia Privacy Act 1988 S 40(1A). We will respond to all complaints within a reasonable time
                    (usually 30
                    days). If you are not satisfied with our response to your complaint, you may then lodge a complaint
                    with the
                    Office of the Australian Information Commissioner by following the steps on this page.
                </div>
                <div className={styles.title}>ACCOUNTABILITY</div>
                <div className={`${styles.text}`}>The following person is accountable and responsible for our privacy
                    practices
                    and procedures:
                </div>
                <address className={`${styles.text}`}>
                    Leo Krivskiy<br/>
                    UKROPS Medical Charity<br/>
                    <a href="mailto:leo@ukropsmedical.com" className={styles.link} title='mail'> leo@ukropsmedical.com.</a><br/>
                    07850 962868<br/>
                </address>
                <div className={`${styles.text}`}>You may lodge a complaint with us by contacting the person accountable
                    and
                    responsible for our privacy practices and procedures at the contact information above. Residents of
                    Quebec may
                    lodge a complaint with the Office of the Privacy Commissioner of Quebec by filling out this form or
                    calling
                    1-888-528-7741. Residents of Canada may also lodge a complaint with the Office of the Privacy
                    Commissioner of
                    Canada by visiting this page or calling 1-800-282-1376.
                </div>
                <div className={styles.title}>LOCATION OF DATA PROCESSING</div>
                <div className={`${styles.text}`}>All data processing activities undertaken by us take place in United
                    Kingdom.
                </div>
                <div className={styles.title}>THIRD-PARTY WEBSITES</div>
                <div className={`${styles.text}`}>This Website may contain hyperlinks to websites operated by parties
                    other than
                    us. We provide such hyperlinks for your reference only. We do not control such websites and are not
                    responsible for their contents or the privacy or other practices of such websites. It is up to you
                    to read and
                    fully understand their Privacy Policies. Our inclusion of hyperlinks to such websites does not imply
                    any
                    endorsement of the material on such websites or any association with their operators.
                </div>
                <div className={styles.title}>DO NOT TRACK</div>
                <div className={`${styles.text}`}>{`Do Not Track is a preference you can set on your browser to inform
                    websites
                    that you do not want to be tracked. We do not support Do Not Track ("DNT"). You can either enable or
                    disable
                    Do Not Track by visiting the Preferences or Settings page of your browser.`}
                </div>
                <div className={styles.title}>TRANSFERRING DATA</div>
                <div className={`${styles.text}`}>We plan to transfer data to The United States. This means that your
                    information
                    may be processed in a country outside of Canada and it may be accessible to law enforcement
                    authorities and
                    national security authorities of that country and jurisdiction.
                </div>
                <div className={styles.title}>CHANGES TO PRIVACY POLICY</div>
                <div className={`${styles.text}`}>We reserve the right to amend this Privacy Policy at any time. We will
                    notify
                    you of any changes to this Privacy Policy by posting the updated Privacy Policy to this website or
                    application.
                </div>
                <div className={styles.title}>QUESTIONS</div>
                <div className={`${styles.text}`}>If you have any questions about this Privacy Policy, please contact us
                    at <a href="mailto:leo@ukropsmedical.com" className={styles.link} title='mail'> leo@ukropsmedical.com.</a>
                </div>
            </div>

        </article>
    );
};

export default PrivacyPage;

