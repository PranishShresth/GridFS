import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { registerUser } from "../utils/api";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

const initialState = {
  email: "",
  password: "",
  username: "",
  repeat_password: "",
};
const useStyles = makeStyles((theme) => ({
  form: {
    "& > div": {
      margin: "15px 0",
    },
  },
  button: {
    margin: "15px 0",
    width: "100%",
    background: "#009688",
  },
}));
const SignUp = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
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
      console.log(resp.data);
      enqueueSnackbar("SignUp Successful", {
        variant: "success",
      });
    } catch (err) {
      enqueueSnackbar(err.message, {
        variant: "error",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
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

        <Button
          type="submit"
          variant="contained"
          className={classes.button}
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
