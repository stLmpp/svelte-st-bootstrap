<script lang="ts">
  import Card from '$lib/card/Card.svelte';
  import CardBody from '$lib/card/CardBody.svelte';
  import CardTitle from '$lib/card/CardTitle.svelte';
  import CardText from '$lib/card/CardText.svelte';
  import CardHeader from '$lib/card/CardHeader.svelte';
  import CardFooter from '$lib/card/CardFooter.svelte';
  import CardImgTop from '$lib/card/CardImgTop.svelte';
  import CardLink from '$lib/card/CardLink.svelte';
  import Icon from '$lib/icon/Icon.svelte';

  let checked = false;
  let indeterminate = false;
  let value = 1;
</script>

<Card>
  <CardHeader heading>Teste</CardHeader>
  <CardBody>
    <CardImgTop />
    <CardTitle>Card</CardTitle>
    <CardText>
      <Icon icon="toggles" />
    </CardText>
    <CardLink>test</CardLink>
  </CardBody>
  <CardFooter>Teste</CardFooter>
</Card>
