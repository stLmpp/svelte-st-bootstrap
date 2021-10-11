<script lang="ts">
  import Button from '$lib/button/Button.svelte';
  import Icon from '$lib/icon/Icon.svelte';

  export let icon: string;
  export let primary = false;
  export let secondary = false;
  export let success = false;
  export let danger = false;
  export let warning = false;
  export let info = false;
  export let light = false;
  export let dark = false;
  export let small = false;
  export let large = false;
  export let disabled = false;
  export let active = false;
  export let outline = false;
</script>

<Button
  {small}
  {large}
  {primary}
  {secondary}
  {success}
  {danger}
  {warning}
  {info}
  {light}
  {dark}
  {disabled}
  {active}
  {outline}
  on:click
  on:dblclick
>
  <Icon {icon} {small} {large} />
</Button>
