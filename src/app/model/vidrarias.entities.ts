export class Vidraria {
    id?: number;
    nomeVidraria?: string;
    codigo?: string;
    volume?: string;
    fundo?: string;
    gargalo?: string;
    cor?: string;
    temperatura?: string;

    constructor(
        nomeVidraria: string,
        codigo: string,
        volume: string,
        fundo: string,
        gargalo: string,
        cor: string,
        temperatura: string,
    ) {
       
        this.nomeVidraria = nomeVidraria;
        this.codigo = codigo;
        this.volume = volume;
        this.fundo = fundo;
        this.gargalo = gargalo;
        this.cor = cor;
        this.temperatura = temperatura;
    }



}

