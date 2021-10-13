<script lang="ts">
  import { getCheckboxButtonUid } from '$lib/button/button';

  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
  export let outline = false;
  export let disabled = false;
  export let checked = false;

  const id = getCheckboxButtonUid();
</script>

<input type="checkbox" class="btn-check" {id} {disabled} bind:checked />
<label
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
  for={id}
>
  <slot />
</label>
