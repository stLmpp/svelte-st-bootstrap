import type { Writable } from 'svelte/store';

let uid = 1;

export function getAccordionUid(): string {
  return 'accordion-item-' + uid++;
}

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
