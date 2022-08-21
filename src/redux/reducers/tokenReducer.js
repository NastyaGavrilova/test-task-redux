const defaultState = {
  token: "",
  status: null,
};
const FETCH_TOKEN = "FETCH_TOKEN";
const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
const FETCH_TOKEN_ERROR = "FETCH_TOKEN_ERROR";

export const tokenReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TOKEN:
      return { ...state };
    case FETCH_TOKEN_SUCCESS:
      return { ...state, token: action.payload.token };
    case FETCH_TOKEN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const fetchTokenAction = () => ({ type: FETCH_TOKEN });
export const fetchTokenSuccessAction = (payload) => ({
  type: FETCH_TOKEN_SUCCESS,
  payload,
});
export const fetchTokenErrorAction = (payload) => ({
  type: FETCH_TOKEN_ERROR,
  payload,
});
