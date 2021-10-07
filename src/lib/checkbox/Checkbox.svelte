<script lang="ts">
  import { getCheckboxUid } from '$lib/checkbox/checkbox';

  export let checked = false;
  export let indeterminate = false;
  export let disabled = false;
  export let inline = false;

  $: {
    if (checked) {
      indeterminate = false;
    }
  }

  const id = getCheckboxUid();
</script>

<div class:form-check={$$slots.default} class:form-check-inline={inline}>
  <input class="form-check-input" type="checkbox" {id} bind:checked bind:indeterminate {disabled} />
  {#if $$slots.default}
    <label class="form-check-label" for={id}>
      <slot />
    </label>
  {/if}
</div>
