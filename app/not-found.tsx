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
import React, {useEffect} from "react"
import anime from "animejs"
import styles from '../styles/notFound.module.scss'
import ErrorImage from "../components/ErrorImage";
import Link from "next/link";

interface ErrorPageProps {
    errorCode: number
    errorMessage: string
}

const ErrorPage: React.FC<ErrorPageProps> = ({errorCode, errorMessage}) => {
    useEffect(() => {
        const swingAnimation = anime({
            targets: [".handboy", ".girllight"],
            rotate: ["-10deg", "10deg"],
            easing: "easeInOutSine",
            direction: "alternate",
            duration: 6500,
            loop: true,
        })

        const swingHairAnimation = anime({
            targets: ".hairgirl",
            rotate: ["-6deg", "6deg"],
            easing: "easeInOutSine",
            direction: "alternate",
            duration: 6500,
            loop: true,
        })

        const zeroAnimation = anime({
            targets: "#zero",
            rotateY: ["0deg", "360deg"],
            easing: "linear",
            duration: 7800,
            loop: true,
        })

        return () => {
            swingAnimation.pause()
            swingHairAnimation.pause()
            zeroAnimation.pause()
        }
    }, [])

    const goToHomePage = () => {
        window.location.href = "/"
    }

    return (

            <div className={`${styles.errorContainer} flex-col bg-yellow-50`}>
                <div className={`${styles.errorContent} xl:scale-150`}>
                    <Link target="_blank" href="/public">
                        <div className="container">
                            <div className="">
                                <div className="mx-auto mt-40 xl:mt-80">
                                    <ErrorImage/>
                                </div>
                            </div>
                        </div>
                    </Link>


                </div>
                <Link href="/public" className="text-yellow-950 font-semibold text-center mt-20 xl:mt-60 text-3xl">
                    Go to Home Page
                </Link>

            </div>


    )
}

export default ErrorPage
