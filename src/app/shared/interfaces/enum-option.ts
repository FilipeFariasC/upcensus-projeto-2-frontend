
export interface EnumOption<E> {
  label: string;
  value: E;
}
export type EnumOptions<E> = EnumOption<E>[];

export type RequiredOptions = EnumOptions<boolean>;

export const requiredEnumOptions: RequiredOptions = [ { label: "Sim", value: true }, { label: "Não", value: false }]
