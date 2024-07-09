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
import AboutHero from "@/components/ui/about/aboutHero/AboutHero";
import AboutUs from "@/components/ui/about/aboutUs/AboutUs";
import OurActivity from "@/components/ui/about/ourActivity/OurActivity";
import DonateUs from "@/components/ui/about/donateUs/DonateUs";
import BottomBanner from "@/components/ui/about/bottomBanner/BottomBanner";

const About: React.FC = () => {
    return (
        <div>
            <AboutHero/>
            <AboutUs/>
            <OurActivity/>
            <DonateUs/>
            <BottomBanner/>
        </div>
    );
};

export default About;
