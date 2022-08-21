import axios from "axios";
import {
  fetchUsersAction,
  fetchUsersSuccessAction,
  fetchUsersErrorAction,
  fetchUsersPageAction,
  fetchUsersPageNullAction,
} from "../reducers/userReducers";

// export const fetchUsers = () => {
//   return (dispatch) => {
//     fetch(
//       "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
//     )
//       .then((response) => response.json())
//       .then((json) => dispatch(addManyUsersAction(json)));
//   };
// };

export const fetchUsers = (page = 1, btnHide) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUsersAction);
      const response = await axios.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      );
      // dispatch(fetchUsersSuccessAction(response.data));
      if (response.data.links.next_url !== null) {
        dispatch(fetchUsersSuccessAction(response.data));
      } else {
        dispatch(fetchUsersPageNullAction(btnHide));
      }
    } catch (e) {
      dispatch(
        fetchUsersErrorAction("Произошла ошибка при загрузке пользователей")
      );
    }
  };
};
export function setUsersPage(page) {
  return fetchUsersPageAction(page);
}

// export function setUsersPage(page=1) {
//   return async (dispatch) => {
//     try {
//       dispatch(fetchUsersAction);
//       const response = await axios.get(
//         `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
//       );

//       dispatch(fetchUsersSuccessAction(response.data));

//       // dispatch(fetchUsersSuccessAction(response.data));
//       console.log(response1.data.links.next_url);
//     } catch (e) {
//       dispatch(
//         fetchUsersErrorAction("Произошла ошибка при загрузке пользователей")
//       );
//     }
//   };
// }
