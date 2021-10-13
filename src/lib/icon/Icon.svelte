<script lang="ts">
  import iconsSvg from 'bootstrap-icons/bootstrap-icons.svg';
  import { onDestroy, onMount } from 'svelte';

  export let small = false;
  export let large = false;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;

  let icon: string | null | undefined;
  let span: HTMLSpanElement | undefined;
  const observer = new MutationObserver(() => {
    icon = span?.textContent?.trim();
  });

  function getSize(): number {
    if (small) {
      return 16;
    } else if (large) {
      return 48;
    }
    return 32;
  }

  onMount(() => {
    if (span) {
      icon = span.textContent?.trim();
      observer.observe(span, { subtree: true, characterData: true });
    }
  });

  onDestroy(() => {
    observer.disconnect();
  });
</script>

<span bind:this={span} class="visually-hidden">
  <slot />
</span>

<svg
  class="bi"
  class:text-primary={primary}
  class:text-secondary={secondary}
  class:text-success={success}
  class:text-danger={danger}
  class:text-warning={warning}
  class:text-info={info}
  class:text-light={light}
  class:text-dark={dark}
  width={getSize()}
  height={getSize()}
  fill="currentColor"
>
  <use xlink:href="{iconsSvg}#{icon}" />
</svg>
