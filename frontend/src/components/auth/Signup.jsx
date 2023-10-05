import { Stack, Typography, Button, Divider } from "@mui/material";
import React,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Google } from "../../svg/svg";
import AppleIcon from "@mui/icons-material/Apple";
import CreateAccount from "./CreateAccount";

const Signup = () => {
  const navigate = useNavigate();
  // const [createAccountToggle,setCreateAccountToggle] = useState(false);
  const CurvedButton = styled(Button)({
    borderRadius: 25,
    textTransform: "none",
    height: 38,
  });

  const onCreateAccountToggle = () => {
    // setCreateAccountToggle(!createAccountToggle)
    navigate('/create-account');
  }

  useEffect(() => {

  },[])

  return (
    // !createAccountToggle ? (
      <Stack
        sx={{
          margin: "auto",
          px: 17,
          paddingBottom: 6,
          height: 485,
        }}
        spacing={4}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", fontSize: 30, paddingTop: "20px !important" }}
        >
          Join X today
        </Typography>
        <Stack direction={"column"} spacing={3} width={300}>
          <Stack direction={"column"} spacing={3}>
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
                marginTop: "10px !important",
              }}
            >
              <Typography sx={{ color: "#e7e9ea" }}>or</Typography>
            </Divider>
            <CurvedButton
              variant="contained"
              color="primary"
              sx={{ fontWeight: "bold", marginTop: "10px !important" }}
              id="signup"
              onClick={onCreateAccountToggle}
            >
              Create Account
            </CurvedButton>
          </Stack>
          <Typography
            variant="caption"
            sx={{
              fontSize: 12,
              color: "rgb(113, 118, 123)",
              fontWeight: "bold",
              marginTop: "10px !important",
            }}
          >
            By signing up, you agree to the{" "}
            <Link style={{ color: "#1d9bf0", textDecoration: "none" }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link style={{ color: "#1d9bf0", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            , including{" "}
            <Link style={{ color: "#1d9bf0", textDecoration: "none" }}>
              Cookie Use
            </Link>
            .
          </Typography>
          <Stack spacing={3}>
            <Typography
              variant="subtitle2"
              sx={{ color: "rgb(113, 118, 123)", marginTop: "10px !important" }}
            >
              Have an account already?{" "}
              <Link
                to="/signin"
                style={{ color: "#1d9bf0", textDecoration: "none" }}
              >
                Log in
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    // ): <CreateAccount/>
  );
};

export default Signup;
