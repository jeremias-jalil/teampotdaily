import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import teapot from '../../images/teapot.gif';
import { teapotTimeLimit } from "../../utils/constants";

export default function TeapotGif() {

    const { timeLimitStep, winner, teamAsistent } = useAppContext();
    const [imgSrc, setImgSrc] = useState(teapot)

    useEffect(() => {
        winner ? setImgSrc(teapotTimeLimit[timeLimitStep]) : setImgSrc(teapot)
    }, [timeLimitStep, winner])

    return (
        <div>
            {teamAsistent.length > 1 ? <img src={imgSrc} alt="teapot" style={{ width: "70%" }} /> :
                <>
                    <img src={teapot} alt="teapot" style={{ width: "90%" }} />
                    <h2>Add your team members name, set the time limit and press "Set Daily" to let the meeting begin</h2>
                </>}
        </div>
    )
}
