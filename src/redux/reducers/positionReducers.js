const defaultState = {
  positions: [],
  loading: false,
  error: null,
};

const FETCH_POSITIONS = "FETCH_POSITIONS";
const FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS_SUCCESS";
const FETCH_POSITIONS_ERROR = "FETCH_POSITIONS_ERROR";

export const postionReducers = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POSITIONS:
      return { ...state, loading: true };
    case FETCH_POSITIONS_SUCCESS:
      return { ...state, loading: false, positions: action.payload.positions };
    case FETCH_POSITIONS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export const fetchPositionsAction = () => ({ type: FETCH_POSITIONS });
export const fetchPositionsSuccessAction = (payload) => ({
  type: FETCH_POSITIONS_SUCCESS,
  payload,
});
export const fetchPositionsErrorAction = (payload) => ({
  type: FETCH_POSITIONS_ERROR,
  payload,
});
