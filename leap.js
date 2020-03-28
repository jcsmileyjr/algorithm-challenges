export const isLeap = year => {
  const noReminder = 0;
  if (year % 100 === noReminder && year % 400 !== noReminder) {
    return false;
  } else if (year % 4 === noReminder) {
    return true;
  } else {
    return false;
  }
};
