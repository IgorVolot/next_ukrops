/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React, {useState} from 'react';
import logo from '../../../../public/logo/icon_ukrops.png'
import Image from "next/image";
import {useDisclosure} from "@nextui-org/react";
import Link from "next/link";
import {FiEye, FiEyeOff} from "react-icons/fi";

const SignupPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <section
                className="bg-center bg-no-repeat bg-[url('/registerPage/img1.jpg')] bg-cyan-800 bg-blend-multiply">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link href="/home"
                          className="flex items-center mb-6 text-5xl font-semibold text-gray-400">
                        <Image className="w-16 h-16 mr-4"
                               src={logo} alt="logo"/>
                        UKROPS Medical
                    </Link>
                    <div
                        className="w-full rounded-xl shadow border border-slate-300 md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-slate-300 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-slate-300">Your
                                        email</label>
                                    <input type="email" name="email" id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                           placeholder="name@company.com" required={true}/>
                                </div>
                                <div className="relative mb-5">
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-slate-300">Password</label>
                                    <input type={showPassword ? "text" : "password"}
                                           name="password"
                                           id="password"
                                           placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                           required/>
                                    <button
                                        className="absolute text-slate-400 right-4 top-12 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FiEyeOff/> : <FiEye/>}
                                    </button>
                                </div>
                                <div className="relative mb-5">
                                    <label htmlFor="confirm-password"
                                           className="block mb-2 text-sm font-medium text-slate-300">Confirm
                                        password</label>
                                    <input type={showPassword ? "text" : "password"}
                                           name="confirm-password"
                                           id="confirm-password"
                                           placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                           required/>
                                    <button
                                        className="absolute text-slate-400 right-4 top-12 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FiEyeOff/> : <FiEye/>}
                                    </button>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                               required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-slate-300">
                                            I accept the
                                            <Link
                                                className="font-medium text-primary-600 hover:underline"
                                                href="/term"
                                            > Terms and Conditions
                                            </Link>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Create an account
                                </button>
                                {/*<button type="submit"*/}
                                {/*        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create*/}
                                {/*    an account*/}
                                {/*</button>*/}
                                <p className="text-sm font-light text-slate-300">
                                    Already have an account?
                                    <Link href="/login"
                                          className="font-medium ml-2 text-primary-600 hover:underline"
                                          type="button"
                                          onClick={onOpen}
                                    >Login here
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignupPage;
