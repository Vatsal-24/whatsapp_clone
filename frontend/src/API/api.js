import axios from "axios";

const url = "http://localhost:8000";
export const addNewUser = async (user) => {
  try {
    await axios.post(`${url}/user`, user);
  } catch (err) {
    console.log("Failed to add a new user", err);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${url}/user`);
    return response.data.user;
  } catch (err) {
    console.log("Failed to fetch users", err);
  }
};
