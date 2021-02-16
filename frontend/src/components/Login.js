import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
  return (
    <div>
      <form>
        <TextField required label="Email" name="email" fullWidth></TextField>
        <TextField
          required
          label="Password"
          name="password"
          fullWidth
        ></TextField>
        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
