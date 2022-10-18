import { SAMPLE_ERROR, ADD_FAVORITE, SET_LIST_CHARACTERS, REMOVE_FAVORITE } from "../types";
//import HomeServices from '../../modules/home/home.services'

export const setListCharacters = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LIST_CHARACTERS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};

export const addFavorite = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_FAVORITE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};

export const removeFavorite = (id) => async (dispatch) => {
  try {
    dispatch({
      type: REMOVE_FAVORITE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};

