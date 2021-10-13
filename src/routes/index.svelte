<script lang="ts">
  import Alert from '$lib/alert/Alert.svelte';
  import Checkbox from '$lib/checkbox/Checkbox.svelte';
  import AlertHeading from '$lib/alert/AlertHeading.svelte';
  import AlertLink from '$lib/alert/AlertLink.svelte';

  let dismissed = false;
</script>

<Checkbox bind:checked={dismissed}>dismissed</Checkbox>

<Alert danger dismissable bind:dismissed on:dismiss={console.log}>
  <AlertHeading>Heading</AlertHeading>
  <hr />
  <AlertLink href="#" target="_blank">Teste</AlertLink>
</Alert>
