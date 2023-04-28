import axios from "axios";

const url = "http://localhost:8000";

// ? Users

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

// ? Conversation

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation`, data);
  } catch (err) {
    console.log("Failed to set conversation", err);
  }
};

export const getConversation = async (data) => {
  try {
    let response = await axios.get(`${url}/conversation`, {
      params: { data: data },
    });
    return response.data;
  } catch (err) {
    console.log("Failed to get conversation", err);
  }
};

// ? Message
export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message`, data);
  } catch (err) {
    console.log("Failed to create new message", err);
  }
};

export const getMessage = async (id) => {
  try {
    const response = await axios.get(`${url}/message/${id}`);
    return response.data;
  } catch (err) {
    console.log("Failed to create new message", err);
  }
};

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${url}/file`, data);
    return response.data;
  } catch (err) {
    console.log("Failed to upload file", err);
  }
};
