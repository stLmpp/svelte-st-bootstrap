<script lang="ts">
  export let vertical = false;
  export let small = false;
  export let large = false;
</script>

<div
  class="btn-group"
  role="group"
  class:btn-group-vertical={vertical}
  class:btn-group-sm={small}
  class:btn-group-lg={large}
>
  <slot />
</div>
