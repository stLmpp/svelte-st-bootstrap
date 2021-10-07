import type { Readable } from 'svelte/store';

let uid = 1;

export function getListRadioUid(): string {
  return 'list-radio-' + uid++;
}

export interface ListRadioContext {
  name: string;
  model: Readable<any>;
  checked(value: any): void;
}

export const LIST_RADIO_CONTEXT_KEY = 'LIST_RADIO';
