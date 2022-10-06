<script>
	let addressArray = [
		{
			addressline1: 'Baghbazar Street',
			city: 'Kolkata',
			pincode: '700003',
			state: 'West Bengal',
			country: 'India'
		},
		{
			addressline1: 'Maniktala',
			city: 'Kolkata',
			pincode: '700001',
			state: 'West Bengal',
			country: 'India'
		},
		{
			addressline1: 'Wall Street',
			city: 'New York',
			pincode: '10005',
			state: 'New York',
			country: 'USA'
		}
	];
	let currentAddress = addressArray[0];
</script>

<div class="container">
	<div class="text">
		<div class="deliver_to">
			<p>Deliver to Alapan</p>
			<img width="15px" src="icons/arrow_down.svg" alt="" />
		</div>
		<div class="address">
			<p>{currentAddress.city} {currentAddress.pincode}</p>
		</div>
	</div>
</div>

<style>
	.container {
		color: white;
		font-size: 14px;
		display: flex;
		align-items: center;
		cursor: pointer;
		gap: 15px;
	}
	.text {
		display: flex;
		flex-direction: column;
		gap: 5px;
		white-space: nowrap;
	}
	.deliver_to {
		display: flex;
		align-items: center;
		gap: 4px;
		opacity: 0.8;
	}
	.deliver_to img {
		filter: invert(1);
		padding-top: 2px;
	}
	@media (max-width: 900px) {
		.container {
			width: 100%;
            padding: 10px 0;
            border-radius: 7px;
        }
		.text {
			flex-direction: row;
			gap: 1rem;
		}
		.deliver_to img {
			display: none;
		}
	}
</style>
