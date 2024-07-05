/*
 * /
 *  *  *
 *  *  *   *******************************************************************************
 *  *  *   *  Copyright (c) Author: Igor Volotovskyi * 2024 * CZ IT-Design Studio GmbH. *
 *  *  *   *******************************************************************************
 *  *  *
 * /
 */

'use strict'
import React, {useEffect, useState} from 'react'
import {a, useTrail} from '@react-spring/web'
import styles from './Hero.module.scss'

interface TrailProps {
    open: boolean;
    children: (item: unknown, index: number) => any;
}

const Trail: React.FC<TrailProps> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 200, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div>
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className={styles.trailsText} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </div>
    )
}

export default function TitleTrail() {
    const [open, setOpen] = useState(false)
    // toggle open state every time the component is rendered
    useEffect(() => {
        setOpen(state => !state)
    }, [])
    return (
        <div className={styles.container}>
            <Trail open={open}>
                <span>Supporting</span>
                <span>Ukrainian</span>
                <span>Medics</span>
            </Trail>
        </div>
    )
}
