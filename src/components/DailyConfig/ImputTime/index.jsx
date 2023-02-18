import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { setTimeMarks } from "../../../utils/constants";
import { getTextColor } from "../../../utils/genericFunction";
import { useEffect } from 'react';

export default function ImputTime() {
    const { cont, timeLimit, updateTimeLimit } = useAppContext()

    useEffect(() => {
        if (localStorage.getItem("settings")) {
            const settings = JSON.parse(localStorage.getItem("settings"))
            updateTimeLimit(settings.timeLimit)
        }
    }, [])

    return (
        <FormControl fullWidth sx={{ m: 1, width: "80%" }} disabled={cont >= 1}>
            <Typography id="input-slider" gutterBottom style={{ color: getTextColor(cont >= 1) }}>
                Tiempo de daily por integrante
            </Typography>
            <Slider
                aria-labelledby="input-slider"
                defaultValue={2}
                valueLabelDisplay="auto"
                step={1}
                marks={setTimeMarks}
                min={0}
                max={10}
                value={timeLimit}
                onChange={(e) => updateTimeLimit(e.target.value)}
                disabled={cont >= 1}
                style={{ color: getTextColor(cont >= 1) }}
            />
        </FormControl>
    )
}
