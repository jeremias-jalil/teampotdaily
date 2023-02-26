import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { timeFormat } from '../../../utils/genericFunction.js';

export default function WinnerTimer() {
  const { winner, loser, minutes, seconds } = useAppContext();

  return (
    <>
      {winner && (
        <>
          <Typography variant='h2'>
            Time {timeFormat(minutes)}:{timeFormat(seconds)}
          </Typography>
        </>
      )}
      {loser.l1 && (
        <Box>
          <Typography variant='h6'>
            Should be the facilitator for the next daily:
          </Typography>
          <Typography variant='h4'>
            1°: <b>{loser.l1?.name}</b>
          </Typography>
          <Typography variant='h4'>
            2°: <b>{loser.l2?.name}</b>
          </Typography>
        </Box>
      )}
    </>
  );
}
