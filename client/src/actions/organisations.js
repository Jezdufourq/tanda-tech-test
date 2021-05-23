import OrganisationsService from "../services/organisations.service";
import {
  GET_ORGANISATIONS_SUCCESS,
  CREATE_ORGANISATION_SUCCESS,
  SET_MESSAGE,
} from "./types";

export const organisations = () => (dispatch) => {
  return OrganisationsService.organisations().then(
    (response) => {
      dispatch({
        type: GET_ORGANISATIONS_SUCCESS,
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

export const createOrganisation = (name, hourlyRate) => (dispatch) => {
  return OrganisationsService.createOrganisation(name, hourlyRate).then(
    (response) => {
      dispatch({
        type: CREATE_ORGANISATION_SUCCESS,
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
