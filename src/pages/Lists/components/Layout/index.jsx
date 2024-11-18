import React from "react";
import { UserCard } from "../../../../components/UserCard";

import styles from "./styles.module.scss";
import PropTypes from "prop-types";

export const Layout = ({
  users,
  handleAddUser,
  handleRemoveUser,
  handleBlockUser,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Lists</h1>
        <button className={styles.btn} onClick={handleAddUser}>
          Add User
        </button>

        <div className={styles.users}>
          {users.map(({ id, name, age, image, isBlocked }, index) => (
            <UserCard
              key={id}
              name={name}
              age={age}
              image={image}
              isBlocked={isBlocked}
              onDelete={() => handleRemoveUser(id)}
              onBlock={() => handleBlockUser(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  handleAddUser: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  handleBlockUser: PropTypes.func.isRequired,
};
