<script>
	import Button from '../../components/Button.svelte';
	import AddressDropdown from './AddressDropdown.svelte';
	import Cart from './Cart.svelte';
	import Logo from './logo.svelte';
	import Profile from './Profile.svelte';
	import SearchCategoryDropdown from './SearchCategoryDropdown.svelte';
	import SearchInput from './SearchInput.svelte';
</script>

<header>
	<nav>
		<ul>
			<li class="logo_delivery">
				<Logo />
			</li>
			<li class="desktopsearch">
				<SearchInput />
			</li>
			<li class="user">
				<Cart />
				<Profile />
			</li>
		</ul>
	</nav>
</header>

<div class="mobilesearch">
	<SearchInput />
</div>

<style>
	header {
		width: 100%;
		height: 70px;
		padding: 0 40px;
		display: flex;
		align-items: center;
		position: sticky;
		top: 0;
	}
	nav,
	ul {
		width: 100%;
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	ul {
		display: flex;
		list-style: none;
	}

	.mobilesearch {
		display: none;
	}
	.user {
		display: flex;
		gap: 20px;
	}
	.logo_delivery {
		display: flex;
		align-items: center;
	}
	.desktopsearch {
		width: 100%;
		min-width: 350px;
		max-width: 1000px;
	}
	@media only screen and (max-width: 900px) {
		header {
			position: static;
			padding: 0 15px;
			height: 60px;
		}
		.desktopsearch {
			display: none;
		}
		.mobilesearch {
			position: sticky;
			top: 0;
			display: flex;
			width: 100%;
			padding: 10px;
		}
		.desktopaddressdropdown{
			display: none;
		}
		.user {
			gap: 20px;
		}
	}
</style>
