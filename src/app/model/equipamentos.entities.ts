export interface IEquipamentosRequisicao {
  nomeEquipamento: string;
  modelo: string;
  serie: string;
  fabricante: string;
  voltagem: string;

}

export interface IEquipamentosResponse {
  id: number;
  nomeEquipamento: string;
  modelo: string;
  serie: string;
  fabricante: string;
  voltagem: string;
}