// /*
//  * /
//  *  *  *  *
//  *  *  *  *   *******************************************************************************
//  *  *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
//  *  *  *  *   *******************************************************************************
//  *  *  *  *
//  *  /
//  */
//
//
// import { checkUserRole } from '@/lib/auth'
//
// export default function Layout({
//                                    user,
//                                    admin,
//                                }: {
//     user: React.ReactNode
//     admin: React.ReactNode
// }) {
//     const role = checkUserRole()
//     return <>{role === 'admin' ? admin : user}</>
// }