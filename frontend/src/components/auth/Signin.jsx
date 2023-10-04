import {
  Stack,
  Typography,
  Button,
  Divider,
  FormGroup,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Link as Linky,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Google } from "../../svg/svg";
import AppleIcon from "@mui/icons-material/Apple";

const Signin = () => {
  const CurvedButton = styled(Button)({
    borderRadius: 25,
    textTransform: "none",
    height: 38,
  });
  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#333639", // Change the border color to yellow
      },
    },
    "& label.MuiInputLabel-root": {
      color: "rgb(113, 118, 123)", // Change the label color to yellow
    },
  });

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [tab, setTab] = useState(false);

  const handleDataChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return !tab ? (
    <Stack
      sx={{
        margin: "auto",
        px: 17,
        paddingBottom: 6,
        height: 485,
        overflowY: "scroll",
      }}
      spacing={4}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontSize: 30, paddingTop: "40px !important" }}
      >
        Sign in to X
      </Typography>
      <Stack direction={"column"} spacing={3} width={300}>
        <Stack direction={"column"} spacing={2}>
          <CurvedButton
            variant="contained"
            color="primary"
            startIcon={<Google />}
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Sign up with Google
          </CurvedButton>
          <CurvedButton
            variant="contained"
            color="primary"
            startIcon={<AppleIcon />}
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Sign up with Apple
          </CurvedButton>
          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: "#2f3336",
              },
              marginTop: "5px !important",
            }}
          >
            <Typography sx={{ color: "#e7e9ea" }}>or</Typography>
          </Divider>
          <FormGroup>
            <CustomTextField
              label="Phone,email,or username"
              inputProps={{ style: { color: "white" } }}
              id="email"
              value={data.email}
              onchange={handleDataChange}
            />
          </FormGroup>
        </Stack>
        <Stack spacing={3}>
          <CurvedButton
            variant="contained"
            sx={{
              backgroundColor: "#eff3f4",
              color: "black",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "" },
            }}
            onClick={() => setTab(true)}
          >
            Next
          </CurvedButton>
          <CurvedButton
            variant="outlined"
            sx={{ borderColor: "#536471", color: "white", fontWeight: "bold" }}
          >
            Forgot password?
          </CurvedButton>
          <Typography
            variant="body1"
            sx={{ color: "rgb(113, 118, 123)", marginTop: "40px !important" }}
          >
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <Stack sx={{ px: 10, paddingBottom: 6, height: 485 }} spacing={4}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontSize: 30, paddingTop: "20px !important" }}
      >
        Enter your password
      </Typography>
      <Stack direction={"column"} spacing={15} width={400}>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <FormGroup>
            <CustomTextField
              variant="outlined"
              label="Phone,email,or username"
              inputProps={{ style: { color: "white" } }}
              id="email"
              value={data.email}
              onchange={handleDataChange}
              fullWidth
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="password" sx={{color:'rgb(113, 118, 123)'}}>Password</InputLabel>
              <OutlinedInput
                id="password"
                inputProps={{ style: { color: "white"} }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      sx={{color:"rgb(113, 118, 123)"}}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </FormGroup>

          <Linky
            component={Link}
            to="/forgotpassword"
            sx={{ color: "rgb(29, 155, 240)" }}
          >
            Forgot password?
          </Linky>
        </Stack>
        <Stack spacing={3}>
          <CurvedButton
            variant="contained"
            sx={{
              backgroundColor: "#eff3f4",
              color: "black",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "" },
              height: "50px !important",
            }}
            onClick={() => setTab(true)}
          >
            Log in
          </CurvedButton>
          <Typography
            variant="body1"
            sx={{ color: "rgb(113, 118, 123)", marginTop: "40px !important" }}
          >
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Signin;
