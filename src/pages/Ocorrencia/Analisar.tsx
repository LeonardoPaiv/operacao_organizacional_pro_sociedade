import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atendimentoForm, ocorrenciaBanco } from "../../Models/IOcorrencia";
import AtendimentoForm from "../../components/AtendimentoForm";
import OcorrenciaForm from "../../components/OcorrenciaForm";
import { atendimento, constultarOcorrencia } from "../../service/ocorrencia";

const Analisar = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const [ocorrencia, setOcorrencia] = useState<ocorrenciaBanco>();
  useEffect(() => {
    const buscaOcorrencia = async () => {
      if (id) {
        const data = await constultarOcorrencia(Number(id));
        setOcorrencia(data);
      }
    };
    buscaOcorrencia();
  }, []);

  const formAnalise = useFormik<atendimentoForm>({
    initialValues: {
        descricao: '',
        status: 0
    },
    onSubmit: async (data) => {
        const res = await atendimento(Number(id),data)
        if (res.data) {
            nav('/')
        }
    }
  })

  return (
    <form onSubmit={formAnalise.handleSubmit}>
      {ocorrencia && (
        <>
          <OcorrenciaForm disable ocorrencia={ocorrencia} />
          <AtendimentoForm form={formAnalise} ocorrencia={ocorrencia} />
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
        <Button
          size="large"
          variant="contained"
          color="warning"
          type="submit"
        >
          Enviar Analise
        </Button>
      </div>
    </form>
  );
};

export default Analisar;
