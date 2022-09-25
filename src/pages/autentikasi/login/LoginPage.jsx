import { AccountCircle } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ModalNotif from "../../../component/modal/ModalNotif";
import { colorPrimary } from "../../../values/Colors";
import { logged, setIconInput } from "../../../values/Utilitas";
import LoginLogic from "./LoginLogic";
import "./LoginStyle.scss";

const LoginPage = () => {
  const { func, value } = LoginLogic();
  const { onError, onHelperText, onChange, disableButton } = func;
  const { input, notif, setNotif } = value;
  const { username, password } = input;

  // logged(`disableButton => ${disableButton}`);
  return (
    <>
      <Grid container>
        <Grid item md={6} className="bg1 fullHeight">
          <img src="background.jpg" height="580" />
        </Grid>
        <Grid item md={6} className="fullHeight">
          <Stack
            className="fullHeight"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="h4" color={colorPrimary}>
              Masuk
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Silahkan login terlebih dahulu
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <Stack
                spacing={3}
                sx={{
                  width: "40vw",
                  marginTop: "30px",
                }}
              >
                <TextField
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e, 0)}
                  error={onError(username)}
                  helperText={onHelperText(username)}
                  fullWidth
                  required
                  label="username"
                />
                <TextField
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e, 1)}
                  error={onError(password)}
                  helperText={onHelperText(password)}
                  fullWidth
                  required
                  label="password"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={func.onLogin}
                  disabled={disableButton()}
                >
                  Login
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* modal */}
      <ModalNotif
        open={notif.open}
        setOpen={setNotif}
        variant={notif.variant}
        message={notif.message}
      />
    </>
  );
};

export default LoginPage;
