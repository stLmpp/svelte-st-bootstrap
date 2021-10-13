<script lang="ts">
  export let disabled = false;
  export let white = false;
</script>

<button class="btn-close" class:btn-close-white={white} {disabled} on:click on:dblclick />
