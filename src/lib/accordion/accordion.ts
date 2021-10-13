import type { Writable } from 'svelte/store';
import { createUidGenerator } from '$lib/util/uid';

export const getAccordionUid = createUidGenerator('accordion-item');

export interface AccordionStateItem {
  id: string;
  collapsed: boolean;
}

export interface AccordionContext {
  items: Writable<Map<string, AccordionStateItem>>;
  add(item: AccordionStateItem): void;
  remove(id: string): void;
  toggle(id: string, collapsed: boolean): void;
}

export const ACCORDION_CONTEXT_KEY = 'ACCORDION';
