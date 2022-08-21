const defaultState = {
  users: [],
  loading: false,
  error: null,
  page: 1,
};

const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
const SET_USERS_PAGE = "SET_USERS_PAGE";
const SET_USERS_PAGE_NULL = "SET_USERS_PAGE_NULL";

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload.users };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        page: null,
      };
    case SET_USERS_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_USERS_PAGE_NULL:
      return {
        ...state,
        error: action.payload,
        loading: false,
        page: null,
      };
    default:
      return state;
  }
};
export const fetchUsersAction = () => ({ type: FETCH_USERS });
export const fetchUsersSuccessAction = (payload) => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});
export const fetchUsersErrorAction = (payload) => ({
  type: FETCH_USERS_ERROR,
  payload,
});
export const fetchUsersPageAction = (payload) => ({
  type: SET_USERS_PAGE,
  payload,
});
export const fetchUsersPageNullAction = (payload) => ({
  type: SET_USERS_PAGE_NULL,
  payload,
});
