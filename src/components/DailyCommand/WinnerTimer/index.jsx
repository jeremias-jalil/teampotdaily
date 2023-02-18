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
                    Tiempo {timeFormat(minutes)}:{timeFormat(seconds)}
                </Typography>
            </>}
            {loser.l1 &&
                <Box>
                    <Typography variant='h6'>Debería ser el facilitador de la próxima daily</Typography>
                    <Typography variant='h4'>Titular: <b>{loser.l1?.name}</b></Typography>
                    <Typography variant='h4'>Suplente: <b>{loser.l2?.name}</b></Typography>
               </Box>
            }
        </>
    )
}
