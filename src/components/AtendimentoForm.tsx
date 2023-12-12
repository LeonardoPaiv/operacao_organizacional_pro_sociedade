import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { formAtendimento, ocorrenciaBanco } from "../Models/IOcorrencia";
import { status } from "../enums/status";
import FormCard from "./containers/FormCard";

const AtendimentoForm = ({
  disable,
  ocorrencia,
  formulario,
  form,
}: {
  disable?: boolean;
  ocorrencia?: ocorrenciaBanco;
  formulario?: formAtendimento;
  form?: any;
}) => {
  return (
    <FormCard label="Atendimento">
      <span className="grid grid-cols-3 gap-2">
        <FormControl margin="normal" fullWidth sx={{ background: "#FFFFFF" }}>
          <InputLabel variant="outlined">Tipo de Ocorrência</InputLabel>
          <Select
            variant="outlined"
            value={
              !form && ocorrencia
                ? status[ocorrencia.status_ocorrencia]
                : formulario?.status
            }
            label="Status da Ocorrência"
            onChange={(e) => form.setFieldValue("status", e.target.value)}
            disabled={disable}
          >
            <MenuItem value={status.Criado}>Criado</MenuItem>
            <MenuItem value={status["Em Atendimento"]}>Em Atendimento</MenuItem>
            <MenuItem value={status.Finalizado}>Finalizado</MenuItem>
            <MenuItem value={status.Inativado}>Inativado</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          label="Data Inicio"
          fullWidth
          variant="outlined"
          sx={{ background: "#FFFFFF" }}
          disabled
          value={ocorrencia && ocorrencia.data_inicio_atendimento  ? new Date(ocorrencia.data_inicio_atendimento).toLocaleString('pt-br') : ""}
        />
        <TextField
          margin="normal"
          label="Data Fim"
          fullWidth
          variant="outlined"
          sx={{ background: "#FFFFFF" }}
          disabled
          value={ocorrencia && ocorrencia.data_final_atendimento ?  new Date(ocorrencia.data_final_atendimento).toLocaleString('pt-br') : ""}
        />
      </span>
      <textarea
        className="w-full p-3 rounded mt-1"
        rows={3}
        placeholder="Informações adicionais"
        disabled={disable}
        value={
          !form && ocorrencia
            ? ocorrencia.descricao_atendimento
            : form.values.descricao
        }
        onChange={(e) => form.setFieldValue("descricao", e.target.value)}
      />
    </FormCard>
  );
};

export default AtendimentoForm;
