import { TipoDespesaEnum } from "../enum/tipo-despesa.enum";

export class Despesa{
  data!: string;
  motivo!: string;
  tipo!: TipoDespesaEnum;
  valor!: number;
  desconto!: number;
}
