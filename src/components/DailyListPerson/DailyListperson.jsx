import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/context';
import { iconTimeLimit, colorTimeLimitReference } from "../../utils/constants";
import { timeFormat } from '../../utils/genericFunction.ts';
import Chip from '@mui/material/Chip';

export default function DailyListperson() {
  const { dailyList } = useAppContext();
  const [list, setList] = useState([])

  const DailyListpersonCont = styled(Box)(() => ({
    marginLeft: "5%",
    marginRight: "5%",
    div:{
      margin: "2.5px",
    }
  }))

  useEffect(() => {
    const auxlist = dailyList?.map((e) => <Chip icon={iconTimeLimit[e.timeLimitStep]} label={e.name + " " + timeFormat(e.minutes) + ":" + timeFormat(e.seconds)} color={colorTimeLimitReference[e.timeLimitStep]} size='small'/>)
    setList(auxlist)
  }, [dailyList])


  return (
    <DailyListpersonCont>
      {list.map(e => e)}
    </DailyListpersonCont>
  )
}
