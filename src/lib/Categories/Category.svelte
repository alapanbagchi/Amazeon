<script lang="ts">
	export let image: string;
	export let title: string;
	export let suboptions: any;
</script>

<div class="container">
	<div class="image">
		<img src={image} alt="" />
	</div>
	<div class="text">
		<p>{title}</p>
		<img width="14px" class="{suboptions.length>0?'':'hide'}" src="icons/arrow_down.svg" alt="">
	</div>
	<div class="dropdown">
		{#each suboptions as option}
			<div class="option">
				<p>{option.name}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		position: relative;
		width: fit-content;
		height: fit-content;
        gap: 2px;
		display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
		cursor: pointer;
	}
    
</style>
