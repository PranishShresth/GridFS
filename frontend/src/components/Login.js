import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = () => {
  return (
    <div>
      <form>
        <TextField required label="Email" name="email"></TextField>
        <TextField required label="Password" name="password"></TextField>
        <Button type="submit" variant="standard">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
