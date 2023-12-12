import LoginIcon from "@mui/icons-material/Login";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../Models/ILogin";
import { login } from '../../service/user';
import LoginTemplate from "./LoginTemplate";

const Login = () => {
  const nav = useNavigate()
  const formLogin = useFormik<ILogin>({
    initialValues: {
      email: "",
      senha: "",
    },
    onSubmit: (data) => {
      const logar = async () => {
        const resp = await login(data)
        console.log(resp)
        if(resp === "usuario encontrado") {
          nav('/')
        } else {
          window.alert('login ou senha incorretos')
        }
      }
      logar()
    },
  });

  return (
    <LoginTemplate>
      <form onSubmit={formLogin.handleSubmit}>
        <h1 className="text-4xl mb-2">Login</h1>
        <p className="text-justify mb-2">
          Prepare-se para manter o mundo em moviment! Faça login para cuidar dos
          espaços públicos conosco
        </p>
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Email"
          fullWidth
          variant="standard"
          value={formLogin.values.email}
          onChange={(e) => formLogin.setFieldValue('email', e.target.value)}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Senha"
          type="password"
          fullWidth
          variant="standard"
          value={formLogin.values.senha}
          onChange={(e) => formLogin.setFieldValue('senha', e.target.value)}
        />
        <Button
          variant="contained"
          color="warning"
          fullWidth
          aria-label="login"
          type="submit"
        >
          <LoginIcon />
        </Button>
      </form>
    </LoginTemplate>
  );
};

export default Login;
