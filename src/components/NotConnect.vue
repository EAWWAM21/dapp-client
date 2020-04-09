<template>
    <div class="not-connect">
        <h1>搭建失败!</h1>
        <Divider/>
        <h2>请前往 GitHub下 载并配置 dapp-server </h2>
        <h2>请前往 Chrome 应用商店下载 MetaMask 插件 并添加 Ganache 网络</h2>
    </div>
</template>

<script>
    export default {
        name: "NotConnect"
    }
</script>

<style scoped>
    .not-connect {
        border: 1px solid #dedede;
        border-radius: 0.5rem;
        background-color: #f7f7f7;
        margin: 0.5rem;
        padding: 1.5rem;
    }

</style>