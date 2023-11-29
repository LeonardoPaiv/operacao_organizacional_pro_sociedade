import { TextField } from "@mui/material";
import FormCard from "./containers/FormCard";

const AtendimentoForm = () => {
  return (
    <FormCard label="Atendimento">
      <span className="grid grid-cols-3 gap-2">
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Status da Ocorrência"
          fullWidth
          variant="standard"
          sx={{ background: "#FFFFFF" }}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Data Inicio"
          fullWidth
          variant="standard"
          sx={{ background: "#FFFFFF" }}
        />
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Data Fim"
          fullWidth
          variant="standard"
          sx={{ background: "#FFFFFF" }}
        />
      </span>
        <textarea
          className="w-full p-3 rounded mt-1"
          rows={3}
          placeholder="Informações adicionais "
        />
    </FormCard>
  );
};

export default AtendimentoForm;
