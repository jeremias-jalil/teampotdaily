import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useAppContext } from '../../../context/context';
import { setTimeMarks } from "../../../utils/constants";
import { getTextColor } from "../../../utils/genericFunction";

export default function ImputTime() {
    const { cont, timeLimit, updateTimeLimit } = useAppContext()

    return (
        <FormControl fullWidth sx={{ m: 1, width: 300 }} disabled={cont >= 1}>

            <Typography id="input-slider" gutterBottom style={{ color: getTextColor(cont >= 1) }}>
                Set daily individual time:
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
