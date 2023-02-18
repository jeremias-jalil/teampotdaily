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

export function getRandomInt(index) {       
  var byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);

  var range = index + 1;
  var max_range = 256;
  if (byteArray[0] >= Math.floor(max_range / range) * range)
      return getRandomInt(index);
  return (byteArray[0] % range);
}

export function getSpinnTextColor(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if(result){
    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    if ( r * 0.299 + g * 0.587 + b * 0.114 > 186 ) {
      return 'black';
    } else {
      return 'white';
    }
  }
  return 'black';
}
