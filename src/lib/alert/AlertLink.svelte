<script lang="ts">
  export let href: string;
  export let target: string | undefined;
</script>

<a class="alert-link" {href} {target}>
  <slot />
</a>
