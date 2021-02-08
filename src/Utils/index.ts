export const WeekDays = [...Array(7)].map((_, i) => {
  const date = new Date().getDate();
  return new Date(new Date().setDate(date + (i + 1))).toLocaleDateString('pt-BR', { weekday: 'long' }).split('')[0].toUpperCase();
})
;

export function getDaysMonth(month: number, year: number): string[] {
  const date = new Date(year, month, 1);
  const days: string[] = [];

  while (date.getMonth() === month) {
    days.push(new Date(date).toLocaleString('pt-BR', { day: 'numeric' }));
    date.setDate(date.getDate() + 1);
  }

  return days;
}
