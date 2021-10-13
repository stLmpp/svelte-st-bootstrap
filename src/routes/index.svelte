<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import ButtonToolbar from '$lib/button-group/ButtonToolbar.svelte';
  import ButtonGroup from '$lib/button-group/ButtonGroup.svelte';
  import CheckboxButton from '$lib/button/CheckboxButton.svelte';
</script>

<ButtonToolbar>
  <ButtonGroup>
    <CheckboxButton primary>Teste</CheckboxButton>
    <CheckboxButton primary>Teste</CheckboxButton>
    <CheckboxButton primary>Teste</CheckboxButton>
  </ButtonGroup>
</ButtonToolbar>
