<script lang="ts">
  import Progressbar from '$lib/progress/Progressbar.svelte';

  export let stripped = false;
  export let animated = false;
  export let value = 0;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
</script>

<div class="progress">
  {#if $$slots.default}
    <slot />
  {:else}
    <Progressbar
      {value}
      {primary}
      {secondary}
      {success}
      {danger}
      {warning}
      {info}
      {light}
      {dark}
      {stripped}
      {animated}
    />
  {/if}
</div>
