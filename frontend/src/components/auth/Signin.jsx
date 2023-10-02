import {
  Stack,
  Typography,
  Button,
  Divider,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";
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
  return (
    <Stack sx={{margin:'auto',px:17,paddingBottom:6,height:485,overflowY:'scroll'}} spacing={4}>
      <Typography variant="h5" sx={{fontWeight:'bold',fontSize:30,paddingTop:'40px !important'}}>Sign in to X</Typography>
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
          >
            Next
          </CurvedButton>
          <CurvedButton
            variant="outlined"
            sx={{ borderColor: "#536471", color: "white", fontWeight: "bold" }}
          >
            Forgot password?
          </CurvedButton>
          <Typography variant="body1" sx={{color:"rgb(113, 118, 123)",marginTop:'40px !important'}}>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Signin;
