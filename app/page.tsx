/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/


import Hero from "@/components/ui/homePage/hero/Hero";
import styles from '@/styles/Home.module.scss'
import Partners from "@/components/ui/homePage/partners/Partners";
import JoinUs from "@/components/ui/homePage/joinUs/JoinUs";
import Empower from "@/components/ui/homePage/empower/Empower";
import NeedHelp from "@/components/ui/homePage/needHelp/NeedHelp";
import VoicesOfImpact from "@/components/ui/homePage/voices/VoicesOfImpact";
import SupportPlans from "@/components/ui/homePage/supportPlans/SupportPlans";


export default function Home() {
  return (
      <div className={`${styles.container}`}>
          <Hero/>
          <Partners/>
          <JoinUs/>
          <Empower/>
          <NeedHelp/>
          <VoicesOfImpact/>
          <SupportPlans/>
      </div>
  );
}
