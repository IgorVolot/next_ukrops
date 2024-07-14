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
import Icon from "@/components/ui/homePage/faq/Icon";
import Link from "next/link";

interface ItemsOpen {
    [key: string]: boolean;

    item: boolean;
    // item2: boolean;
    // item3: boolean;
}

const FAQ: React.FC = () => {
    const [isOpen, setIsOpen] = useState<ItemsOpen>({
        item: false,
        // item2: false,
        // item3: false
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
                        <Icon/>
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
