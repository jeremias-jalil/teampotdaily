import Button from '@mui/material/Button';
import { useAppContext } from '../../context/context';
import { timeFormat, timeLimitStepFunction } from '../../utils/genericFunction.ts';
import DailyListperson from '../DailyListPerson/DailyListperson';
import TeapotGif from '../TeapotGif/TeapotGif';

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


  timeLimitStepFunction(minutes, seconds, timeLimit, updateTimeLimitStep)

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
      <h1 style={{ fontSize: '3rem', margin: "0px" }}>{winner}</h1>
      <TeapotGif />

      {teamAsistent.length > 1 &&
        <>
          {winner && <>
            <div style={{ fontSize: '3rem' }}>
              Time <span>{timeFormat(minutes)}</span>:<span>{timeFormat(seconds)}</span>
            </div>
          </>}
          <DailyListperson />
          <h2>{"Total Daily Time: " + timeFormat(minutesTotal) + ":" + timeFormat(secondsTotal)}</h2>
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