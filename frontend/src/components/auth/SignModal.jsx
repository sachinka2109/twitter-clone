import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TwitterLogo } from "../../svg/svg";
import CreateAccount from "./CreateAccount";
import { useLocation } from "react-router-dom";

const LogoHeader = ({ onClose, location }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: location.pathname.includes('/create-account') ? "flex-start" : "center",
      alignItems: "center",
      width: "100%",
      position: "relative",
      my: 2,
    }}
  >
    <IconButton
      aria-label=""
      onClick={onClose}
      sx={{ position: "absolute", left: 0 }}
    >
      <CloseIcon style={{ color: "white" }} />
    </IconButton>
    {location.pathname.includes('/create-account') ? (
      <Typography variant="h6" sx={{ color: "white",px:8 }}>
        Step 1 of 5
      </Typography>
    ) : (
      <Box>
        <TwitterLogo width={30} />
      </Box>
    )}
  </Box>
);

const SignModal = ({ open, onClose, children }) => {
  const location = useLocation();
  return (
    <Container
      maxWidth="sm"
      sx={{
        background: "black",
        color: "white",
        position: "fixed",
        zIndex: 2,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 553,
        overflow: "hidden",
      }}
    >
      <LogoHeader onClose={onClose} location={location}/>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          borderRadius: 2,
        }}
      >
        <Box>{children}</Box>
      </Box>
    </Container>
  );
};

export default SignModal;
