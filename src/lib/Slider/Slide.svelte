<script lang="ts">
    export let image: string
    export let link = '#'
</script>

<a href={link} class="container">
    <img src={image} alt="">
</a>

<style>
    .container{
        width: 100%;
        height: 100%;
    }
    .container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>