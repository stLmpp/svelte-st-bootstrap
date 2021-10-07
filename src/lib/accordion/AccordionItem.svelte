<script lang="ts">
  import Collapse from '$lib/collapse/Collapse.svelte';
  import { ACCORDION_CONTEXT_KEY, AccordionContext, getAccordionUid } from '$lib/accordion/accordion';
  import { getContext, onDestroy, onMount } from 'svelte';
  import { noop } from 'st-utils';

  export let title: string | undefined;

  let collapsed = true;

  const id = getAccordionUid();
  let unsubscribe = noop;

  const context = getContext<AccordionContext>(ACCORDION_CONTEXT_KEY);

  function toggle(): void {
    collapsed = !collapsed;
    context.toggle(id, collapsed);
  }

  onMount(() => {
    context.add({ id, collapsed });
    unsubscribe = context.items.subscribe(items => {
      const item = items.get(id);
      if (item) {
        collapsed = item.collapsed;
      }
    });
  });

  onDestroy(() => {
    context.remove(id);
  });
</script>

<div class="accordion-item">
  <h2 class="accordion-header">
    <button class="accordion-button" class:collapsed type="button" on:click={() => toggle()}>
      {#if title}
        {title}
      {:else}
        <slot name="header" />
      {/if}
    </button>
  </h2>
  <Collapse className="accordion-collapse" {collapsed}>
    <div class="accordion-body">
      <slot />
    </div>
  </Collapse>
</div>
