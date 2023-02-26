import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { getTextColor } from '../../../utils/genericFunction';

export default function SetButton({ teamMembers }) {
  const { cont, spinnerOn, isRunning, updateTeamAsistent, resetAll } =
    useAppContext();

  return (
    <>
      {cont === 0 ? (
        <Button
          id='set'
          variant='contained'
          onClick={() => updateTeamAsistent(teamMembers)}
          disabled={spinnerOn || (!isRunning && cont !== 0)}
          fullWidth
        >
          Start daily
        </Button>
      ) : (
        <Box style={{ width: '100%' }}>
          <Button
            id='reset'
            variant='contained'
            onClick={resetAll}
            disabled={spinnerOn || (isRunning && cont !== 0)}
            fullWidth
          >
            Restore
          </Button>
          <Typography
            style={{ color: getTextColor(!isRunning), marginTop: '5px' }}
          >
            Pause to restore
          </Typography>
        </Box>
      )}
    </>
  );
}
