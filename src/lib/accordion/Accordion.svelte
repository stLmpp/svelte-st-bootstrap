<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import type { AccordionContext, AccordionStateItem } from '$lib/accordion/accordion';
  import { ACCORDION_CONTEXT_KEY } from '$lib/accordion/accordion';

  export let flush = false;
  export let multiple = false;

  const items = writable<Map<string, AccordionStateItem>>(new Map());

  setContext<AccordionContext>(ACCORDION_CONTEXT_KEY, {
    items,
    add: (item: AccordionStateItem) => {
      items.update(_items => {
        const newMap = new Map(_items);
        return newMap.set(item.id, item);
      });
    },
    remove: (id: string) => {
      items.update(_items => {
        const newMap = new Map(_items);
        newMap.delete(id);
        return newMap;
      });
    },
    toggle: (id: string, collapsed: boolean) => {
      items.update(_items => {
        const item = _items.get(id);
        if (!item) {
          return;
        }
        const newMap = new Map(_items);
        if (!multiple && !collapsed) {
          for (const [key, value] of newMap) {
            if (key !== id) {
              newMap.set(key, { ...value, collapsed: true });
            }
          }
        }
        return newMap.set(id, { ...item, collapsed });
      });
    },
  });
</script>

<div class="accordion" class:accordion-flush={flush}>
  <slot />
</div>
