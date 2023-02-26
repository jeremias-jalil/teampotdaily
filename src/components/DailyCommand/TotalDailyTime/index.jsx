import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { timeFormat } from '../../../utils/genericFunction';

export default function TotalDailyTime() {
  const {
    winner,
    settings,
    spinnerOn,
    minutesTotal,
    secondsTotal,
    teamAsistent,
    hoursTotal,
  } = useAppContext();

  const getTotalTime = (condition) => {
    return `${
      condition
        ? 'from ' + timeFormat(teamAsistent.length * settings.timeLimit) + ':00'
        : ''
    }`;
  };

  return (
    <Typography variant='h6'>
      {`Daily total time: ${timeFormat(
        minutesTotal + hoursTotal * 60
      )}:${timeFormat(secondsTotal)} ${getTotalTime(!winner && !spinnerOn)}`}
    </Typography>
  );
}
