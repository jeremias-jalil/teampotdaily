import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { timeFormat } from '../../../utils/genericFunction';

export default function TotalDailyTime() {
    const { winner, spinnerOn, minutesTotal, secondsTotal, teamAsistent, timeLimit } = useAppContext();

    const getTotalTime = (condition) => {
        return `${condition ? 'of ' + timeFormat(teamAsistent.length * timeLimit) + ':00' : ''}`
    }

    return (
        <Typography variant='h6'>
            {
                `Total Daily Time: ${timeFormat(minutesTotal)}:${timeFormat(secondsTotal)} ${getTotalTime(!winner && !spinnerOn)}`
            }
        </Typography>
    )
}
