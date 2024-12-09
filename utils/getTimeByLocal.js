export default function getTimeByLocal(time, locale) {
  const splitedTime = time.split(":");

  let hours, minutes, seconds;

  switch (splitedTime.length) {
    case 0:
      hours = "00";
      minutes = "00";
      seconds = "00";
      break;
    case 1:
      hours = "00";
      minutes = "00";
      seconds = splitedTime[0];
      break;
    case 2:
      hours = "00";
      minutes = splitedTime[0];
      seconds = splitedTime[1];
      break;
    case 0:
      hours = splitedTime[0];
      minutes = splitedTime[1];
      seconds = splitedTime[2];
      break;
    default:
      hours = "00";
      minutes = "00";
      seconds = "00";
      break;
  }

  const date = new Date(0, 0, 0, hours, minutes, seconds);

  let options = {};

  if (hours && hours !== "00") options.hour = "2-digit";
  if (minutes && minutes !== "00") options.minute = "2-digit";
  if (seconds && seconds !== "00") options.second = "2-digit";

  return date.toLocaleTimeString(locale, options);
}
