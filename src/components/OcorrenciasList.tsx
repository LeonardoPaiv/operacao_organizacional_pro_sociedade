import DocumentScanner from "@mui/icons-material/DocumentScanner";
import { Button } from "@mui/material";
import { IOcorrencia } from "../Models/IOcorrencia";
import OcorrenciaListItem from "./OcorrenciaListItem";

const resp: IOcorrencia[] = [
  {
    nome: "Buraco",
    data: "30/06/2000",
    endereco: "Paulista",
    status: 2,
    tipo: "Buraco",
  },
];

const OcorrenciasList = () => {
  return (
    <ul className="relative">
      <Button
        variant="contained"
        color="warning"
        sx={{ width: "7em", position: "absolute", right: "0", top: "-3em" }}
      >
        <DocumentScanner />
      </Button>
      {resp.map((o, i) => (
        <OcorrenciaListItem
          nome={o.nome}
          data={o.data}
          endereco={o.endereco}
          status={o.status}
          tipo={o.tipo}
          key={i}
        />
      ))}
    </ul>
  );
};

export default OcorrenciasList;
