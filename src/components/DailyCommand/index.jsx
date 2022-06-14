import { useAppContext } from '../../context/context';
import { timeLimitStepFunction } from '../../utils/genericFunction.js';
import CommandButton from './CommandButton';
import DailyListperson from './DailyListPerson';
import TeapotGif from './TeapotGif';
import TotalDailyTime from './TotalDailyTime';
import WinnerTimer from './WinnerTimer';

export default function DailyCommand() {
  const {
    minutes,
    seconds,
    timeLimit,
    teamAsistent,
    updateTimeLimitStep,
  } = useAppContext();

  timeLimitStepFunction(minutes, seconds, timeLimit, updateTimeLimitStep)

  return (
    <>
      <TeapotGif />
      {teamAsistent.length > 1 &&
        <>
          <WinnerTimer />
          <DailyListperson />
          <TotalDailyTime />
          <CommandButton />
        </>
      }
    </>

  );
}