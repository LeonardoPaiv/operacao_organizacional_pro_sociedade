export interface IOcorrencia {
    nome: string;
    status: number;
    data: string;
    tipo: string;
    endereco: string;
}

export interface IOcorrenciaCadastro {
    nome: string;
    cep: number;
    descricao: string;
    tipo: number;
    file?: string[];
}