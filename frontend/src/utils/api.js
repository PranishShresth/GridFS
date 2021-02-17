import axios from "axios";

const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const registerUser = async (payload) => {
  try {
    const response = await axios.post("/api/user/register", payload);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

const loginUser = async (payload) => {
  try {
    const response = await axios.post("/api/user/login", payload);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

const fetchUser = async () => {
  try {
    const response = await axios.get("/api/user/getUser", config);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};
export { registerUser, loginUser, fetchUser };
