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

const Header:React.FC = () => {
    return (
        <header>
            <div
                className="mt-20 p-8 text-center text-lg text-yellow-800 bg-yellow-50 border-b border-yellow-300 dark:bg-gray-800 dark:text-yellow-300"
                role="alert">
                <span className="font-medium">Warning!</span>
                <p>
                    🚧 This site is still under development. Some services do
                    not work. We apologize for the inconvenience. 🚧
                </p>

            </div>
        </header>
    );
};

export default Header;
