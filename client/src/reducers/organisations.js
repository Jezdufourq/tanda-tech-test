import {
  GET_ORGANISATIONS_SUCCESS,
  CREATE_ORGANISATION_SUCCESS,
  EDIT_ORGANISATION_SUCCESS,
  JOIN_ORGANISATION_SUCCESS,
  GET_MY_ORGANISATION_SUCCESS,
  SET_CURRENT_ORGANISATION,
} from "../actions/types";

const initialState = {
  currentOrgs: [],
  userOrgs: [],
  currentOrganisation: null,
};
export default function Organisations(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        currentOrgs: payload,
      };
    case GET_MY_ORGANISATION_SUCCESS:
      return {
        ...state,
        userOrgs: payload,
      };
    case CREATE_ORGANISATION_SUCCESS:
      return {
        ...state,
        currentOrgs: payload,
      };
    case EDIT_ORGANISATION_SUCCESS:
      return {
        ...state,
        currentOrgs: payload,
      };
    case JOIN_ORGANISATION_SUCCESS:
      return {
        ...state,
        userOrgs: payload,
      };
    case SET_CURRENT_ORGANISATION:
      return {
        ...state,
        currentOrganisation: payload,
      };
    default:
      return state;
  }
}
