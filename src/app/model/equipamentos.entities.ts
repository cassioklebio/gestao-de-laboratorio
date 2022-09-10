export class Equipamento {
  nomeEquipamento?: string;
  modelo?: string;
  serie?: string;
  fabricante?: string;
  voltagem?: string;

 
  constructor(
    nomeEquipamento: string,
    modelo: string,
    serie: string,
    fabricante: string,
    voltagem: string,
  ) {
    this.nomeEquipamento = nomeEquipamento;
    this.modelo = modelo;
    this.serie = serie;
    this.fabricante = fabricante;
    this.voltagem = voltagem;
  }
}