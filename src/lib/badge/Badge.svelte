<script lang="ts">
  import type { BadgePosition } from '$lib/badge/badge';

  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
  export let pill = false;
  export let absolute = false;
  export let position: BadgePosition = 'top right';
</script>

<span
  class="badge"
  class:rounded-pill={pill || absolute}
  class:position-absolute={absolute}
  class:top-0={absolute && (position === 'top right' || position === 'top left')}
  class:top-100={absolute && (position === 'bottom right' || position === 'bottom left')}
  class:start-100={absolute && (position === 'bottom right' || position === 'top right')}
  class:start-0={absolute && (position === 'bottom left' || position === 'top left')}
  class:translate-middle={absolute}
  class:bg-primary={primary}
  class:bg-secondary={secondary}
  class:bg-success={success}
  class:bg-danger={danger}
  class:bg-warning={warning}
  class:bg-info={info}
  class:bg-light={light}
  class:bg-dark={dark}
>
  <slot />
</span>
