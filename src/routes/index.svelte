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
  import Badge from '$lib/badge/Badge.svelte';

  let icon = 'alarm';
</script>

<Card>
  <CardHeader heading>Teste <Badge secondary pill>Teste</Badge></CardHeader>
  <CardBody>
    <CardImgTop />
    <CardTitle>Card</CardTitle>
    <CardText />
    <CardLink>test</CardLink>
  </CardBody>
  <CardFooter>
    <Button on:click={() => (icon = icon === 'toggles' ? 'alarm' : 'toggles')} primary>
      Toggle
      <Badge absolute danger>Te</Badge>
    </Button>
  </CardFooter>
</Card>
