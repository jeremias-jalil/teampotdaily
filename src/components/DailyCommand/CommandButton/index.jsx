import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppContext } from '../../../context/context';

export default function CommandButton() {
    const { cont, winner, spinnData,
        spinnerOn, isRunning, start, pause,
        finish, handleSpinClick, startTotal } = useAppContext();

    const handleStart = () => {
        start()
    }
    const handlePause = () => {
        pause()
    }
    const handleNext = () => {
        handleSpinClick()
        if (!cont) startTotal()
    }
    const handleSkip = () => {
        handleSpinClick(true)
    }

    return (
        <Box>
            {spinnData.length > 1 ?
                <>
                    <Button variant="contained"
                        onClick={handleNext}
                        disabled={spinnerOn || (!isRunning && cont !== 0)}>
                        {cont ? "Next" : "Start"}
                    </Button>
                    {winner && <Button
                        variant="contained"
                        onClick={handleSkip}
                        disabled={spinnerOn || (!isRunning && cont !== 0)}>
                        Skip
                    </Button>}
                </>
                :
                winner &&
                <Button
                    variant="contained"
                    onClick={finish}
                    disabled={spinnerOn || (!isRunning && cont !== 0)}>
                    Finish
                </Button>
            }
            {winner &&
                <Button
                    variant="contained"
                    onClick={!isRunning ? handleStart : handlePause}
                    disabled={spinnerOn}>
                    {!isRunning ? "Continue" : "Pause"}
                </Button>

            }
        </Box >
    )
}
