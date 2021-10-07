<script lang="ts">
  import { getContext } from 'svelte';
  import type { ListRadioContext } from '$lib/list/list';
  import { LIST_RADIO_CONTEXT_KEY } from '$lib/list/list';

  export let active = false;
  export let disabled = false;
  export let value: any | undefined;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;

  const context = getContext<ListRadioContext>(LIST_RADIO_CONTEXT_KEY);

  const model = context.model;

  function onChange(): void {
    context.checked(value);
  }
</script>

<label
  class="list-group-item"
  class:list-group-item-primary={primary}
  class:list-group-item-secondary={secondary}
  class:list-group-item-success={success}
  class:list-group-item-danger={danger}
  class:list-group-item-warning={warning}
  class:list-group-item-info={info}
  class:list-group-item-light={light}
  class:list-group-item-dark={dark}
  class:active
  class:disabled
>
  <input
    class="form-check-input me-1"
    type="radio"
    {disabled}
    {value}
    name={context.name}
    bind:group={$model}
    on:change={onChange}
  />
  <slot />
</label>
