<script lang="ts">
	import Slide from './Slide.svelte';
	const slides = [
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		},
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		},
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		},
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		},
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		},
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		},
		{
			image: 'https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/445741c8e49439ea.jpg?q=50',
			link: '#'
		}
	];
	let container: any;
	let count = 1;
	const slide = (action: 'LEFT' | 'RIGHT') => {
		if (action === 'LEFT') {
		} else {
		}
	};
</script>

<section>
	<div class="container">
		<div bind:this={container} class="slides">
			{#each slides as slide, index}
				<div style="transform: translateX({index * 100}%) ;" class="slide">
					<a href={slide.link}>
						<img src={slide.image} alt="" />
					</a>
				</div>
			{/each}
		</div>
		<div on:click={() => slide('LEFT')} class="left">
			<img src="icons/arrow_left.svg" alt="" />
		</div>
		<div on:click={() => slide('RIGHT')} class="right">
			<img src="icons/arrow_right.svg" alt="" />
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: calc(100vh - 60px);
		max-height: 450px;
		padding: 0 40px;
		border-radius: 7px;
		overflow: hidden;
		position: relative;
	}
	.container {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.slides {
		width: 100%;
		height: 100%;
		display: flex;
		position: relative;
		transition: all 0.3s ease;
		transform: translateX(0);
	}
	.slide {
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.left {
		width: 50px;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		position: absolute;
		display: flex;
		top: 0;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.right {
		width: 50px;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		right: 40px;
		position: absolute;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.left img,
	.right img {
		filter: invert(1);
	}
	@media (max-width: 900px) {
		section {
			max-height: 350px;
			padding: 0 15px;
		}
		.right{
			right: 15px;
		}
	}
	@media (max-width: 800px) {
		section {
			max-height: 250px;
		}
		.left,
		.right {
			display: none;
		}
	}
</style>
