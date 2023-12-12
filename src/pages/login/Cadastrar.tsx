import LoginIcon from "@mui/icons-material/Login";
import { Button, Checkbox, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../Models/IUser";
import { cadastro } from "../../service/user";
import LoginTemplate from "./LoginTemplate";

const Cadastrar = () => {

  const nav = useNavigate();

  const handleChange = (e: boolean) => {
    formCadastrar.setFieldValue('tipo', e ? '1' : '0')
  }
  const formCadastrar = useFormik<IUser>({
    initialValues: {
      nome: "",
      cpf: "",
      email: "",
      senha: "",
      senha_confirmada: "",
      tipo: "0",
    },
    onSubmit: async (data) => {
      const res = await cadastro(data);
      if (res === 'Deu bom') {
        nav('/login')
      } else {
        window.alert(res)
      }
    },
  });

  return (
    <LoginTemplate>
      <h1 className="text-4xl mb-2">Cadastre-se</h1>
      <p className="text-justify mb-2">
        Prepare-se para manter o mundo em moviment! Faça login para cuidar dos
        espaços públicos conosco
      </p>
      <form onSubmit={formCadastrar.handleSubmit}>
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Nome"
          fullWidth
          variant="standard"
          value={formCadastrar.values.nome}
          onChange={(e) => formCadastrar.setFieldValue("nome", e.target.value)}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="CPF"
          fullWidth
          variant="standard"
          value={formCadastrar.values.cpf}
          onChange={(e) => formCadastrar.setFieldValue("cpf", e.target.value)}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="E-mail"
          type="email"
          fullWidth
          variant="standard"
          value={formCadastrar.values.email}
          onChange={(e) => formCadastrar.setFieldValue("email", e.target.value)}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Senha"
          type="password"
          fullWidth
          variant="standard"
          value={formCadastrar.values.senha}
          onChange={(e) => formCadastrar.setFieldValue("senha", e.target.value)}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Confirmar Senha"
          type="password"
          fullWidth
          variant="standard"
          value={formCadastrar.values.senha_confirmada}
          onChange={(e) =>
            formCadastrar.setFieldValue("senha_confirmada", e.target.value)
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formCadastrar.values.tipo == "1"}
              value={1}
              onChange={(e) =>
                handleChange(e.target.checked)
              }
            />
          }
          label="Conta admin"
        />
        <Button
          size="large"
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

export default Cadastrar;
