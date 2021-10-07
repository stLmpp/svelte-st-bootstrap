<script lang="ts">
  export let center = false;
  export let end = false;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
</script>

<div
  class="card"
  class:text-center={center}
  class:text-end={end}
  class:bg-primary={primary}
  class:bg-secondary={secondary}
  class:bg-success={success}
  class:bg-danger={danger}
  class:bg-warning={warning}
  class:bg-info={info}
  class:bg-light={light}
  class:bg-dark={dark}
  class:text-white={primary || secondary || success || danger || dark}
>
  <slot />
</div>
