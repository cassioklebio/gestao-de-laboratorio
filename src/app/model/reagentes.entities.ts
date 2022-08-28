export interface IReagentesRequisicao{
    nomeReagente: string;
    formula: string;
    pesoMolecular: string;
    cas: string;
    aspecto: string;
    quantidade: string;
    teorDePureza: string;

}

export interface IReagentesResponse {
    id: number;
    nomeReagente: string;
    formula: string;
    pesoMolecular: string;
    cas: string;
    aspecto: string;
    quantidade: string;
    teorDePureza: string;
}