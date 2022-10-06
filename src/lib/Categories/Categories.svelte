<script lang="ts">
	import { categories } from './categories';
	let dropdown: any;
	let content: any;
	let categoryOptions = categories[0].options;
	let categorySuboptions: any[] = [];
	const handleDropdownPosition = (e: any) => {
		const dropdownPosition = e.target.getBoundingClientRect();
		const element = e.target.innerText;
		const category = categories.find((category: any) => category.name === element);
		categorySuboptions = [];
		categoryOptions = category ? category.options : [];
		dropdown.style.left = dropdownPosition.left + 'px';
		if (categoryOptions.length > 0) {
			dropdown.style.opacity = '1';
		} else {
			dropdown.style.opacity = '0';
		}
	};
	const hideDropdown = () => {
		dropdown.style.opacity = '0';
	};
	const subOption = (option: any) => {
		categorySuboptions = option.suboptions;
	};
</script>

<div on:mouseleave={hideDropdown} class="wrapper">
	<div class="container">
		{#each categories as category}
			<div on:mouseenter={handleDropdownPosition} bind:this={content} class="content">
				<div class="image">
					<img src={category.image} alt="" />
				</div>
				<div class="text">
					<p>{category.name}</p>
					<img
						width="14px"
						height="14px"
						class={category.options.length > 0 ? '' : 'hide'}
						src="icons/arrow_down.svg"
						alt=""
					/>
				</div>
			</div>
		{/each}
	</div>
	<div bind:this={dropdown} class="dropdown">
		<div class="main">
			{#each categoryOptions as option}
				<div on:mouseenter={() => subOption(option)} class="category">
					<div class="option">
						<p>{option.name}</p>
					</div>
				</div>
			{/each}
		</div>
		<div class="submenu">
			{#each categorySuboptions as option}
				<div class="option">
					<p>{option}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		width: 100%;
		padding: 10px 40px;
		display: flex;
		gap: 30px;
		position: relative;
		overflow-x: auto;
	}
	.container::-webkit-scrollbar {
		display: none;
	}
	.content {
		display: flex;
		gap: 5px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		position: relative;
	}
	.image{
		width: 64px;
		height: 64px;
	}
	.image img{
		width: 100%;
		height: 100%;
	}
	.text {
		display: flex;
		opacity: 0.6;
		gap: 5px;
		font-size: 0.9rem;
		white-space: nowrap;
		align-items: center;
	}

	.dropdown {
		width: fit-content;
		padding: 8px;
		position: absolute;
		left: 0;
		opacity: 0;
		display: flex;
		transition: all 0.3s ease;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
	}
	.option {
		display: flex;
		gap: 5px;
		align-items: center;
		padding: 10px 20px;
		font-size: 0.9rem;
		cursor: pointer;
		opacity: 0.7;
		border-radius: 7px;
	}
	.submenu {
		display: flex;
		flex-direction: column;
	}
	.option:hover,
	.submenu .option:hover {
		background-color: var(--lightblue);
		opacity: 1;
		transition: all 0.3s ease;
	}
	@media (max-width: 900px) {
		.container {
			padding: 10px 15px;
		}
	}
</style>
