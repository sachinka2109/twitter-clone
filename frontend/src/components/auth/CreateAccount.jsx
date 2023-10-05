import { Grid, Typography, TextField ,Link as Linky} from "@mui/material";
import styled from "@emotion/styled";
import React from "react";

const CreateAccount = () => {
  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#333639", // Change the border color to yellow
      },
      "&:hover fieldset": {
        borderColor: "#333639",
      },
    },
    "& label.MuiInputLabel-root": {
      color: "rgb(113, 118, 123)", // Change the label color to yellow
    },
  });
  return (
    <Grid container sx={{ color: "white", backgroundColor: "black" }}>
      <Typography variant="h5">Create your account</Typography>
      <CustomTextField
        variant="outlined"
        label="Name"
        inputProps={{ style: { color: "white" } }}
        id="name"
        fullWidth
      />
      <CustomTextField
        variant="outlined"
        label="Phone"
        inputProps={{ style: { color: "white" } }}
        id="phone"
        fullWidth
      />
      {/* <CustomTextField
        variant="outlined"
        label="Phone,email,or username"
        inputProps={{ style: { color: "white" } }}
        id="email"
        fullWidth
      /> */}
      <Linky
        to="/forgotpassword"
        sx={{ color: "rgb(29, 155, 240)",textAlign:'end' }}
      >
        Use phone instead?
      </Linky>
    </Grid>
  );
};

export default CreateAccount;
