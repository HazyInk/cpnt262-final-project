<script>
	export let data;
</script>
<!-- 
there must be something wrong with the way i am calling / loading the data -->
<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<h1>{data.post.title}</h1>
<p>{data.post.content}</p>
<!-- <div>{data.post.content}</div> -->