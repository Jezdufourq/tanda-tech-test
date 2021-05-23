import ShiftsService from "../services/shifts.service";
import { GET_CURRENT_SHIFTS, CREATE_SHIFT, SET_MESSAGE } from "./types";

export const shifts = (organisationId) => (dispatch) => {
  return ShiftsService.getCurrentShiftsOnOrgId(organisationId).then(
    (response) => {
      dispatch({
        type: GET_CURRENT_SHIFTS,
        payload: response.data,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
