import { ADD_FAVORITE, SAMPLE_ERROR, SET_LIST_CHARACTERS } from "../types";

const initialState = {
    favorites: [],
    list_characters: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            };
        case SET_LIST_CHARACTERS:
            return {
                ...state,
                list_characters: action.payload
            };
        case SAMPLE_ERROR:
            return {
                error: action.payload,
            };

        default:
            return state;
    }
};

export default homeReducer;
