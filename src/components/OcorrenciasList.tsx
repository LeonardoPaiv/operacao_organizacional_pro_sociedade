import DocumentScanner from "@mui/icons-material/DocumentScanner";
import { Button } from "@mui/material";
import { IOcorrencia } from "../Models/IOcorrencia";
import { excel } from '../service/ocorrencia';
import OcorrenciaListItem from "./OcorrenciaListItem";

const OcorrenciasList = ({ocorrencias}: {ocorrencias: IOcorrencia[]}) => {

  return (
    <ul className="relative">
      <Button
        variant="contained"
        color="warning"
        sx={{ width: "7em", position: "absolute", right: "0", top: "-3em" }}
        onClick={() => excel()}
      >
        <DocumentScanner />
      </Button>
      {ocorrencias && ocorrencias.map((o, i) => (
        <OcorrenciaListItem
          nome={o.nome}
          data={o.data}
          cep={o.cep}
          status={o.status}
          tipo={o.tipo}
          id={o.id}
          descricao={o.descricao}
          key={i}
        />
      ))}
    </ul>
  );
};

export default OcorrenciasList;
