import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/context';
import teapot from '../../../images/teapot.gif';
import { teapotTimeLimit } from "../../../utils/constants";

export default function TeapotGif() {

    const { timeLimitStep, winner, teamAsistent } = useAppContext();
    const [imgSrc, setImgSrc] = useState(teapot)

    useEffect(() => {
        winner ? setImgSrc(teapotTimeLimit[timeLimitStep]) : setImgSrc(teapot)
    }, [timeLimitStep, winner])

    return (
        <Box>
            <Typography variant='h2'>{winner}</Typography>
            {teamAsistent.length > 1 ? <img src={imgSrc} alt="teapot" style={{ width: "70%" }} /> :
                <>
                    <img src={teapot} alt="teapot" style={{ width: "90%" }} />
                    <Typography variant='h6'>Add your team members name, set the time limit and press "Set Daily" to let the meeting begin</Typography>
                </>}
        </Box>
    )
}
