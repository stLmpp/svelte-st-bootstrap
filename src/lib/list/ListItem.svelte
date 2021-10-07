<script lang="ts">
  export let active = false;
  export let disabled = false;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
</script>

<li
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
  <slot />
</li>
