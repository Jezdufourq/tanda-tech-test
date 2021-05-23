import { GET_CURRENT_SHIFTS, CREATE_SHIFT } from "../actions/types";

const initialState = {
  currentShifts: [],
};
export default function Shifts(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_SHIFTS:
      return {
        ...state,
        currentShifts: payload,
      };
    case CREATE_SHIFT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
