export class Equipamento {
<<<<<<< HEAD
  nomeEquipamento?: string;
  modelo?: string;
  serie?: string;
  fabricante?: string;
  voltagem?: string;
=======
  public nomeEquipamento: string;
  public id!: number;
  public modelo: string;
  public serie: string;
  public fabricante: string;
  public voltagem: string;
>>>>>>> feature-atividade-12

 
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