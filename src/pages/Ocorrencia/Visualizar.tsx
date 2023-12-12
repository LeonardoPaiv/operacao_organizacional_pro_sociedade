import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ocorrenciaBanco } from "../../Models/IOcorrencia";
import AtendimentoForm from "../../components/AtendimentoForm";
import OcorrenciaForm from "../../components/OcorrenciaForm";
import { constultarOcorrencia } from "../../service/ocorrencia";
import { admin as ad } from "../../service/user";

const Visualizar = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [admin, setAdmin] = useState(0);

  const [ocorrencia, setOcorrencia] = useState<ocorrenciaBanco>();
  useEffect(() => {
    const buscaOcorrencia = async () => {
      if (id) {
        const data = await constultarOcorrencia(Number(id));
        setOcorrencia(data);
      }
    };
    const buscaPerfil = async () => {
      const perfil = await ad();
      setAdmin(perfil);
    };
    buscaOcorrencia();
    buscaPerfil();
  }, []);

  return (
    <>
      {ocorrencia && (
        <>
          <OcorrenciaForm disable ocorrencia={ocorrencia} />
          <AtendimentoForm disable ocorrencia={ocorrencia} />
        </>
      )}
      <div className="flex w-full justify-between py-3">
        <Button
          size="large"
          variant="contained"
          color="inherit"
          onClick={() => nav("/")}
        >
          Voltar
        </Button>
        {admin === 1 && (
          <Button
            size="large"
            variant="contained"
            color="warning"
            onClick={() => nav("/ocorrencia/analisar/" + id)}
          >
            Analisar
          </Button>
        )}
      </div>
    </>
  );
};

export default Visualizar;
