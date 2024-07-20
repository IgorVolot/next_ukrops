/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

'use client'
import React from 'react';
import {Modal, ModalBody, ModalContent, ModalHeader} from "@nextui-org/react";
import Link from "next/link";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const AppModal: React.FC<ModalProps> = ({isOpen, onClose}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior={"outside"}
            className="bg-white my-auto mx-auto rounded-xl"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader
                            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Sign in to our platform
                            </h3>
                        </ModalHeader>

                        <ModalBody className="p-4 md:p-5">
                            <form className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        email</label>
                                    <input type="email" name="email" id="email"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="name@company.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        password</label>
                                    <input type="password" name="password" id="password"
                                           placeholder="••••••••"
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           required/>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value=""
                                                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                   required/>
                                        </div>
                                        <label htmlFor="remember"
                                               className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                            me</label>
                                    </div>
                                    <a href="#"
                                       className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                        Password?</a>
                                </div>
                                <button type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                                    to your account
                                </button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered?
                                    <Link href="/signup"
                                          className="text-blue-700 hover:underline dark:text-blue-500"
                                    >Create account
                                    </Link>
                                </div>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AppModal;
