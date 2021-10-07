<script>
  import CardGroup from '$lib/card/CardGroup.svelte';
  import Card from '$lib/card/Card.svelte';
  import CardBody from '$lib/card/CardBody.svelte';
  import CardTitle from '$lib/card/CardTitle.svelte';
  import CardLink from '$lib/card/CardLink.svelte';
</script>

<CardGroup>
  <Card>
    <CardBody>
      <CardTitle>st-decorated</CardTitle>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <CardTitle>st-store</CardTitle>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <CardTitle>st-utils</CardTitle>
      <CardLink href="https://github.com/stLmpp/st-utils" target="_blank">Github</CardLink>
    </CardBody>
  </Card>
</CardGroup>
