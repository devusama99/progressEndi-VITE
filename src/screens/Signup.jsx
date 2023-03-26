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

function Signup() {
  const [actionDisabled, setActionDisabled] = useState(false);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    setActionDisabled(true);
    setTimeout(() => {
      setActionDisabled(false);
      navigate("/");
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
                    Signup
                  </Typography>
                  <Typography className="mb-4 fw-light " variant="body2">
                    Enter the following details to create an account.
                  </Typography>
                  <form
                    onSubmit={signUp}
                    className="w-100 d-flex flex-column gap-3"
                  >
                    <InputFeildCustom
                      id="email"
                      fullWidth
                      border
                      label="Email"
                    />
                    <InputFeildCustom fullWidth border label="First Name" />
                    <InputFeildCustom fullWidth border label="Enterprise" />
                    <InputFeildCustom fullWidth border label="Telephone" />

                    <InputFeildCustom
                      id="password"
                      type={"password"}
                      fullWidth
                      border
                      label="Password"
                    />
                    <InputFeildCustom
                      id="password"
                      type={"password"}
                      fullWidth
                      border
                      label="Confirm Password"
                    />
                    <InputFeildCustom fullWidth border label="Referal Code" />
                    <div className="d-flex align-items-center justify-content-start">
                      <FormControlLabel
                        className="p-0 m-0"
                        control={<Checkbox size="small" defaultChecked />}
                        label={
                          <Typography variant="body2">
                            By clicking Sign Up, you agree to our
                          </Typography>
                        }
                      />
                      <Link to={""} className="text-decoration-none ms-1">
                        <Typography variant="body2" color="primary">
                          Terms and Conditions.
                        </Typography>
                      </Link>
                    </div>

                    <ButtonCustom
                      size="large"
                      variant="contained"
                      label="Sign Up"
                      type="submit"
                      disabled={actionDisabled}
                      loading={actionDisabled ? 1 : 0}
                    />
                  </form>
                  <div className="d-flex align-items-center mt-3">
                    <Typography>Already have an account? </Typography>
                    <Link to="/" className="text-decoration-none ms-1">
                      <Typography color={"primary"}>Signin</Typography>
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

export default Signup;
