import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AtendimentoForm from "../../components/AtendimentoForm";
import OcorrenciaForm from "../../components/OcorrenciaForm";

const Cadastrar = () => {

    const nav = useNavigate();

  return (
    <>
      <OcorrenciaForm />
      <AtendimentoForm />
      <div className="flex w-full justify-between py-3">
        <Button size="large" variant="contained" color="inherit" onClick={() => nav('/')}>
          Voltar
        </Button>
        <Button size="large" variant="contained" color="warning">
          Enviar
        </Button>
      </div>
    </>
  );
};

export default Cadastrar;
