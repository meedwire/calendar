import { TypeMonths } from '../index';

export interface TypePayloadMonth {
  payload: {
    months: {
      label: string;
      indexMonth: number;
    }[];
  };
}

interface TypeActionMonth extends TypePayloadMonth {
  type: TypeMonths;
}

export function getMonths(): TypeActionMonth {
  const months = [...Array(12)].map((_, i) => ({
    label: new Date(new Date().setMonth(i)).toLocaleDateString('pt', {
      month: 'long',
    }),
    indexMonth: i,
  }));

  return {
    type: TypeMonths.GET_MONTHS,
    payload: {
      months,
    },
  };
}
