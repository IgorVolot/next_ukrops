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
import facebook from '@/public/homePage/socialPublics/facebook-color-svgrepo-com.svg'
import discord from '@/public/homePage/socialPublics/discord-svgrepo-com.svg'
import messenger from '@/public/homePage/socialPublics/fb-messenger-svgrepo-com.svg'
import snapchat from '@/public/homePage/socialPublics/snapchat-svgrepo-com.svg'
import instagram from '@/public/homePage/socialPublics/instagram-1-svgrepo-com.svg'
import linkedin from '@/public/homePage/socialPublics/linkedin-svgrepo-com.svg'
import reddit from '@/public/homePage/socialPublics/reddit-icon-svgrepo-com.svg'
import pinterest from '@/public/homePage/socialPublics/pinterest-1-svgrepo-com.svg'
import skype from '@/public/homePage/socialPublics/skype-svgrepo-com.svg'
import slack from '@/public/homePage/socialPublics/slack-svgrepo-com.svg'
import telegram from '@/public/homePage/socialPublics/telegram-svgrepo-com.svg'
import tiktok from '@/public/homePage/socialPublics/tiktok-svgrepo-com.svg'
import twitter from '@/public/homePage/socialPublics/twitter-1-svgrepo-com.svg'
import viber from '@/public/homePage/socialPublics/viber-svgrepo-com.svg'
import whatsapp from '@/public/homePage/socialPublics/whatsapp-svgrepo-com.svg'
import tumblr from '@/public/homePage/socialPublics/tumblr-svgrepo-com.svg'
import ukrops from '@/public/homePage/socialPublics/UKROPS_QR_link.png'

import styles from './Support.module.scss'
import React from 'react';
import Image from "next/image";

const Social = () => {
    const link: string = "https://ukropsmedical.org"

    const shareToLinkedIn = () => {
        const url = link
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${link}`, "_blank")
    }

    const shareToWhatsApp = () => {
        const url = link
        const text = encodeURIComponent("Check this out!")
        window.open(`https://wa.me/?text=${text}%20${url}`, "_blank")
    }

    const shareToTelegram = () => {
        const url = link
        const text = encodeURIComponent("Check this out!")
        window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank")
    }

    const shareToInstagram = () => {
        const url = 'https://ukropsmedical.org'; // Replace with the URL you want to share
        alert(`To share this link on Instagram, copy the URL and paste it into a new post or story: ${url}`);
    };


    return (
        <div className="flex flex-col mx-auto">
            <div className={`${styles.iconContainer} flex flex-row`}>
                <div className="social-icons flex flex-col">
                    <div className="m-2">
                        <a data-href='https://ukropsmedical.org' href="https://facebook.com" target="_blank">
                            <Image src={facebook} alt={facebook} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://discord.com" target="_blank">
                            <Image src={discord} alt={discord} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://messenger.com" target="_blank">
                            <Image src={messenger} alt={messenger} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a onClick={shareToInstagram} target="_blank">
                            <Image src={instagram} alt={instagram} className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
                <div className="social-icons flex flex-col">
                    <div className="m-2">
                        <a href="https://www.snapchat.com/" target="_blank">
                            <Image src={snapchat} alt={snapchat} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a onClick={shareToLinkedIn} target="_blank">
                            <Image src={linkedin} alt={linkedin} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.reddit.com/" target="_blank">
                            <Image src={reddit} alt={reddit} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://pinterest.com" target="_blank">
                            <Image src={pinterest} alt={pinterest} className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
                <div className="social-icons flex flex-col">
                    <div className="m-2">
                        <a href="https://skype.com" target="_blank">
                            <Image src={skype} alt={skype} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://slack.com" target="_blank">
                            <Image src={slack} alt={slack} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a onClick={shareToTelegram} target="_blank">
                            <Image src={telegram} alt={telegram} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.tiktok.com/en/" target="_blank">
                            <Image src={tiktok} alt={tiktok} className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
                <div className="social-icons flex flex-col">
                    <div className="m-2">
                        <a href="https://twitter.com" target="_blank">
                            <Image src={twitter} alt={twitter} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.viber.com/en/" target="_blank">
                            <Image src={viber} alt={viber} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a onClick={shareToWhatsApp} target="_blank">
                            <Image src={whatsapp} alt={viber} className={styles.socialIcon}/>
                        </a>
                    </div>
                    <div className="m-2">
                        <a href="https://www.tumblr.com/" target="_blank">
                            <Image src={tumblr} alt={tumblr} className={styles.socialIcon}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="my-4 mx-auto">
                <Image src={ukrops} alt='ukrops' width={160} height={160} className={styles.logo}/>
            </div>

        </div>


    );
};

export default Social;
