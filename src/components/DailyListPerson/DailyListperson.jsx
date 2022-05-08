import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/context'


export default function DailyListperson() {
  const { dailyList } = useAppContext();
  const [list, setList] = useState("")

  const colorTimeLimit={
    1:"🟢",
    2:"🟢",
    3:"🟡",
    4:"🟠",
    5:"🟠",
    6:"🔴",
  }

  useEffect(() => {
    const auxList = dailyList?.map((e) => [colorTimeLimit[e.timeLimitStep],e.name, " ", e.minutes, ":", e.seconds, " / "].join(''))
    setList(auxList.join(''))
  }, [dailyList])


  return (
    <div>
      <h4>{list}</h4>
    </div>
  )
}
