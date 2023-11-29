import { IOcorrencia } from "../Models/IOcorrencia";

const OcorrenciaListItem = (ocorrencia: IOcorrencia) => {

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

    
  return (
    <li className="flex w-full bg-white hover:bg-gray-200 p-8 rounded justify-between items-center cursor-pointer my-2 ease-in-out duration-300">
      <img
        className={`p-2 ${ocorrenciaColor[ocorrencia.status]} w-14 rounded-full`}
        src={ocorrenciaIcon[ocorrencia.status]}
      />
      <p>{ocorrencia.nome}</p>
      <p>{ocorrencia.data}</p>
      <p>{ocorrencia.tipo}</p>
      <p>{ocorrencia.endereco}</p>
    </li>
  );
};

export default OcorrenciaListItem;
