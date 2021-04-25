import * as types from "../types";

const initialState = {
  users: [],
};

export default function personsList(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PERSONS:
      return { ...state, users: [...action.payload] };

    default:
      return state;
  }
}
