import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { useAppContext } from '../../context/context';
import { setTimeMarks } from "../../utils/constants";


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');
  const [row, setRow] = React.useState(window.innerHeight / 80);

  const { timeLimit, cont, pauseFlag,
    updateTimeLimit, updateTeamAsistent, resetAll, spinnerOn } = useAppContext()

  const handleChange = (event) => {
    console.log(event.target.value, "event.target.value")
    setValue(event.target.value);
  };

  const resizeRow = () => {
    setRow(window.innerHeight / 80)
  }

  useEffect(() => {
    const localTeam = localStorage.getItem("teampot")
    if (localTeam) setValue(localTeam)
    window.addEventListener('resize', resizeRow);
    return () => { window.removeEventListener('resize', resizeRow); }
  }, [])

  return (
    <>
      <TextField
        label="List your team members"
        multiline
        rows={row}
        value={value}
        onChange={handleChange}
        variant="filled"
        style={{ width: "80%" }}
        disabled={cont !== 0}
      />
      <div>
        <h3>{`${value.split('\n').filter((e) => e !== "").length} team asistent`}</h3>
        <h2>{"Set daily individual time: " + timeLimit + " min"}</h2>
        <Slider
          defaultValue={2}
          valueLabelDisplay="auto"
          step={1}
          marks={setTimeMarks}
          min={0}
          max={10}
          value={timeLimit}
          onChange={(e) => updateTimeLimit(e.target.value)}
          disabled={cont >= 1}
          style={{ color: "white" }}
        />
      </div>
      {cont === 0 ?
        <Button
          variant="contained"
          onClick={() => updateTeamAsistent(value)}
          disabled={spinnerOn || pauseFlag}
        >
          Set daily
        </Button> :
        <Button
          variant="contained"
          onClick={resetAll}
          disabled={spinnerOn || pauseFlag}
        >
          Reset
        </Button>}
    </>

  );
}