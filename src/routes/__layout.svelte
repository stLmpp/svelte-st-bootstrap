<script lang="ts">
  import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main class="container">
  <slot />
</main>

<style lang="scss" global>
  @import 'bootstrap/scss/bootstrap';

  main {
    margin-top: 1rem;
  }
</style>
