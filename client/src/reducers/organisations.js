import {
  GET_ORGANISATIONS_SUCCESS,
  CREATE_ORGANISATION_SUCCESS,
  EDIT_ORGANISATION_SUCCESS,
} from "../actions/types";

const initialState = {
  currentOrgs: [],
};
export default function Organisations(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORGANISATIONS_SUCCESS:
      return {
        ...state,
        currentOrgs: payload,
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
    default:
      return state;
  }
}
