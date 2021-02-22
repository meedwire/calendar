export const weekDays = [...Array(7)].map((_, i) => {
  const date = new Date().getDate();
  return new Date(new Date().setDate(date + i))
    .toLocaleDateString('pt-BR', { weekday: 'long' })
    .split('')[0]
    .toUpperCase();
});

function getId(): string {
  const S4 = () => {
    return ((1 + Math.random()) * 0x10000 || 0).toString(16).substring(1);
  };
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}

export interface DaysMonth {
  id: string;
  day: string;
  month: string;
}

export function getDaysMonth(month: number, year: number): DaysMonth[] {
  const date = new Date(year, month, 1);
  const datePrevMonth = new Date(year, month - 1, 1);

  let initWeekDay = new Date(date).getDay();

  let totalDaysMonth = 0;
  let totalDaysPrevMonth = 0;

  const prevDaysMonth = [];

  while (datePrevMonth.getMonth() === month) {
    totalDaysPrevMonth++;
    datePrevMonth.setDate(datePrevMonth.getDate() + 1);
  }

  while (date.getMonth() === month) {
    totalDaysMonth++;
    date.setDate(date.getDate() + 1);
  }

  let endWeekDay =
    Math.abs(Number(new Date(year, month, totalDaysMonth).getDay()) - 7) - 1;

  const days: DaysMonth[] = [
    ...Array(totalDaysMonth + initWeekDay + endWeekDay),
  ].map((_, i) =>
    i >= initWeekDay && i <= totalDaysMonth
      ? { id: getId(), day: i.toString(), month: month.toString() }
      : { id: getId(), day: '', month: '' }
  );

  return days;
}

// days.push(new Date(date).toLocaleString('pt-BR', { day: 'numeric' }));
//
