<div class="wrapper">
	<div class="pfp">
		<img src="https://avatars.githubusercontent.com/u/6632271?v=4" alt="Profile" />
	</div>
	<div class="text">
		<p class="name">Alapan Bagchi</p>
		<p class="prime">Kolkata-700003</p>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		gap: 15px;
		font-size: 0.9rem;
		cursor: pointer;
        padding: 5px 10px;
        border-radius: 7px;
        white-space: nowrap;
    }
    .wrapper:hover{
        background-color: var(--darkblue2);
        transition: all 0.2s ease-in-out;
    }
	.pfp {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		overflow: hidden;
	}
	.pfp img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.prime {
		opacity: 0.5;
		margin-top: 3px;
	}
	@media (max-width: 900px) {
		.text {
			display: none;
		}
	}
</style>
