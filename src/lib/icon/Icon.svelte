<script lang="ts">
  import iconsSvg from 'bootstrap-icons/bootstrap-icons.svg';

  export let icon: string;
  export let small = false;
  export let large = false;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;

  function getSize(): number {
    if (small) {
      return 16;
    } else if (large) {
      return 48;
    }
    return 32;
  }
</script>

<svg
  class="bi"
  class:text-primary={primary}
  class:text-secondary={secondary}
  class:text-success={success}
  class:text-danger={danger}
  class:text-warning={warning}
  class:text-info={info}
  class:text-light={light}
  class:text-dark={dark}
  width={getSize()}
  height={getSize()}
  fill="currentColor"
>
  <use xlink:href="{iconsSvg}#{icon}" />
</svg>
