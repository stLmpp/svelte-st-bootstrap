<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Radio from '$lib/radio/Radio.svelte';

  let checked = false;
  let indeterminate = false;
  let value = 1;
</script>

{value}

<Button primary on:click={() => (checked = !checked)}>Checked - {checked}</Button>
<Button primary on:click={() => (indeterminate = !indeterminate)}>Indeterminate - {indeterminate}</Button>

<Radio name="teste" value={1} bind:checked={value}>Teste</Radio>
<Radio name="teste" value={2} bind:checked={value}>Teste</Radio>
<Radio name="teste" value={3} bind:checked={value}>Teste</Radio>
<Radio name="teste" value={4} bind:checked={value}>Teste</Radio>
