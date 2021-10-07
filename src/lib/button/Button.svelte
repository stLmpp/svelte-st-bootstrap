<script lang="ts">
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
  export let outline = false;
  export let large = false;
  export let small = false;
  export let disabled = false;
  export let active = false;
</script>

<button
  on:click
  on:dblclick
  class="btn"
  class:btn-primary={!outline && primary}
  class:btn-secondary={!outline && secondary}
  class:btn-success={!outline && success}
  class:btn-danger={!outline && danger}
  class:btn-warning={!outline && warning}
  class:btn-info={!outline && info}
  class:btn-light={!outline && light}
  class:btn-dark={!outline && dark}
  class:btn-outline-primary={outline && primary}
  class:btn-outline-secondary={outline && secondary}
  class:btn-outline-success={outline && success}
  class:btn-outline-danger={outline && danger}
  class:btn-outline-warning={outline && warning}
  class:btn-outline-info={outline && info}
  class:btn-outline-light={outline && light}
  class:btn-outline-dark={outline && dark}
  class:btn-lg={large}
  class:btn-sm={small}
  class:active
  {disabled}
>
  <slot />
</button>
