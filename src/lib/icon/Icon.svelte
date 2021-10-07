<script lang="ts">
  import iconsSvg from 'bootstrap-icons/bootstrap-icons.svg';

  export let icon: string;
</script>

<svg class="bi" width="32" height="32" fill="currentColor">
  <use xlink:href="{iconsSvg}#{icon}" />
</svg>
