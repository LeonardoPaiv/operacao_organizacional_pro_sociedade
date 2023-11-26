import LoginIcon from "@mui/icons-material/Login";
import { Button, Checkbox, TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from "@mui/material/FormGroup";
import LoginTemplate from "./LoginTemplate";

const Cadastrar = () => {
  return (
    <LoginTemplate>
      <h1 className="text-4xl mb-2">Cadastre-se</h1>
      <p className="text-justify mb-2">
        Prepare-se para manter o mundo em moviment! Faça login para cuidar dos
        espaços públicos conosco
      </p>
      <TextField margin="dense" id="outlined-basic" label="CPF" fullWidth variant="outlined" />
      <TextField margin="dense" id="outlined-basic" label="E-mail" type="email" fullWidth variant="outlined" />
      <TextField margin="dense" id="outlined-basic" label="Senha" type="password" fullWidth variant="outlined" />
      <TextField margin="dense" id="outlined-basic" label="Confirmar Senha" type="password" fullWidth variant="outlined" />
      <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Conta admin" />
      </FormGroup>
      <Button size="large" variant="contained" color="warning" fullWidth aria-label="login">
        <LoginIcon />
      </Button>
    </LoginTemplate>
  );
};

export default Cadastrar;
