/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import Link from "next/link";
import React, {useState} from "react";
import {links} from "./menu.data";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from './../../../../public/logo/icon_ukrops.png'
import {Button, useDisclosure} from "@nextui-org/react";
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <nav className={styles.navbar}>
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex">

                    <Link href="/" title="Home">
                        <Image className={styles.logo} src={logo} alt="Logo"
                               style={{maxWidth: '48px', height: 'auto'}}/>
                    </Link>
                    <h1 className={styles.title}>UKROPS Medical Charity</h1>

                    <div className={styles.linksDesktopBlock}>
                        <ul className="hidden md:flex my-auto">
                            {links.map(({id, link}) => (
                                <li
                                    key={id}
                                    className={styles.linksDesktop}
                                >
                                    <Link href={"/" + link}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ul className="hidden md:flex lg:mr-5">
                    <Button className={styles.button}>
                        <Link href="/login"
                              type="button"
                              onClick={onOpen}
                        >Login
                        </Link>
                    </Button>
                </ul>
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-40 text-gray md:hidden"
                >
                    {nav ? <FaTimes size={30} style={{color: '#fef08a'}}/> : <FaBars size={30}/>}
                </div>

                {nav && (
                    <ul className={styles.linksMobile}>
                        {links.map(({id, link}) => (
                            <li
                                key={id}
                                className="cursor-pointer mx-auto capitalize py-6 text-2xl"
                            >
                                <Link onClick={() => setNav(!nav)} href={link}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                        <li className="cursor-pointer mx-auto capitalize py-6 text-2xl">
                            <Link className="border border-yellow-200 rounded-xl py-2 px-6"
                                  href="/signup"
                                  onClick={() => setNav(!nav)}
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>

                )}
            </div>

        </nav>
    );
};

export default Navbar;

