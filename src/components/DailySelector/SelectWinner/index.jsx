import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useAppContext } from '../../../context/context';
import { getTextColor } from "../../../utils/genericFunction";


export default function SelectWinner({ setNewWinner, newWinner }) {
    const { cont, isRunning, spinnerOn, selectList, handleSpinClick } = useAppContext()


    const handleNewWinner = (event) => {
        handleSpinClick(event.target.value)
        setNewWinner(event.target.value);
    };
    return (
        <FormControl fullWidth sx={{ m: 1, width: 300 }} disabled={isRunning || spinnerOn}>
            <InputLabel id="select-label">Team member</InputLabel>
            <Select
                labelId="select-label"
                id="select"
                value={newWinner}
                label="Team member"
                onChange={handleNewWinner}
            >{selectList.map((item, index) => {
                return <MenuItem key={index} value={index}>{item.option}</MenuItem>
            }
            )}
            </Select>
            <FormHelperText style={{ color: getTextColor((!isRunning || spinnerOn) && cont) }}>
                If necessary, after pausing, you can select the next one here.
            </FormHelperText>
        </FormControl>
    )
}
