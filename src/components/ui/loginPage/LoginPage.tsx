/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";
import logo from "../../../../public/logo/icon_ukrops.png";
import Link from "next/link";
import {useDisclosure} from "@nextui-org/react";

const LoginPage:React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {onOpen} = useDisclosure();
    return (
        <section className=" p-4 md:p-20 bg-center bg-no-repeat bg-[url('/loginPage/busyDay.jpg')] bg-cyan-800 bg-blend-multiply">
            <div className='flex flex-row items-center justify-center mb-4'>
                <Link href="/home"
                      className="flex mb-6 text-3xl md:text-6xl font-semibold text-gray-400">
                    <Image className="w-10 h-10 md:w-16 md:h-16 mr-4"
                           src={logo} alt="logo"/>
                    UKROPS Medical
                </Link>
            </div>

            <form className="max-w-sm px-8 py-8 border border-slate-300 rounded-xl mx-auto">
                <div className="mb-5">
                    <h1 className="text-xl font-bold pb-8 leading-tight tracking-tight text-slate-300 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Your
                        email</label>
                    <input type="email" id="email"
                           className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           placeholder="your.name@email.com" required/>
                </div>
                <div className="relative mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your
                        password</label>
                    <input type={showPassword ? "text" : "password"}
                           id="password"
                           placeholder="••••••••"
                           className="bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                           required/>
                    <button className="absolute text-slate-400 right-4 top-12 transform -translate-y-1/2"
                            onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FiEyeOff/> : <FiEye/>}
                    </button>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value=""
                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                               required
                        />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-900 ">Remember
                        me</label>
                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
                <p className="mt-4 text-sm font-light text-gray-300">
                    {`Don't have an account yet?`}
                    <Link href="/signup"
                          className="font-medium ml-2 text-primary-600 hover:underline dark:text-primary-500"
                          type='button'
                          onClick={onOpen}
                    >Sign up here
                    </Link>
                </p>
            </form>
        </section>

    );
};

export default LoginPage;

