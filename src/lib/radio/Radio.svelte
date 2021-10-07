<script lang="ts">
  import { getRadioUid } from '$lib/radio/radio';

  export let checked: any;
  export let name = '';
  export let value: any;
  export let disabled = false;
  export let inline = false;

  const id = getRadioUid();
</script>

<div class:form-check={$$slots.default} class:form-check-inline={inline}>
  <input class="form-check-input" type="radio" {id} {disabled} {name} {value} bind:group={checked} />
  {#if $$slots.default}
    <label class="form-check-label" for={id}>
      <slot />
    </label>
  {/if}
</div>
