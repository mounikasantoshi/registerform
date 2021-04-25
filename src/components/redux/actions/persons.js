import * as types from "../types";
import axios from "axios";

const loadpersons = (persons) => ({
  type: types.LOAD_PERSONS,
  payload: persons.data,
});

export const getUsers = () => {
  return async (dispatch) => {
    let persons = await axios.get("/persons");
    dispatch(loadpersons(persons));
  };
};
