import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { getTextColor } from "../../../utils/genericFunction";

export default function SetButton({ teamMembers }) {
    const { cont, spinnerOn, isRunning, updateTeamAsistent, resetAll } = useAppContext()

    return (
        <>
            {cont === 0 ?
                <Button
                    variant="contained"
                    onClick={() => updateTeamAsistent(teamMembers)}
                    disabled={spinnerOn || (!isRunning && cont !== 0)}
                    fullWidth
                >
                    Set daily
                </Button> :
                <Box style={{width:"100%"}}>
                    <Button
                        variant="contained"
                        onClick={resetAll}
                        disabled={spinnerOn || (isRunning && cont !== 0)}
                        fullWidth
                    >
                        Reset
                    </Button>
                    <Typography style={{ color: getTextColor(!isRunning), marginTop: "5px" }}>
                        Pause the timer to reset
                    </Typography>
                </Box>
            }
        </>
    )
}
