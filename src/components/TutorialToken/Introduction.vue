<template>
    <div class="introduction">
        <h2>这是基于ERC20协议发行的代币 TutorialToken (简称TT).</h2>
        <h3>由智能合约描述:所有铸币奖励由部署智能合约的账户获得(即Ganache客户端第一个地址). 该账户可进行 TT代币 转账交易.</h3>
        <h3>其简称 总发行量 精度 均由智能合约限定.</h3>
    </div>
</template>

<script>
    export default {
        name: "Introduction"
    }
</script>

<style scoped>
    .introduction {
        margin-top: 0.3rem;
        text-align: left;
        background: linear-gradient(to left, #0C7BB3, #19be6b);
        -webkit-background-clip: text;
        color: transparent;
    }

</style>