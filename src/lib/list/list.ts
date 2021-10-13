import type { Readable } from 'svelte/store';
import { createUidGenerator } from '$lib/util/uid';

export const getListRadioUid = createUidGenerator('list-radio');

export interface ListRadioContext {
  name: string;
  model: Readable<any>;
  checked(value: any): void;
}

export const LIST_RADIO_CONTEXT_KEY = 'LIST_RADIO';
