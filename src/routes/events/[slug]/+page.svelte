<script>
	export let data;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<div id="main">
	<div>
		<img src="{data.post.src}" alt="poster of event">
	</div>
	<div id="text-box">
		<h2>{data.post.title}</h2>
		<p>{data.post.content}</p>
	</div>
</div>

<style>
	img {
		max-width: 90vw;
		max-height:auto;
	}

	p {
		font-family: 'Ubuntu', sans-serif;
		font-size: 18px;
		max-width: 65ch;
	}

	#main{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		font-family: 'Croissant One', cursive;
		font-size: 30px;
		font-weight: bold;
		color: #28463E;
		display: block;
		margin-bottom: 0;
	}

	#text-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 90vw;
	}
</style>