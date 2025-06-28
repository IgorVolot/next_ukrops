// /*
//  * /
//  *  *  *
//  *  *  *   *******************************************************************************
//  *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
//  *  *  *   *******************************************************************************
//  *  *  *
//  * /
//  */
//
// import React from 'react';
// import styles from './Timeline.module.scss';
// import img1 from '@/public/blogPage/img1.jpeg'
// import Image from "next/image";
//
// const Timeline: React.FC = () => {
//     return (
//         <section className={styles.mainContainer}>
//             <h1 className={styles.mainTitle}>{`What we have done and what we are going to do with you together`}</h1>
//             <div className={styles.mainBlock}>
//                 <ol className={styles.blockContainer}>
//                     <li className={styles.block}>
//         <span
//             className={styles.icon}>
//             <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
//                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                     d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//                         <h3 className={styles.title}>
//                             Atlantic row
//                         </h3>
//                         <time
//                             className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Expected
//                             in January, 2025
//                         </time>
//                         <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420" height="315"
//                                 src="https://www.youtube.com/embed/wKWVc-5VPFA?autoplay=1&mute=1">
//                         </iframe>
//                         <p className={styles.text}>In January 2025, Leo
//                             will embark on the extraordinary challenge of rowing solo across the Atlantic. Starting from
//                             Tenerife and finishing in Barbados, this voyage is a true test of both physical strength and
//                             mental resilience. Leo will navigate through the vast, open waters, battling against
//                             unpredictable weather and towering waves, all while facing the daunting solitude of the
//                             ocean.
//                         </p>
//                         <p className={styles.text}>
//                             The immense task of maintaining physical endurance and mental focus amidst the breath-taking
//                             yet relentless expanse of the Atlantic will push Leo to his limits.
//                         </p>
//                         <p className={styles.text}>
//                             {`Reaching Barbados won't just signify the end of a geographical voyage; it will mark the
//                                 completion of an incredible personal achievement, showcasing human determination and spirit
//                                 at its finest. This remarkable journey also serves as a platform for Leo's commitment to
//                                 fundraise and support Ukrainian medical professionals, providing them with essential medical
//                                 equipment and supplies, further underlining the profound impact of this Atlantic row.`}
//                         </p>
//                     </li>
//
//                     <li className={styles.block}>
//         <span
//             className={styles.icon}>
//             <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
//                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                     d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//                         <h3 className={styles.title}>Introduction of Ukrops
//                             Medical Charity
//                             <span
//                                 className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span>
//                         </h3>
//                         <time
//                             className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May,
//                             2024
//                         </time>
//                         <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420" height="315"
//                                 src="https://www.youtube.com/embed/QHVJb38N8QE?si=n3r_qdfC7cWBBbhM?autoplay=1&mute=1">
//                         </iframe>
//                         <p className={styles.text}>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
//                             admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his,
//                             te elit
//                             voluptua dignissim per, habeo iusto primis ea eam.
//                         </p>
//                     </li>
//                     <li className={styles.block}>
//         <span
//             className={styles.icon}>
//             <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
//                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                     d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//                         <h3 className={styles.title}>Another version with a
//                             more personal touch</h3>
//                         <time
//                             className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May,
//                             2024
//                         </time>
//                         <iframe className={styles.mediaBlock} title="Leo-Row-Atlantic" width="420" height="315"
//                                 src="https://www.youtube.com/embed/z1ZCNKs-Ies?si=dH8b2q8g6orQUT6B?autoplay=1&mute=1">
//                         </iframe>
//                         <p className={styles.text}>{`I support through my
//                             travels through my educational activity. Since 2014 I've been involved with my Ukrainian
//                             anesthetic colleagues both by going there organizing seminars and conferences. I know quite
//                             a few people in the medical world in Ukraine and I'm able to contact them directly and I
//                             really know their needs and respond to them of course.`}
//                         </p>
//                         <p className={styles.text}>
//                             {`Please support us, please follow us and please keep your interest in what's going on Ukraine
//                                 alive. This is vitally important that we help those people survive and save as many lives as
//                                 possible. Thank you.`}
//                         </p>
//                     </li>
//                     <li className={styles.block}>
//         <span
//             className={styles.icon}>
//             <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
//                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                 <path
//                     d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
//             </svg>
//         </span>
//                         <h3 className={styles.title}>Another version with a
//                             more personal touch</h3>
//                         <time
//                             className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March,
//                             2022
//                         </time>
//                         <a href="https://www.justgiving.com/crowdfunding/leonid-krivskiy" target="_blank"
//                            rel="noopener noreferrer">
//                             <Image className={styles.img} src={img1} alt="volounteers" width={360} height={360} />
//                         </a>
//                         <p className={styles.text}>I am buying tactical medical disposables, and equipment, and
//                             deliver it myself to Ukraine, where it
//                             is distributed directly to the people, who currently need it most. I know everyone involved
//                             personally,
//                             and you could look into their eyes too. Everything is being bought, and prioritized
//                             according to their
//                             current needs. I am in charge of the whole process, and my name is on it.
//                         </p>
//                         <p className={styles.text}>
//                             I have already done two deliveries, and am planning another one.
//                         </p>
//                         <p className={styles.text}>
//                             Before I had planned my first trip to Ukraine, I just wanted to do
//                             something useful on a small scale,
//                             and hence my natural choice was tactical medical disposables for the frontline medics. CAT
//                             tourniquets,
//                             Celox, Israeli bandages - they have been, and are in great demand, and limited supply. I
//                             also had a
//                             specific request for bulletproof vests from a group of medics, who were operating near Kyiv,
//                             a hotspot
//                             at the time of my first trip. I did not know the situation on the ground very well then, and
//                             just
//                             concentrated on the things you can’t go wrong with, as well as also responding to a few
//                             specific
//                             requests from the people I’d gotten to know previously.
//                         </p>
//                         <p className={styles.text}>
//                             Now, after my second mission is completed, I have a much better idea
//                             about where I want to go with this,
//                             provided I manage to attract more funding.
//                         </p>
//                     </li>
//                 </ol>
//             </div>
//         </section>
//     );
// };
//
// export default Timeline;
