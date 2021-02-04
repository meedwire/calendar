import { TypePayloadMonth } from '../../Actions/Months';
import { TypeMonths } from '../../Actions/Types';

const INITIAL_STATE = {};

type TypeActions = TypeMonths;

type TypePayload = TypePayloadMonth;

interface Actions extends TypePayload {
  type: TypeActions;
}

export function months(state = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case TypeMonths.GET_MONTHS:
      return { ...state, months: action.payload.months };

    default:
      return state;
  }
}
