<script lang="ts">
  import CloseButton from '$lib/button/CloseButton.svelte';
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
  export let dismissable = false;
  export let dismissed = false;

  const eventDispatcher = createEventDispatcher<{ dismiss: MouseEvent }>();

  function onClose(event: MouseEvent): void {
    dismissed = true;
    eventDispatcher('dismiss', event);
  }
</script>

{#if !dismissable || !dismissed}
  <div
    class="alert"
    class:alert-primary={primary}
    class:alert-secondary={secondary}
    class:alert-success={success}
    class:alert-danger={danger}
    class:alert-warning={warning}
    class:alert-info={info}
    class:alert-light={light}
    class:alert-dark={dark}
    class:alert-dismissible={dismissable}
    transition:fade={{ duration: 200 }}
    role="alert"
  >
    <slot />
    {#if dismissable}
      <CloseButton on:click={onClose} />
    {/if}
  </div>
{/if}
