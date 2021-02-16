import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { registerUser } from "../utils/api";

const initialState = {
  email: "",
  password: "",
  username: "",
  repeat_password: "",
};

const SignUp = () => {
  const [signupval, setsignUpVal] = useState(initialState);

  const handleChange = (ev) => {
    ev.persist();
    setsignUpVal((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
    console.log(signupval);
  };

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const resp = await registerUser(signupval);
    } catch (err) {
      console.log(err);
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
          label="Username"
          name="username"
          onChange={handleChange}
          fullWidth
        ></TextField>
        <TextField
          required
          label="Password"
          type="password"
          name="password"
          fullWidth
          onChange={handleChange}
        ></TextField>
        <TextField
          required
          type="password"
          label="Repeat Password"
          name="repeat_password"
          fullWidth
          onChange={handleChange}
        ></TextField>

        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
