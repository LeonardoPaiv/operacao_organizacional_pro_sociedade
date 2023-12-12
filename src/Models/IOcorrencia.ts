import { status } from "../enums/status";
import { tipo_ocorrencia } from "../enums/tipoOcorrencia";

export interface IOcorrencia {
    tipo: number,
    cep: number,
    data: Date,
    descricao: string,
    id: number,
    nome: string,
    status: number
}

export interface IOcorrenciaCadastro {
    nome: string;
    cep: number;
    descricao: string;
    tipo: string;
    file?: string[];
}

export interface arquivo {
    "formato_arquivo": string,
    "idt_arquivo": number,
    "nme_arquivo": string,
    "path_arquivo": string,
    base_arquivo: string;
}

export interface ocorrenciaBanco
{
    "arquivo"?: arquivo[];
    "data_inicio_atendimento"?: string,
    "data_final_atendimento"?: string,
    "descricao_atendimento"?: string,
    "cep_ocorrencia": string,
    "data_ocorrencia": Date,
    "dsc_ocorrencia": string,
    "idt_ocorrencia": number,
    "status_ocorrencia": status,
    "tipo_ocorrencia": tipo_ocorrencia
}


export interface formOcorrencia {
    nome: string;
    cep: string;
    descricao: string;
    tipo: string;
    files?: File[];
}

export interface formAtendimento {
    status: string;
    data_inicio: Date;
    data_fim: Date;
    descricao: string;
}

export interface atendimentoForm {
    descricao: string;
    status: number;
}