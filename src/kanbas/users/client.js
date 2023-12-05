import axios from "axios";

// export const USERS_API = `http://localhost:4000/api/users`;
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({
  withCredentials: true,
});

export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const signup = async (credentials) => {
  const response = await request.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};


export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  console.log("in acc ", response);
  return response.data;
};

export const updateUser = async (user) => {
  console.log("*********************user, ", user);
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await request.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};

// export const signin = async (credentials) => {
//   const response = await axios.post( `${USERS_API}/signin`, credentials );
//   return response.data;
// };

// export const signup = async (credentials) => {
//   const response = await axios.post(
//     `${USERS_API}/signup`, credentials);
//   return response.data;
// };

// export const signout = async () => {
//   const response = await axios.post(`${USERS_API}/signout`);
//   return response.data;
// };


// export const account = async () => {
//   const response = await axios.post(`${USERS_API}/account`);
//   console.log("in acc ", response);
//   return response.data;
// };

// export const updateUser = async (user) => {
//   console.log("*********************user, ", user);
//   const response = await axios.put(`${USERS_API}/${user._id}`, user);
//   return response.data;
// };

// export const findAllUsers = async () => {
//   const response = await axios.get(`${USERS_API}`);
//   return response.data;
// };

// export const createUser = async (user) => {
//   const response = await axios.post(`${USERS_API}`, user);
//   return response.data;
// };

// export const findUserById = async (id) => {
//   const response = await axios.get(`${USERS_API}/${id}`);
//   return response.data;
// };

// export const deleteUser = async (user) => {
//   const response = await axios.delete(
//     `${USERS_API}/${user._id}`);
//   return response.data;
// };

