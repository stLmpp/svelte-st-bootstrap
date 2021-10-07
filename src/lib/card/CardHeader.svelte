<script lang="ts">
  export let heading = false;
</script>

{#if heading}
  <h5 class="card-header">
    <slot />
  </h5>
{:else}
  <div class="card-header">
    <slot />
  </div>
{/if}
