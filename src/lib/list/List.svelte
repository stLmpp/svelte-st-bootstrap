<script lang="ts">
  import { setContext } from 'svelte';
  import type { ListRadioContext } from '$lib/list/list';
  import { getListRadioUid, LIST_RADIO_CONTEXT_KEY } from '$lib/list/list';
  import { writable } from 'svelte/store';

  export let flush = false;
  export let numbered = false;
  export let horizontal = false;
  export let value: any = undefined;

  const modelWritable = writable(value);

  $: modelWritable.set(value);

  setContext<ListRadioContext>(LIST_RADIO_CONTEXT_KEY, {
    model: modelWritable,
    name: getListRadioUid(),
    checked: _value => {
      value = _value;
    },
  });
</script>

{#if numbered}
  <ol
    class="list-group"
    class:list-group-flush={flush}
    class:list-group-numbered={numbered}
    class:list-group-horizontal={horizontal}
  >
    <slot />
  </ol>
{:else}
  <ul
    class="list-group"
    class:list-group-flush={flush}
    class:list-group-numbered={numbered}
    class:list-group-horizontal={horizontal}
  >
    <slot />
  </ul>
{/if}
