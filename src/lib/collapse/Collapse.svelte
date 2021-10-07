<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { Collapse } from 'bootstrap';

  export let collapsed: boolean;
  export let horizontal = false;
  export let className = '';

  let element: HTMLElement | undefined;
  let collapseInstance: Collapse | undefined;

  $: {
    if (collapseInstance) {
      if (collapsed) {
        collapseInstance.hide();
      } else {
        collapseInstance.show();
      }
    }
  }

  onMount(() => {
    if (element) {
      collapseInstance = new Collapse(element, { toggle: false });
    }
  });

  onDestroy(() => {
    if (collapseInstance) {
      collapseInstance.dispose();
    }
  });
</script>

<div bind:this={element} class="collapse {className}" class:collapse-horizontal={horizontal}>
  <slot />
</div>
