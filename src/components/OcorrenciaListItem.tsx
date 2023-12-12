import { useNavigate } from "react-router-dom";
import { IOcorrencia } from "../Models/IOcorrencia";
import { tipo_ocorrencia } from "../enums/tipoOcorrencia";

    const ocorrenciaIcon = [
        "src/assets/icones/criado.png",
        "src/assets/icones/Em_atendimento.png",
        "src/assets/icones/Finalizado.png",
    ]
    
    const ocorrenciaColor = [
        'bg-yellow-status',
        'bg-orange-status',
        'bg-green-status',
    ]

const OcorrenciaListItem = (ocorrencia: IOcorrencia) => {

  const nav = useNavigate();
  const inspecionar = () => {
    nav(`/ocorrencia/visualizar/${ocorrencia.id}`)
  }
    
  return (
    <li onClick={inspecionar} className="flex w-full bg-white hover:bg-gray-200 p-8 rounded justify-between items-center cursor-pointer my-2 ease-in-out duration-300">
      <img
        className={`p-2 ${ocorrenciaColor[ocorrencia.status - 1]} w-14 rounded-full`}
        src={ocorrenciaIcon[ocorrencia.status - 1]}
      />
      <p className="w-[200px]">{ocorrencia.nome}</p>
      <p className="w-[150px]">{tipo_ocorrencia[ocorrencia.tipo]}</p>
      <p>{new Date(ocorrencia.data).toLocaleDateString( 'pt-br')}</p>
      <p>{ocorrencia.cep}</p>
    </li>
  );
};

export default OcorrenciaListItem;
