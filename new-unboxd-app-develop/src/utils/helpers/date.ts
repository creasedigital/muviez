export const getDaysInMonth = (month: number, year: number) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push({
      text: new Date(date).getDate(),
      value: new Date(date).getDate(),
    });
    date.setDate(date.getDate() + 1);
  }
  return days;
};

export const months = [
  { text: 'January', value: 1 },
  { text: 'February', value: 2 },
  { text: 'March', value: 3 },
  { text: 'April', value: 4 },
  { text: 'May', value: 5 },
  { text: 'June', value: 6 },
  { text: 'July', value: 7 },
  { text: 'August', value: 8 },
  { text: 'September', value: 9 },
  { text: 'October', value: 10 },
  { text: 'November', value: 11 },
  { text: 'December', value: 12 },
];

export const generateYears = (startDate: Date, range: number) => {
  let years: Array<{ text: number; value: number }> = [];
  const startYear = startDate.getFullYear();
  for (let i = startYear; i < startYear + range; i++) {
    years.push({ text: i, value: i });
  }

  return years;
};

export const splitDate = (date: Date) => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

const date = {
  getDaysInMonth,
  months,
  generateYears,
  splitDate
};

export default date;
