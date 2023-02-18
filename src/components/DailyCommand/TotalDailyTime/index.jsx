import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { timeFormat } from '../../../utils/genericFunction';

export default function TotalDailyTime() {
    const { winner, spinnerOn, minutesTotal, secondsTotal, teamAsistent,hoursTotal, timeLimit } = useAppContext();

    const getTotalTime = (condition) => {
        return `${condition ? 'de ' + timeFormat(teamAsistent.length * timeLimit) + ':00' : ''}`
    }

    return (
        <Typography variant='h6'>
            {
                `Tiempo total de la Daily: ${timeFormat(minutesTotal+(hoursTotal*60))}:${timeFormat(secondsTotal)} ${getTotalTime(!winner && !spinnerOn)}`
            }
        </Typography>
    )
}
