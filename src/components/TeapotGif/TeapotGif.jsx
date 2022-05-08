import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/context'

import teapot from '../../images/teapot.gif'
import teapot1inf from '../../images/teapot1inf.gif'
import teapot2inf from '../../images/teapot2inf.gif'
import teapot3inf from '../../images/teapot3inf.gif'
import teapot4inf from '../../images/teapot4inf.gif'
import teapot5inf from '../../images/teapot5inf.gif'
import teapot6inf from '../../images/teapot6inf.gif'


export default function TeapotGif() {

    const { timeLimitStep, winner, teamAsistent } = useAppContext();
    const [imgSrc, setImgSrc] = useState(teapot)

    const teapotTimeLimit = {
        1: teapot1inf,
        2: teapot2inf,
        3: teapot3inf,
        4: teapot4inf,
        5: teapot5inf,
        6: teapot6inf
    }
    useEffect(() => {
        winner ? setImgSrc(teapotTimeLimit[timeLimitStep]) : setImgSrc(teapot)
    }, [timeLimitStep, winner])

    return (
        <div>
            {teamAsistent.length > 1 ? <img src={imgSrc} alt="teapot" style={{ width: "60%" }} /> :
                <>
                <img src={teapot} alt="teapot" style={{ width: "90%" }} />
                <h2>Add your team members name, set the time limit and press "Set Daily" to let the meeting begin</h2>
                </>}
        </div>
    )
}
