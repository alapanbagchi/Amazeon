<script lang="ts">
	export let callback = () => {};
    export let fill = "var(--primary)";
    export let color = "var(--white)";
</script>

<button style="background-color: {fill}; color: {color}" on:click={callback}>
	<slot />
</button>
<style>
    button{
        padding: 12px 25px;
        outline: none;
        border: none;
        border-radius: 7px;
        white-space: nowrap;
    }
</style>
