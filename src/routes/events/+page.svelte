<script>
  export let data;
</script>

{#each data.summaries as { slug, title }}
<li><a href="./events/{slug}">{title}</a></li>
{/each}

