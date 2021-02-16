import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  return (
    <div>
      <form>
        <TextField required label="Email" name="email"></TextField>
        <TextField required label="Username" name="username"></TextField>
        <TextField required label="Password" name="password"></TextField>
        <TextField
          required
          label="Repeat Password"
          name="repeat_password"
        ></TextField>

        <Button type="submit" variant="standard">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
