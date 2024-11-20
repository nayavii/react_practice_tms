import React, { useEffect, useMemo } from "react";

import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import UserCard from "../../../../components/UserCard";
import { collectUserids } from "../../../../utils/collectUsersIds";

export const Layout = ({
  users,
  handleAddUser,
  handleRemoveUser,
  handleBlockUser,
  averageUserAge,
}) => {
  // const userDetails = useMemo(()=> {
  //   return {
  //     name: 'unknown user',
  //     age: 'unknown'
  //   }
  // }, [])

  const usersIds = useMemo(() => {
    collectUserids(users);
  }, [users.length]);



  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>Lists</h1>
        <h2 className={styles.title}>Average age: {averageUserAge}</h2>
        <div>{usersIds}</div>
        <button className={styles.btn} onClick={handleAddUser}>
          Add User
        </button>

        <div className={styles.users}>
          {users.map(({ id, name, age, image, isBlocked }, index) => (
            <UserCard
              key={id}
              id={id}
              name={name}
              age={age}
              image={image}
              isBlocked={isBlocked}
              onDelete={handleRemoveUser}
              onBlock={handleBlockUser}
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
