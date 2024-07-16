/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

// import { authenticate } from '@/lib/auth/authenticate'
//
// export default function Page() {
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         await authenticate(null, formData);
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="password" name="password" placeholder="Password" required />
//             <button type="submit">Login</button>
//         </form>
//     )
// }

import React from 'react';
import LoginPage from "@/components/ui/loginPage/LoginPage";

const Login: React.FC = () => {
    return (
        <div>
            <LoginPage/>
        </div>
    );
};

export default Login;
