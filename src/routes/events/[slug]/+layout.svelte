<script>
	export let data;
</script>

<div class="main">
	<main>
		<slot />
	</main>
</div>

<style>
	@media (min-width: 640px) {
		main {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
