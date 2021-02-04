export function getMonths() {
  const months = [];
  return {
    type: Months.GET_MONTHS,
    payload: {
      months,
    },
  };
}
