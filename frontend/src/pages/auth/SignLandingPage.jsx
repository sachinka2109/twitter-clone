import React, { useState } from "react";
import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import { Google, TwitterLogo } from "../../svg/svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useStyles } from "./SignLandingPage.styles";
import { SignModal } from "../../components";
import { createPortal } from "react-dom";
import { Outlet } from "react-router-dom";

const CurvedButton = styled(Button)({
  borderRadius: 25,
  textTransform: "none",
  height: 38,
});

const SignLandingPage = () => {
  const modalRoot = document.getElementById("modal-root");
  const classes = useStyles();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    navigate("../");
    setIsModalOpen(false);
  };

  const handleSign = (e) => {
    e.target.id === "signin" ? navigate("/signin") : navigate("/signup");
    openModal();
  };
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{
        backgroundColor: "black",
        color: "white",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <TwitterLogo width={{ xs: 45, md: 338 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          p: 1,
          paddingLeft: 7,
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Stack direction={"column"} sx={{ p: 3 }}>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <TwitterLogo width={45} />
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "4.5rem",
              my: 5,
              whiteSpace: { xs: "normal", md: "nowrap" },
            }}
          >
            Happening now
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
            Join today.
          </Typography>
          <Stack direction={"column"} spacing={7} width={300}>
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
              <CurvedButton
                variant="contained"
                color="primary"
                sx={{ fontWeight: "bold", marginTop: "5px !important" }}
                id="signup"
                onClick={handleSign}
              >
                Create Account
              </CurvedButton>
              <Typography
                variant="caption"
                sx={{
                  fontSize: 9,
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
            </Stack>
            <Stack spacing={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Already have an account?
              </Typography>
              <CurvedButton
                variant="outlined"
                sx={{
                  fontWeight: "bold",
                  borderColor: "#536471",
                  "&:hover": { borderColor: "#536471" },
                }}
                fullWidth
                id="signin"
                onClick={handleSign}
              >
                Sign in
              </CurvedButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "center",
          color: "#71767b",
          fontSize: 14,
          width: "100%",
          flexWrap: "wrap",
          px: 2,
          py: 1,
        }}
        gap={2}
      >
        <Link className={classes.footerLinks}>About</Link>
        <Link className={classes.footerLinks}>Help Center</Link>
        <Link className={classes.footerLinks}>Terms of Service</Link>
        <Link className={classes.footerLinks}>Privacy Policy</Link>
        <Link className={classes.footerLinks}>Cookie Policy</Link>
        <Link className={classes.footerLinks}>Accessibility</Link>
        <Link className={classes.footerLinks}>Ads info</Link>
        <Link className={classes.footerLinks}>Blog</Link>
        <Link className={classes.footerLinks}>Status</Link>
        <Link className={classes.footerLinks}>Careers</Link>
        <Link className={classes.footerLinks}>Brand Resources</Link>
        <Link className={classes.footerLinks}>Advertising</Link>
        <Link className={classes.footerLinks}>Marketing</Link>
        <Link className={classes.footerLinks}>X for Business</Link>
        <Link className={classes.footerLinks}>Developers</Link>
        <Link className={classes.footerLinks}>Directory</Link>
        <Link className={classes.footerLinks}>Settings</Link>© 2023 X Corp.
      </Stack>
      {isModalOpen &&
        createPortal(
          <SignModal open={isModalOpen} onClose={closeModal}>
            <Outlet />
          </SignModal>,
          modalRoot
        )}
    </Stack>
  );
};

export default SignLandingPage;
