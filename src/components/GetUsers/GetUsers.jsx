import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setUsersPage } from "../../redux/asyncActions/users";
import "./_getUsers.scss";
import UserCard from "./UserCard/UserCard";
import Button from "../../elements/Button/Button";
const GetUsers = () => {
  const { users, error, loading, page } = useSelector((state) => state.users);
  console.log(users);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(page));
    setCount(count + 1);
  }, [page]);
  if (loading) return <h1 className="c-get-users__title"> Идет загрузка...</h1>;
  if (error) return <h1 className="c-get-users__title">{error}</h1>;
  return (
    <section className="c-get-users">
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
          <Button
            children={"Show More"}
            onClick={() => dispatch(setUsersPage(count))}
          />
        </div>
      </div>
    </section>
  );
};

export default GetUsers;
