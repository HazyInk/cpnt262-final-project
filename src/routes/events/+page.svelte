<script>
  export let data;
  import Card from '../../lib/components/Card.svelte';
</script>

<svelte:head>
  <title>Gallery Page</title>
</svelte:head>
<main>
<div class="card-container">

  <!-- each loop for card to display events  -->
  {#each data.summaries as { slug, title, content, src } }
    <li><a href="./events/{slug}"><Card {title} {content} {src}/></a></li>
    <!-- <Card title={title} content={content} src={src} /> -->
  {/each}
  
</div>
</main>

<style>
  .card-container {
    padding: 5rem;
    display: flex;
    justify-content: space-evenly; /* or space-between */
    flex-wrap: wrap;
    max-width: 1000px; /* Adjust as needed */
    margin: 0 auto; /* Center the cards */
  }
  li {
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }

</style>
  
  