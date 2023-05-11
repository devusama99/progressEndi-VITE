import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonCustom from "../components/ButtonCustom";
import InputFeildCustom from "../components/InputFeildCustom";

const CustomPaper = styled(Paper)(({ theme }) => ({
  //   backgroundColor: alpha(theme.palette.primary.main, 0.2),
}));

function ForgetPassword() {
  const [actionDisabled, setActionDisabled] = useState(false);
  const navigate = useNavigate();

  const forgetPassword = (e) => {
    e.preventDefault();
    setActionDisabled(true);
    setTimeout(() => {
      setActionDisabled(false);
      navigate("/updatePassword");
    }, 3000);
  };

  return (
    <div className="mh-100vh">
      <Grid container className="mh-100vh " justifyContent={"center"}>
        <Grid item xs={12} md={6} xl={8}>
          <div className="d-flex flex-column  align-items-center justify-content-center gap-3 h-100 img-overlay"></div>
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <CustomPaper className=" w-100 h-100" elevation={0}>
            <Grid
              container
              className="d-flex align-items-center justify-content-center h-100 "
            >
              <Grid
                item
                xs={10}
                className="h-100 d-flex flex-column align-items-center justify-content-center gap-4"
              >
                <div className=" w-100 p-4 py-5">
                  <Typography variant="h5" className="mb-4 fw-bold">
                    Reset Password
                  </Typography>
                  <Typography className="mb-4 fw-light " variant="body2">
                    Enter your email to reset password.
                  </Typography>
                  <form
                    onSubmit={forgetPassword}
                    className="w-100 d-flex flex-column gap-3"
                  >
                    <InputFeildCustom
                      id="email"
                      fullWidth
                      border
                      label="Email"
                    />
                    <ButtonCustom
                      size="large"
                      variant="contained"
                      label="Continue"
                      type="submit"
                      disabled={actionDisabled}
                      loading={actionDisabled ? 1 : 0}
                    />
                  </form>
                  <div className="d-flex align-items-center mt-3">
                    <Typography>Dont have an account? </Typography>
                    <Link to="/signup" className="text-decoration-none ms-1">
                      <Typography color={"primary"}>Signup</Typography>
                    </Link>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CustomPaper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ForgetPassword;
