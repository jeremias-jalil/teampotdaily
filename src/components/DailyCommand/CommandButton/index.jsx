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
                    <Button
                        id={cont ? "next" : "start"}
                        variant="contained"
                        onClick={handleNext}
                        disabled={spinnerOn || (!isRunning && cont !== 0)}>
                        {cont ? "Siguiente" : "Comenzar"}
                    </Button>
                    {winner && <Button
                        id="skip"
                        variant="contained"
                        onClick={handleSkip}
                        disabled={spinnerOn || (!isRunning && cont !== 0)}>
                        Omitir
                    </Button>}
                </>
                :
                winner &&
                <>
                        <Button
                        id="finish"
                        variant="contained"
                        onClick={()=>finish(false)}
                        disabled={spinnerOn || (!isRunning && cont !== 0)}>
                        Finalizar
                    </Button>
                    <Button
                        id="skip"
                        variant="contained"
                        onClick={()=>finish(true)}
                        disabled={spinnerOn || (!isRunning && cont !== 0)}>
                        Omitir y finalizar
                    </Button>
                </>
            }
            {winner &&
                <Button
                    variant="contained"
                    onClick={!isRunning ? handleStart : handlePause}
                    disabled={spinnerOn}>
                    {isRunning || spinnerOn ? "Pausa" : "Continuar"}
                </Button>

            }
        </Box >
    )
}
