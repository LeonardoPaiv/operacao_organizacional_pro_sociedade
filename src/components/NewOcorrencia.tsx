import Add from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewOcorrencia = () => {
  const nav = useNavigate();
  return (
    <Button
      onClick={() => nav("/ocorrencia/cadastrar")}
      fullWidth
      color="warning"
      size="large"
      variant="contained"
      sx={{ margin: "0 0 1em 0" }}
    >
      <Add />
    </Button>
  );
};

export default NewOcorrencia;
