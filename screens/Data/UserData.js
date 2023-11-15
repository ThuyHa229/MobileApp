const UsersData = [
  {
    id: 1,
    username: "Dianne Russell",
    email: "abc@gmail.com",
    password: "123",
    location: 0,
  },
];

const addUser = (newUser) => {
  UsersData.push(newUser);
};

export { UsersData, addUser };
