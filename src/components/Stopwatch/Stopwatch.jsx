import { useAppContext } from '../../context/context'
import { useState } from 'react'
import Button from '@mui/material/Button';
import DailyListperson from '../DailyListPerson/DailyListperson'
import TeapotGif from '../TeapotGif/TeapotGif';
import GenericFunctions from '../../utils/GenericFunction.ts';

export default function Stopwatch() {
  const {
    winner,
    minutes,
    seconds,
    timeLimit,
    start,
    spinnData,
    teamAsistent,
    cont,
    pause,
    pauseFlag,
    handleSpinClick,
    updateTimeLimitStep,
    secondsTotal,
    minutesTotal,
    startTotal,
    finish,
    spinnerOn,
    setPauseFlag
  } = useAppContext();


  const timeLimitStepFunction = (minutes, seconds, timeLimit) => {
    const timeLimitSec = timeLimit * 60
    const timeSec = minutes * 60 + seconds
    if (timeSec === 0) return updateTimeLimitStep(1)
    if (timeSec === timeLimitSec * 0.5) return updateTimeLimitStep(2)
    if (timeSec === timeLimitSec * 0.7) return updateTimeLimitStep(3)
    if (timeSec === timeLimitSec) return updateTimeLimitStep(4)
    if (timeSec === timeLimitSec + 30) return updateTimeLimitStep(5)
    if (timeSec === timeLimitSec + 60) return updateTimeLimitStep(6)
  }

  timeLimitStepFunction(minutes, seconds, timeLimit)



  const handleStart = () => {
    setPauseFlag(false)
    start()
  }
  const handlePause = () => {
    setPauseFlag(true)
    pause()
  }

  const handleNext = () => {
    handleSpinClick()
    if (!cont) startTotal()
  }


  return (
    <>
      <TeapotGif />
      {teamAsistent.length > 1 &&
        <>
          {winner && <>
            <div style={{ fontSize: '80px', color: "white" }}>
              <span>{winner}</span>
            </div>
            <div style={{ fontSize: '70px' }}>
              Time <span>{GenericFunctions.timeFormat(minutes)}</span>:<span>{GenericFunctions.timeFormat(seconds)}</span>
            </div>
          </>}
            <DailyListperson />
          <h2>{"Total Daily Time: " + GenericFunctions.timeFormat(minutesTotal) + ":" + GenericFunctions.timeFormat(secondsTotal)}</h2>
          <div>
            {spinnData.length > 1 ?
              <Button variant="contained" onClick={handleNext} disabled={spinnerOn || pauseFlag}>{cont ? "Next" : "Start"} </Button>
              :
              winner && <Button variant="contained" onClick={finish} disabled={spinnerOn || pauseFlag}>Finish</Button>
            }
            {winner && <Button variant="contained" onClick={pauseFlag ? handleStart : handlePause} disabled={spinnerOn}>{pauseFlag ? "Continue" : "Pause"}</Button>}
          </div>
        </>
      }
    </>

  );
}