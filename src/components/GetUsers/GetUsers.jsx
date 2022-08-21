import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setUsersPage } from "../../redux/asyncActions/users";
import "./_getUsers.scss";
import UserCard from "./UserCard/UserCard";
import Button from "../../elements/Button/Button";
const GetUsers = () => {
  const { users, error, loading, page } = useSelector((state) => state.users);
  const [count, setCount] = useState(1);
  const [hideBtn, setHideBtn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(page, hideBtn));
    console.log(page + 1);
    setCount(count + 1);
    if (page === null) {
      setHideBtn(!hideBtn);
    }
  }, [page]);
  // if (loading) return <h1 className="c-get-users__title"> Идет загрузка...</h1>;
  // if (error) return <h1 className="c-get-users__title">{error}</h1>;
  return (
    <section className="c-get-users" id="get-users">
      <div className="c-get-users__wrapper">
        <div className="c-get-users__header">
          <h3 className="c-get-users__title">Working with GET request</h3>
        </div>
        <div className="c-get-users__users">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              photo={user.photo}
              position={user.position}
              phone={user.phone}
              email={user.email}
            />
          ))}
        </div>
        <div className="c-get-users__btn">
          <button
            className={
              hideBtn === false ? "c-get-users__btnn" : "c-get-users__hide-btn"
            }
            // className="c-get-users__btnn"
            children={"Show More"}
            onClick={() => dispatch(setUsersPage(count))}
          />
        </div>
      </div>
    </section>
  );
};

export default GetUsers;
