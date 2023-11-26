import LoginIcon from "@mui/icons-material/Login";
import { Button, TextField } from "@mui/material";
import LoginTemplate from "./LoginTemplate";

const Login = () => {
  return (
    <LoginTemplate>
      <h1 className="text-4xl mb-2">Login</h1>
      <p className="text-justify mb-2">
        Prepare-se para manter o mundo em moviment! Faça login para cuidar dos
        espaços públicos conosco
      </p>
      <TextField margin="dense" id="outlined-basic" label="CPF" fullWidth variant="outlined" />
      <TextField margin="dense" id="outlined-basic" label="Senha" type="password" fullWidth variant="outlined" />
      <Button variant="contained" color="warning" fullWidth aria-label="login">
        <LoginIcon />
      </Button>
    </LoginTemplate>
  );
};

export default Login;
