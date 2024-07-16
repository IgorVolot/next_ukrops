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
import AccordionItem from '../../AccordionItem'

interface ItemsOpen {
    [key: string]: boolean;
}

const FAQ: React.FC = () => {

    const [isOpen, setIsOpen] = useState<ItemsOpen>({});


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

                <AccordionItem
                    question="What is UKROPS Medical Charity?"
                    id="item1"
                    isOpen={isOpen['item1']}
                    toggleOpen={() => toggleAccordion('item1')}
                    answer={
                        <>
                            <p className={styles.answer}>As a small newly registered charity we are aiming to continue
                                building up on the work started by our founder Leo Krivskiy. We continue to gratefully
                                receive used medical equipment and disposables from UK hospitals and medical companies,
                                which is then delivered into Ukraine by our partners at the Medical Lifelines UK and
                                sent
                                directly to our contacts who need them most. There are no middlemen, or big charities
                                involved – we know the people we help personally and respond to their requests directly.
                            </p>
                            <p className={styles.answer}>At UKROPS, we are all doctors who not only have a deep
                                understanding of the needs of the Ukrainian medics but are also able to communicate to
                                them
                                in their language and appreciate and respond to the real situation on the ground.
                            </p>
                            <p className={`${styles.answer} italic text-sm mt-4`}>
                                <Link href="/about" className={styles.link}>Learn more</Link>
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question="How does the charity assist Ukrainian medics?"
                    id="item2"
                    isOpen={isOpen['item2']}
                    toggleOpen={() => toggleAccordion('item2')}
                    answer={
                        <>
                            <p className={styles.answer}>UKROPS Medical Charity provides essential medical supplies,
                                training, and support to Ukrainian medics on the front lines. By coordinating with local
                                and
                                international partners, the charity ensures timely and effective aid to those in need.
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question='Can I volunteer or donate to the charity?'
                    id='item3'
                    isOpen={isOpen['item3']}
                    toggleOpen={() => toggleAccordion('item3')}
                    answer={
                        <>
                            <p className={styles.answer}>{`Absolutely! UKROPS Medical Charity welcomes both volunteers and
                            donations. Whether you're a medical professional or simply someone looking to help, there
                            are numerous ways to get involved and make a significant impact.`}
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question='What impact has the charity had so far?'
                    id='item4'
                    isOpen={isOpen['item4']}
                    toggleOpen={() => toggleAccordion('item4')}
                    answer={
                        <>
                            <p className={styles.answer}>Since its inception, UKROPS Medical Charity has successfully
                                delivered over 10,000 medical kits and has trained hundreds of medical staff,
                                dramatically
                                improving the emergency response capabilities in conflict zones.
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question='Where does the funding come from?'
                    id='item5'
                    isOpen={isOpen['item5']}
                    toggleOpen={() => toggleAccordion('item5')}
                    answer={
                        <>
                            <p className={styles.answer}>Funding for UKROPS Medical Charity comes from a variety of
                                sources
                                including private donations, grants from health foundations, and partnerships with
                                global
                                health organizations, ensuring a diverse and sustainable financial base.
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question="How is the charity ensuring transparency?"
                    id="item6"
                    isOpen={isOpen['item6']}
                    toggleOpen={() => toggleAccordion('item6')}
                    answer={
                        <>
                            <p className={styles.answer}>{`Transparency is a core value at UKROPS Medical Charity. Regular
                            reports detailing the allocation and impact of funds are published on the charity's website
                            and are available to all stakeholders.`}
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question={`I'd like to make a donation. Is it safe?`}
                    id='item7'
                    isOpen={isOpen['item7']}
                    toggleOpen={() => toggleAccordion('item7')}
                    answer={
                        <>
                            <p className={styles.answer}>Absolutely. Our partner Donorbox guarantees the security of
                                transactions, regardless of the amount of your donations.
                            </p>
                            <p className={`${styles.answer} italic text-sm mt-4`}>Learn more about the <a
                                href="https://donorbox.org/"
                                className={styles.link}>Donorbox</a> service.
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question="Which countries does Donorbox support?"
                    id="item8"
                    isOpen={isOpen['item8']}
                    toggleOpen={() => toggleAccordion('item8')}
                    answer={
                        <>
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
                        </>
                    }
                />

                <AccordionItem
                    question='Can I donate without registering?'
                    id='item9'
                    isOpen={isOpen['item9']}
                    toggleOpen={() => toggleAccordion('item9')}
                    answer={
                        <>
                            <p className={styles.answer}>Of course you can.
                            </p>
                            <p className={styles.answer}>{`By clicking on the "DONATE" button you will be
                            redirected to the Donorbox payment system where you can securely make a payment.`}
                            </p>
                        </>
                    }
                />

                <AccordionItem
                    question="Why do I need to register on the site?"
                    id="item10"
                    isOpen={isOpen['item10']}
                    toggleOpen={() => toggleAccordion('item10')}
                    answer={
                        <>
                            <p className={styles.answer}>If you are
                            </p>
                            <ul className="ps-5 text-cyan-900 list-disc dark:text-gray-400">
                                <li className="dark:text-blue-500">not indifferent to the issues covered by this
                                    foundation
                                </li>
                                <li className="dark:text-blue-500">if you want to take an active part in volunteering
                                </li>
                                <li className="dark:text-blue-500">discuss questions</li>
                                <li className="dark:text-blue-500">if you just care</li>
                            </ul>
                            <p className={`${styles.answer} mt-4`}> by registering on our resource you will have the
                                opportunity to express your idea and actively participate in the life of the foundation.
                            </p>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default FAQ;
