<script>
	import { clickOutside } from '../../utils/clickOutside';
	import { fly } from 'svelte/transition';
	import { options } from '../../utils/menuoptions';
	let active = false;
	let current = options[0];
</script>

<div use:clickOutside on:click_outside={() => (active = false)} class="dropdown">
	<div on:click={() => (active = !active)} class="current">
		<p>{current}</p>
		<div class="icon">
			<img width="16px" src="icons/arrow_down.svg" alt="" />
		</div>
	</div>
	<div class="options {active ? 'active' : ''}">
		{#each options as option}
			<div on:click={() => {current = option; active = false}} in:fly class="option">
				{option}
			</div>
		{/each}
	</div>
</div>

<style>
	.dropdown {
		display: flex;
		width: auto;
		align-items: center;
		position: relative;
		white-space: nowrap;
		line-height: 0;
        font-size: 0.9rem;
		z-index: 99999;
	}
	.current {
		width: auto;
		opacity: 0.8;
		font-size: 0.85rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 10px 5px 25px;
		cursor: pointer;
		gap: 8px;
		border-left: 2px solid var(--searchdropdownborder);
	}
	.current:hover {
		transition: all 0.3s ease-in-out;
	}
	.options {
		width: fit-content;
		height: 0;
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 55px;
		right: -15px;
        padding: 0;
		border-radius: 7px;
		background-color: var(--main_menu);
		overflow: auto;
		transition: all 0.2s ease-in-out;
	}
	.options.active {
		height: calc(100vh - 500px);
        padding: 5px;
		transition: all 0.2s ease-in-out;
	}
	.option {
		width: 100%;
		height: 35px;
		min-height: 35px;
		opacity: 0.8;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 50px;
		padding: 0 50px 0 20px;
        border-radius: 7px;
        transition: all 0.3s ease-in-out;
	}
	.options::-webkit-scrollbar {
		width: 0;
	}
	.option:hover {
		background-color: #fff;
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}

	@media (max-width: 900px) {
		.dropdown{
			position: static;
		}
		.options{
			width: calc(100% - 20px);
			top: 165px;
			left: 10px;
			right: unset;
		}
}
</style>
