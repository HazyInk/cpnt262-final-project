<script>
  export let data;
</script>

{#each data.summaries as { slug, title }}
<li><a href="/blog/{slug}">{title}</a></li>
{/each}