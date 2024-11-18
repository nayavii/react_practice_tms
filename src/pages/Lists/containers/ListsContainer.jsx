import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { v4 as uuid } from "uuid";

export const ListsContainer = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = () => {
    const newUser = {
      id: uuid(),
      name: "Anya",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1511553677255-ba939e5537e0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isBlocked: false,
    };

    setUsers([...users, newUser]);
  };

  console.log(users);

  const handleRemoveUser = (id) => {
    //делаем копию
    const usersCopy = [...users];

    //находим индекс юзера, которого хотим удалить
    const userIndexToRemove = usersCopy.findIndex((user) => user.id === id);

    //удаляем с помощью splice
    usersCopy.splice(userIndexToRemove, 1);

    //добавляем копию без юзера в state
    setUsers(usersCopy);

    console.log(userIndexToRemove);
  };

  const handleBlockUser = (id) => {
    //делаем копию
    const usersCopy = [...users];

    //найдем самого user
    const foundUser = usersCopy.find((user) => user.id === id);

    //меняем значение поля
    foundUser.isBlocked = true;

    setUsers(usersCopy);
  };

  return (
    <Layout
      users={users}
      handleAddUser={handleAddUser}
      handleRemoveUser={handleRemoveUser}
      handleBlockUser={handleBlockUser}
    />
  );
};
