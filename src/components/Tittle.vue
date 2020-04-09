<template>
    <div class="tittle">
        <h1 class="tittle-font"><span class="gradient-color">Dapp 客户端</span></h1>
    </div>
</template>

<script>
    export default {
        name: "Tittle"
    }
</script>

<style scoped>
    .tittle {
        padding: 3rem;
    }

    .tittle-font {
        font-size: 3rem;
    }

    .gradient-color {
        background: linear-gradient(to right, #2db7f5, #19be6b);
        -webkit-background-clip: text;
        color: transparent;
    }

</style>