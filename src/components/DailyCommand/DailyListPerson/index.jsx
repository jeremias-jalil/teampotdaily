import { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/context';
import { DailyListpersonCont } from '../../../style/Mui-Style';
import ChipIcon from './ChipIcon';

export default function DailyListperson() {
  const { dailyList } = useAppContext();
  const [list, setList] = useState([])
 
  useEffect(() => {
    const auxlist = dailyList?.map((e) => {
      return <ChipIcon
        timeLimitStep={e.timeLimitStep}
        name={e.name}
        minutes={e.minutes}
        seconds={e.seconds} />
    })
    setList(auxlist)
  }, [dailyList])
  
  return (
    <DailyListpersonCont id="dailyList">
      {list.map(e => e)}
    </DailyListpersonCont>
  )
}
