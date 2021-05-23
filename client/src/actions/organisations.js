import OrganisationsService from "../services/organisations.service";
import {
  GET_ORGANISATIONS_SUCCESS,
  CREATE_ORGANISATION_SUCCESS,
  EDIT_ORGANISATION_SUCCESS,
  JOIN_ORGANISATION_SUCCESS,
  SET_MESSAGE,
  GET_MY_ORGANISATION_SUCCESS,
  SET_CURRENT_ORGANISATION,
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

export const myOrganisations = () => (dispatch) => {
  return OrganisationsService.myOrganisations().then(
    (response) => {
      dispatch({
        type: GET_MY_ORGANISATION_SUCCESS,
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

export const editOrganisation = (id, name, hourlyRate) => (dispatch) => {
  return OrganisationsService.editOrganisation(id, name, hourlyRate).then(
    (response) => {
      dispatch({
        type: EDIT_ORGANISATION_SUCCESS,
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

export const joinOrganisation = (orgId, userId) => (dispatch) => {
  return OrganisationsService.joinOrganisation(orgId, userId).then(
    (response) => {
      dispatch({
        type: JOIN_ORGANISATION_SUCCESS,
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

export const setCurrentOrganisation = (org) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_ORGANISATION,
    payload: org,
  });
};
