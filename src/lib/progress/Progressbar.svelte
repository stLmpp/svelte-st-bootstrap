<script lang="ts">
  export let stripped = false;
  export let animated = false;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
  export let value = 0;
</script>

<div
  class="progress-bar"
  class:progress-bar-striped={stripped}
  class:progress-bar-animated={animated}
  class:bg-primary={primary}
  class:bg-secondary={secondary}
  class:bg-success={success}
  class:bg-danger={danger}
  class:bg-warning={warning}
  class:bg-info={info}
  class:bg-light={light}
  class:bg-dark={dark}
  style="width: {value}%"
>
  <slot />
</div>
