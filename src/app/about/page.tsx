/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */


import React from 'react';
import AboutHero from "@/components/ui/aboutPage/aboutHero/AboutHero";
import AboutUs from "@/components/ui/aboutPage/aboutUs/AboutUs";
import OurActivity from "@/components/ui/aboutPage/ourActivity/OurActivity";
import DonateUs from "@/components/ui/aboutPage/donateUs/DonateUs";
import BottomBanner from "@/components/ui/aboutPage/bottomBanner/BottomBanner";
import Founders from "@/components/ui/aboutPage/founders/Founders";

const About: React.FC = () => {
    return (
        <div>
            <AboutHero/>
            <AboutUs/>
            <Founders/>
            <OurActivity/>
            <DonateUs/>
            <BottomBanner/>
        </div>
    );
};

export default About;
