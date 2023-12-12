import { atendimentoForm, formOcorrencia } from "../Models/IOcorrencia";
import { tipo_ocorrencia } from "../enums/tipoOcorrencia";
import { instance } from "./axios";

const criarOcorrencia = async (ocorrencia: formOcorrencia) => {
  const data = await instance.post("criar_ocorrencia", ocorrencia);
  return data;
};

const constultarOcorrencia = async (id?: number, filtro?: {tipo: string, status: string}) => {
  let novoFiltro: unknown = {}
  if (filtro?.tipo) {
    novoFiltro = filtro
  } else {
    novoFiltro = {status: filtro?.status}
  }
  const { data } = await instance.get(`consultas${id ? `/${id}` : ""}`, {params: novoFiltro});
  if (id)
    return { ...data, tipo_ocorrencia: tipo_ocorrencia[data.tipo_ocorrencia] };
  return data;
};

const atendimento = async (id: number, atendimento: atendimentoForm) => {
  const data = await instance.put(`atendimento/${id}`, atendimento);
  return data;
};

const excel = () => {
  instance.get("consultas/excel", {responseType: 'arraybuffer'}).then(response => {
    // Obtém os dados do arraybuffer
    const blobData = response.data;

    // Cria um objeto Blob a partir dos dados
    const blob = new Blob([blobData], {type: 'array'});

    // Cria uma URL temporária para o blob
    const blobUrl = window.URL.createObjectURL(blob);

    // Cria um link para download e simula o clique nele
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'nome_do_arquivo.xlsx';
    document.body.appendChild(link);
    link.click();

    // Limpa a URL temporária
    window.URL.revokeObjectURL(blobUrl);
  })
  .catch(() => {
    window.alert('Erro ao baixar o arquivo');
  });
};

export { atendimento, constultarOcorrencia, criarOcorrencia, excel };

