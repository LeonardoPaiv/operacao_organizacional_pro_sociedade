import { IOcorrenciaCadastro } from "../Models/IOcorrencia";
import { instance } from "./axios";

const criarOcorrencia =async (ocorrencia:IOcorrenciaCadastro) => {
    const data = await instance.post('criar_ocorrencia', {...ocorrencia});
    console.log(data)
}

const constultarOcorrencia =async (id:number) => {
    const data = await instance.get(`consultas/${id}`)
    console.log(data)
}

export default {criarOcorrencia, constultarOcorrencia}