import axios from "axios";
import {
  fetchPositionsAction,
  fetchPositionsErrorAction,
  fetchPositionsSuccessAction,
} from "../reducers/positionReducers";
export const fetchPositions = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPositionsAction());
      const response = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      );

      dispatch(fetchPositionsSuccessAction(response.data));
    } catch (e) {
      dispatch(
        fetchPositionsErrorAction("Произошла ошибка при загрузке должностей")
      );
    }
  };
};
