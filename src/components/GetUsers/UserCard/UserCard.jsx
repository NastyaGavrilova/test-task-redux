import React from "react";
import "./_userCard.scss";
const UserCard = (props) => {
  const { name, email, phone, position, photo } = props;
  return (
    <div className="c-user-card">
      <div className="c-user-card__wrapper">
        <div className="c-user-card__header">
          <img
            className="c-user-card__photo"
            src={photo}
            alt={name + " photo"}
          ></img>
        </div>
        <p className="c-user-card__name">{name}</p>
        <p className="c-user-card__position">{position}</p>
        <p className="c-user-card__email">{email}</p>
        <p className="c-user-card__phone">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
