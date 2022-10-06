<script>
	import '../index.css';
	import Header from '$lib/Header/Header.svelte';
</script>

<Header />

<slot />

<style>
	.categories {
		width: 100vw;
		height: 40px;
		display: flex;
		gap: 30px;
		position: relative;
	}
	.categories::-webkit-scrollbar {
		display: none;
	}
</style>
