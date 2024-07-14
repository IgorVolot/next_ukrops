/*/
 *  *
 *  *   *******************************************************************************
 *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *   *******************************************************************************
 *  *
/*/

import React from "react";
import {Progress} from "@nextui-org/react";

export default function ProgressBar() {
    return (
        <Progress isStriped={true} color={'danger'} size={"md"} aria-label="Loading..." value={60} className="max-w-[180px] h-2 rounded-xl bg-cyan-500" />
    );
}
