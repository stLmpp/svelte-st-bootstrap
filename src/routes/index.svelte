<script lang="ts">
  import Checkbox from '$lib/checkbox/Checkbox.svelte';
  import { random } from 'st-utils';
  import Icon from '$lib/icon/Icon.svelte';

  let dismissed = false;

  let progress = 60;

  let icon = 'alarm';

  setInterval(() => {
    progress = random(0, 100);
    icon = icon === 'alarm' ? 'at' : 'alarm';
  }, 2500);
</script>

<Checkbox bind:checked={dismissed}>dismissed</Checkbox>
<Icon>alarm</Icon>
