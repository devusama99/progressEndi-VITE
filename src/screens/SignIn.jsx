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

function Signin() {
  const [actionDisabled, setActionDisabled] = useState(false);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setActionDisabled(true);
    setTimeout(() => {
      setActionDisabled(false);
      navigate("/app");
    }, 3000);
  };

  return (
    <div className="mh-100vh">
      <Grid container className="mh-100vh " justifyContent={"center"}>
        <Grid item xs={12} md={6}>
          <Container className="d-flex flex-column  align-items-center justify-content-center gap-3 h-100 img-overlay"></Container>
        </Grid>
        <Grid item xs={12} md={6}>
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
                    Login
                  </Typography>
                  <Typography className="mb-4 fw-light " variant="body2">
                    Enter your Email and Password to login to your existing
                    account.
                  </Typography>
                  <form
                    onSubmit={signIn}
                    className="w-100 d-flex flex-column gap-3"
                  >
                    <InputFeildCustom
                      id="email"
                      fullWidth
                      border
                      label="Email"
                    />

                    <InputFeildCustom
                      id="password"
                      type={"password"}
                      fullWidth
                      border
                      label="Password"
                    />
                    <div className="d-flex align-items-center justify-content-between">
                      <FormControlLabel
                        control={<Checkbox size="small" defaultChecked />}
                        label="Remember me"
                      />
                      <Link to={""} className="text-decoration-none">
                        <Typography color="primary">Forget password</Typography>
                      </Link>
                    </div>

                    <ButtonCustom
                      size="large"
                      variant="contained"
                      label="Sign in"
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

export default Signin;
