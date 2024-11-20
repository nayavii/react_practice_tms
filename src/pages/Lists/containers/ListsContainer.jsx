import React, { useCallback, useState } from "react";
import { Layout } from "../components/Layout";
import { v4 as uuid } from "uuid";

import { random } from "lodash";
import { calcAverage } from "../../../utils/calcAverage";

export const ListsContainer = () => {
  const [users, setUsers] = useState([]);

  const averageUserAge = calcAverage(users);

  const handleAddUser = useCallback(() => {
    const newUser = {
      id: uuid(),
      name: "Anya",
      age: random(10, 75, false),
      image:
        "https://images.unsplash.com/photo-1511553677255-ba939e5537e0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isBlocked: false,
    };

    setUsers((state) => [...state, newUser]);
  }, []);



  const handleRemoveUser = useCallback((id) => {
    setUsers((state) => {
      //делаем копию
      const usersCopy = [...state];

      //находим индекс юзера, которого хотим удалить
      const userIndexToRemove = usersCopy.findIndex((user) => user.id === id);

      //удаляем с помощью splice
      usersCopy.splice(userIndexToRemove, 1);

      return usersCopy;
    });
  }, []);

  const handleBlockUser = useCallback((id) => {
    setUsers((state) => {
      //делаем копию
      const usersCopy = structuredClone(state);

      //найдем самого user
      const foundUser = usersCopy.find((user) => user.id === id);

      //меняем значение поля
      foundUser.isBlocked = true;

      return usersCopy;
    });
  }, []);

  return (
    <Layout
      users={users}
      handleAddUser={handleAddUser}
      handleRemoveUser={handleRemoveUser}
      handleBlockUser={handleBlockUser}
      averageUserAge={averageUserAge}
    />
  );
};
