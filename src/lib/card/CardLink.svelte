<script lang="ts">
  export let href: string;
  export let target: string | undefined;
</script>

<a {href} {target} class="card-link">
  <slot />
</a>
