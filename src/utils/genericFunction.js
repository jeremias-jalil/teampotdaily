export const timeFormat = (time) => {
  return time < 10 ? "0" + time : time.toString();
};

export const timeLimitStepFunction = (
  minutes,
  seconds,
  timeLimit,
  updateTimeLimitStep
) => {
  const timeLimitSec = timeLimit * 60;
  const timeSec = minutes * 60 + seconds;
  if (timeSec < 3) return updateTimeLimitStep(1);
  if (timeSec === timeLimitSec * 0.5) return updateTimeLimitStep(2);
  if (timeSec === timeLimitSec * 0.7) return updateTimeLimitStep(3);
  if (timeSec === timeLimitSec) return updateTimeLimitStep(4);
  if (timeSec === timeLimitSec + 30) return updateTimeLimitStep(5);
  if (timeSec === timeLimitSec + 60) return updateTimeLimitStep(6);
  if (timeSec === timeLimitSec + 120) return updateTimeLimitStep(7);
};

export const getTextColor = (condition) => {
  return condition ? "rgba(0, 0, 0, 0.38)" : "white"
}