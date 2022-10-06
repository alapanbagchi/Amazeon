<script>
	import SearchCategoryDropdown from './SearchCategoryDropdown.svelte';
	let active = false;
</script>

<div class="searchbar {active ? 'active' : ''}">
	<div class="search">
		<img class="icon" width="16px" src="icons/search.svg" alt="" />
		<input
			on:focus={() => (active = true)}
			on:blur={() => (active = false)}
			type="text"
			placeholder="Search for your lost daddy"
		/>
	</div>
	<SearchCategoryDropdown />
</div>

<style>
	.searchbar {
		width: 100%;
		display: flex;
		align-items: center;
		border: 2px solid var(--lightblue);
		border-radius: 7px;
		padding: 6px 16px;
		gap: 15px;
		transition: all 0.3s ease-in-out;
	}
	.searchbar:hover {
		border: 2px solid var(--yellow);
		transition: all 0.2s ease-in-out;
	}
	.searchbar img {
		opacity: 0.7;
	}
    .search {
        width: 100%;
        display: flex;
        gap: 15px;
    }
	.searchbar input {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background-color: transparent;

	}
	.active {
		border: 2px solid var(--yellow);
		transition: all 0.3s ease-in-out;
	}

</style>
