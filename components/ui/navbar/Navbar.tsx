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
import Link from "next/link";
import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {links} from "./menu.data";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from '../../../public/logo/icon_ukrops.png'
import { Button } from "../button/button"


const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className={styles.navbar}>
            <div className="flex">

                <Link href="/" title="Home">
                    <Image className={styles.logo} src={logo} alt="Logo"
                           style={{maxWidth: '48px', height: 'auto'}}/>
                </Link>
                <h1 className={styles.title}>UKROPS Medical Charity</h1>

                <ul className="hidden md:flex my-auto">
                    {links.map(({id, link}) => (
                        <li
                            key={id}
                            className={styles.linksDesktop}
                        >
                            <Link href={link}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className="hidden md:flex lg:mr-5">
                <Button asChild style={{width: "150px", backgroundColor: "#f5f5f5"}}>
                    <Link href="/login">Login</Link>
                </Button>

            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray md:hidden"
            >
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
            <ul className={styles.linksMobile}>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <Link onClick={() => setNav(!nav)} href={link}>
                            {link}
                        </Link>
                    </li>
                ))}
                <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                    <Button asChild>
                        <Link href="/login" onClick={() => setNav(!nav)}>Login</Link>
                    </Button>
                </li>
            </ul>

            )}
        </div>
    );
};

export default Navbar;

