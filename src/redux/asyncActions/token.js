import axios from "axios";
import {
  fetchTokenAction,
  fetchTokenErrorAction,
  fetchTokenSuccessAction,
} from "../reducers/tokenReducer";

export const fetchToken = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTokenAction);
      const response = await axios.get(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );
      dispatch(fetchTokenSuccessAction(response.data));
    } catch (e) {
      dispatch(fetchTokenErrorAction("Ошибка"));
    }
  };
};
