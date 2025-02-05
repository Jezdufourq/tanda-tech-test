import ShiftsService from "../services/shifts.service";
import { GET_CURRENT_SHIFTS, CREATE_SHIFT, SET_MESSAGE } from "./types";

export const getCurrentShiftsOnOrgId = (organisationId) => (dispatch) => {
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

export const createShift = (startTime, endTime, breakLength, userId, orgId) => (
  dispatch
) => {
  return ShiftsService.createShift(
    startTime,
    endTime,
    breakLength,
    userId,
    orgId
  ).then(
    (response) => {
      dispatch({
        type: CREATE_SHIFT,
        payload: response.data,
      });
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
