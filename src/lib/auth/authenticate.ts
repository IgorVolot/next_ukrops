// /*/
//  *  *
//  *  *   *******************************************************************************
//  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
//  *  *   *******************************************************************************
//  *  *
// /*/
//
// async function signIn(credentials: string, formData: FormData) {
//     //Here you should implement the actual signIn functionality suitable for your application
//     //Below is a placeholder code, replace it with actual code
//
//     return new Promise((resolve, reject) => {
//         // Test the credentials and formData against your Auth system
//         let isValidCredentials = true; // Replace this with actual validation
//         if (isValidCredentials) {
//             resolve({status: 'success'});
//         } else {
//             reject({status: 'error', type: 'CredentialsSignin'});
//         }
//     });
// }
//
//
// export async function authenticate(_currentState: unknown, formData: FormData) {
//     try {
//         await signIn('credentials', formData);
//     } catch (error) {
//         if (error.type) {
//             switch (error.type) {
//                 case 'CredentialsSignin':
//                     throw new Error('Invalid credentials.');
//                 default:
//                     throw new Error('Something went wrong.');
//             }
//         } else {
//             // Always provide a default case in your switch block
//             // If it's not another kind of error not defined in switch case, then throw the original error
//             throw error;
//         }
//     }
// }