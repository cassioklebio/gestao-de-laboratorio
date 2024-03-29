export class Reagente {
    id?: number;
    nomeReagente?: string;
    formula?: string;
    pesoMolecular?: string;
    cas?: string;
    aspecto?: string;
    quantidade?: string;
    teorDePureza?: string;

    constructor(
        nomeReagente: string,
        formula: string,
        pesoMolecular: string,
        cas: string,
        aspecto: string,
        quantidade: string,
        teorDePureza: string,
    ) {
        this.nomeReagente = nomeReagente;
        this.formula =  formula;
        this.pesoMolecular = pesoMolecular;
        this.cas = cas;
        this.aspecto = aspecto;
        this.quantidade = quantidade;
        this.teorDePureza = teorDePureza;
    }

}

