import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formOcorrencia } from "../../Models/IOcorrencia";
import OcorrenciaForm from "../../components/OcorrenciaForm";
import { blobToBase64, fileToBlob } from "../../helpers/arquivo";
import { criarOcorrencia } from "../../service/ocorrencia";

const Cadastrar = () => {
  const nav = useNavigate();
  const [file, setFile] = useState<File[]>([]);

  const formOcorrencia = useFormik<formOcorrencia>({
    initialValues: {
      cep: "",
      descricao: "",
      nome: "",
      tipo: "",
    },
    onSubmit: async (data) => {
      const files: any = []
      file.forEach(async f => {
        const blob = await fileToBlob(f);
        files.push(await blobToBase64(blob))
      })
      setTimeout(async() => {
        const res = await criarOcorrencia({
          ...data,
          files: files,
        });
        if (res.data === 'arquivos criados' || res.data === "Sem arquivos") {
          nav('/')
        } else {
          alert(res.data)
        }
      }, 500)
    },
  });

  return (
    <>
      <OcorrenciaForm
        form={formOcorrencia}
        formulario={formOcorrencia.values}
        file={file}
        setFile={setFile}
      />
      <form onSubmit={formOcorrencia.handleSubmit} className="w-full">
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
            Enviar
          </Button>
        </div>
      </form>
    </>
  );
};

export default Cadastrar;
