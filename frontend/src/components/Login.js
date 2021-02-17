import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { loginUser } from "../utils/api";
import { useSnackbar } from "notistack";

const initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const [loginval, setLoginVal] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (ev) => {
    ev.preventDefault();
    setLoginVal((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const resp = await loginUser(loginval);
      if (resp.status === 200) {
        enqueueSnackbar("Login Successful", {
          variant: "success",
        });
      }
    } catch (err) {
      enqueueSnackbar("Incorrect Credentials", {
        variant: "error",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Email"
          name="email"
          fullWidth
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          label="Password"
          name="password"
          fullWidth
          type="password"
          onChange={handleChange}
        ></TextField>
        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
