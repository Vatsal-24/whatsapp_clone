export const formatTime = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  const st = hours >= 12 ? "PM" : "AM";
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${st}`;
};
