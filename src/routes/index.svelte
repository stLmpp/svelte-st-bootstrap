<script lang="ts">
  import Card from '$lib/card/Card.svelte';
  import CardBody from '$lib/card/CardBody.svelte';
  import CardTitle from '$lib/card/CardTitle.svelte';
  import CardText from '$lib/card/CardText.svelte';
  import CardHeader from '$lib/card/CardHeader.svelte';
  import CardFooter from '$lib/card/CardFooter.svelte';
  import CardImgTop from '$lib/card/CardImgTop.svelte';
  import CardLink from '$lib/card/CardLink.svelte';
  import Button from '$lib/button/Button.svelte';
  import IconButton from '$lib/button/IconButton.svelte';

  let icon = 'alarm';
</script>

<Card>
  <CardHeader heading>Teste</CardHeader>
  <CardBody>
    <CardImgTop />
    <CardTitle>Card</CardTitle>
    <CardText>
      <IconButton {icon} primary outline />
      <IconButton {icon} primary outline small />
      <IconButton {icon} primary />
      <IconButton {icon} primary small />
    </CardText>
    <CardLink>test</CardLink>
  </CardBody>
  <CardFooter>
    <Button on:click={() => (icon = icon === 'toggles' ? 'alarm' : 'toggles')}>Toggle</Button>
  </CardFooter>
</Card>
