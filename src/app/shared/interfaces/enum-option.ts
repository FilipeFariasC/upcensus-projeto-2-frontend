
export interface EnumOption<E> {
  label: string;
  value: E;
}
export type EnumOptions<E> = EnumOption<E>[];

export type BooleanOptions = EnumOptions<boolean>;
export type RequiredOptions = EnumOptions<boolean>;

export const booleanEnumOptions: BooleanOptions = [ { label: "Sim", value: true }, { label: "Não", value: false }];
export const requiredEnumOptions: RequiredOptions = booleanEnumOptions;
