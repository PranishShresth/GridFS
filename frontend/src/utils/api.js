import axios from "axios";

const registerUser = async (payload) => {
  try {
    const response = await axios.post("/api/user/register", payload);
    return response;
  } catch (err) {
    console.log(err.message);
  }
};

export { registerUser };
