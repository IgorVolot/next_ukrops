/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

import type {Metadata} from "next";
import {Oswald} from "next/font/google";
import "../styles/globals.scss";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "@/components/ui/footer/Footer";
import Header from "@/components/ui/header/Header";

const font = Oswald({subsets: ["latin"]});

interface IProps {
    auth?: React.ReactNode;
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "UKROPS Medical Charity",
    description: "The Ukrops Medical Charity is a charity fund that was formed by a group of UK doctors to provide direct aid to Ukrainian medics.",
};


export default function RootLayout({auth, children}: IProps) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Navbar/>
        <Header/>
        {auth}
        {children}
        <Footer/>
        </body>
        </html>
    );
}
