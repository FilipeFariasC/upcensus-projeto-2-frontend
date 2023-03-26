
export interface EnumOption<E> {
  label: string;
  value: E;
}
export type EnumOptions<E> = EnumOption<E>[];