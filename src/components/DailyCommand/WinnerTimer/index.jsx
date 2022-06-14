import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { timeFormat } from '../../../utils/genericFunction.js';

export default function WinnerTimer() {
    const { winner, loser, minutes, seconds } = useAppContext();

    return (
        <>
            {winner && <>
                <Typography variant='h2'>
                    Time {timeFormat(minutes)}:{timeFormat(seconds)}
                </Typography>
            </>}
            {loser.name &&
                <Box>
                    <Typography variant='h6'>Should be the facilitator in the next daily:</Typography>
                    <Typography variant='h4'>{loser.name}</Typography>
                </Box>
            }
        </>
    )
}
