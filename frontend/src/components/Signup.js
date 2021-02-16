import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  return (
    <div>
      <form>
        <TextField required label="Email" name="email" fullWidth></TextField>
        <TextField
          required
          label="Username"
          name="username"
          fullWidth
        ></TextField>
        <TextField
          required
          label="Password"
          name="password"
          fullWidth
        ></TextField>
        <TextField
          required
          label="Repeat Password"
          name="repeat_password"
          fullWidth
        ></TextField>

        <Button type="submit" variant="standard">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
