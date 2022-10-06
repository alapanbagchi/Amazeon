<div class="container">
    <img src="icons/cart.svg" alt="" />
    <div class="number">9+</div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        opacity: 0.8;
        position: relative;
    }
    .number {
        background-color: var(--yellow);
        color: black;
        width: 20px;
        height: 20px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 12px;
        position: absolute;
        top: 3px;
        right: -10px;
    }
</style>