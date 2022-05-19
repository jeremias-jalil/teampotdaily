

export const timeFormat = (time: number): string => {
    return time < 10 ? "0" + time : time.toString()
}


export const timeLimitStepFunction = (minutes:number, seconds:number, timeLimit:number, updateTimeLimitStep:Function) => {
    const timeLimitSec = timeLimit * 60
    const timeSec = minutes * 60 + seconds
    if (timeSec < 3) return updateTimeLimitStep(1)
    if (timeSec === timeLimitSec * 0.5) return updateTimeLimitStep(2)
    if (timeSec === timeLimitSec * 0.7) return updateTimeLimitStep(3)
    if (timeSec === timeLimitSec) return updateTimeLimitStep(4)
    if (timeSec === timeLimitSec + 30) return updateTimeLimitStep(5)
    if (timeSec === timeLimitSec + 60) return updateTimeLimitStep(6)
}