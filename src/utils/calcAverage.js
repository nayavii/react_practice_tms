export const calcAverage = (users) => {
  const usersAnount = users.length;

  if (usersAnount === 0) {
    return 0;
  }

  const averageAge =
    users.reduce((result, { age }) => result + age, 0) / usersAnount;

  return Math.round(averageAge);
};
