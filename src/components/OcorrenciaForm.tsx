import { TextField } from "@mui/material";
import { useState } from "react";
import DragAndDrop from "./DragAndDrop";
import FormCard from "./containers/FormCard";

const OcorrenciaForm = () => {
  const [file, setFile] = useState<File[]>([]);

  return (
    <FormCard label="Ocorrência">
      <form className="grid grid-cols-2">
        <span>
          <TextField
            margin="dense"
            id="outlined-basic"
            label="CPF"
            fullWidth
            variant="standard"
            sx={{ background: "#FFFFFF" }}
          />
          <TextField
            margin="dense"
            id="outlined-basic"
            label="Endereço"
            fullWidth
            variant="standard"
            sx={{ background: "#FFFFFF" }}
          />
          <TextField
            margin="dense"
            id="outlined-basic"
            label="Tipo de Ocorrência"
            fullWidth
            variant="standard"
            sx={{ background: "#FFFFFF" }}
          />
          <textarea
            className="w-full p-3 rounded mt-1"
            rows={3}
            placeholder="Informações adicionais "
          />
        </span>
        <DragAndDrop file={file} setFile={setFile} />
      </form>
    </FormCard>
  );
};

export default OcorrenciaForm;
