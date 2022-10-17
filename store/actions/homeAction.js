import { SAMPLE_ERROR, SET_FAVORITES, SET_LIST_CHARACTERS } from "../types";
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

export const setFavorites = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_FAVORITES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};

