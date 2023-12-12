import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { formOcorrencia, ocorrenciaBanco } from "../Models/IOcorrencia";
import { tipo_ocorrencia } from "../enums/tipoOcorrencia";
import { downloadFromBase64 } from "../helpers/arquivo";
import DragAndDrop from "./DragAndDrop";
import FormCard from "./containers/FormCard";

const OcorrenciaForm = ({
  disable,
  ocorrencia,
  formulario,
  form,
  file,
  setFile,
}: {
  disable?: boolean;
  ocorrencia?: ocorrenciaBanco;
  formulario?: formOcorrencia;
  form?: any;
  file?: File[];
  setFile?: (value: React.SetStateAction<File[]>) => void;
}) => {
  const location = useLocation();

  return (
    <FormCard label="Ocorrência">
      <div className="grid grid-cols-2">
        <span>
          {location.pathname.includes("cadastrar") && (
            <TextField
              margin="dense"
              id="outlined-basic"
              label="Nome"
              fullWidth
              variant="standard"
              sx={{ background: "#FFFFFF" }}
              disabled={disable}
              value={ocorrencia ? ocorrencia.data_ocorrencia : formulario?.nome}
              onChange={(e) => form.setFieldValue("nome", e.target.value)}
            />
          )}
          <TextField
            margin="dense"
            id="outlined-basic"
            label="Data"
            fullWidth
            variant="standard"
            sx={{ background: "#FFFFFF" }}
            disabled
            value={ocorrencia ? new Date(ocorrencia.data_ocorrencia).toLocaleString('pt-br') : ""}
          />
          <TextField
            margin="dense"
            id="outlined-basic"
            label="Endereço"
            fullWidth
            variant="standard"
            sx={{ background: "#FFFFFF" }}
            disabled={disable}
            value={ocorrencia ? ocorrencia.cep_ocorrencia : formulario?.cep}
            onChange={(e) => form.setFieldValue("cep", e.target.value)}
          />
          <FormControl margin="normal" fullWidth sx={{ background: "#FFFFFF" }}>
            <InputLabel variant="outlined">Tipo de Ocorrência</InputLabel>
            <Select
              variant="outlined"
              value={ocorrencia ? ocorrencia.tipo_ocorrencia : formulario?.tipo}
              label="Tipo de Ocorrência"
              onChange={(e) => form.setFieldValue("tipo", e.target.value)}
              disabled={disable}
            >
              <MenuItem value={tipo_ocorrencia.Lixo}>Lixo</MenuItem>
              <MenuItem value={tipo_ocorrencia["Buraco em pista"]}>Buraco em pista</MenuItem>
              <MenuItem value={tipo_ocorrencia.Assalto}>Assalto</MenuItem>
              <MenuItem value={tipo_ocorrencia["Bueiro sem proteção"]}>Bueiro sem proteção</MenuItem>
              <MenuItem value={tipo_ocorrencia["Placa danificada"]}>Placa danificada</MenuItem>
              <MenuItem value={tipo_ocorrencia["Banco danificado"]}>Banco danificado</MenuItem>
              <MenuItem value={tipo_ocorrencia["Calçada danificada"]}>Calçada danificada</MenuItem>
              <MenuItem value={tipo_ocorrencia.Outros}>Outros</MenuItem>
            </Select>
          </FormControl>
          <textarea
            className="w-full p-3 rounded mt-1"
            rows={3}
            placeholder="Informações adicionais "
            disabled={disable}
            value={
              ocorrencia ? ocorrencia.dsc_ocorrencia : formulario?.descricao
            }
            onChange={(e) => form.setFieldValue("descricao", e.target.value)}
          />
        </span>
        {!ocorrencia?.arquivo ? (
          <DragAndDrop file={file} setFile={setFile} />
        ) : (
          <div className="p-4">
            <h2 className="font-bold">Arquivos:</h2>
            {ocorrencia.arquivo.map((f, i) => (
              <p
                onClick={() =>
                  downloadFromBase64(
                    f.base_arquivo,
                    `${f.nme_arquivo}.${f.formato_arquivo}`
                  )
                }
                key={i}
                className=" px-4 cursor-pointer hover:text-orange-status"
              >{`${f.nme_arquivo}.${f.formato_arquivo}`}</p>
            ))}
          </div>
        )}
      </div>
    </FormCard>
  );
};

export default OcorrenciaForm;
