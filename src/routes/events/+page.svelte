<script>
  export let data;
  console.log(data.summaries);
</script>

{#each data.summaries as { slug, title }}
<li><a href="./events/{slug}">{title}</a></li>
{/each}

