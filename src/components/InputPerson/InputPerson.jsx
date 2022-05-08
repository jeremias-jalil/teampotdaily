import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

import { useAppContext } from '../../context/context'

const marks = [
  {
    value: 0,
    label: '0 min',
  },
  {
    value: 5,
    label: '5 min',
  },
  {
    value: 10,
    label: '10 min',
  },
];

export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');
  const { timeLimit, cont, pauseFlag,
    updateTimeLimit, updateTeamAsistent, resetAll, spinnerOn } = useAppContext()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const localTeam = localStorage.getItem("teampot")
    if (localTeam) setValue(localTeam)
  }, [])

  return (
    <>
      <h1 style={{ fontSize: "3rem" }}>{"Your team"}</h1>

      <TextField
        multiline
        rows={9}
        defaultValue="Default Value"
        value={value}
        onChange={handleChange}
        variant="filled"
        style={{ width: "80%" }}
        disabled={cont !== 0}
      />
      <div>
        <h3>{`${value.split('\n').length} team asistent`}</h3>
        <h2>{"Set daily individual time: " + timeLimit + " min"}</h2>
        <Slider
          defaultValue={2}
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={0}
          max={10}
          value={timeLimit}
          onChange={(e) => updateTimeLimit(e.target.value)}
          disabled={cont >= 1}
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