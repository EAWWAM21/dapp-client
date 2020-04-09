<template>
    <div class="get-symbol">
        <span class="title">代币简称</span>
        <h1 class="symbol">{{symbol}}</h1>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    const args = {
        contractName: 'TutorialToken',
        method: 'symbol',
        methodArgs: ''
    }

    export default {
        name: "GetSymbol",
        created() {
            this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
                contractName: args.contractName,
                method: args.method,
                methodArgs: args.methodArgs
            })
        },
        computed: {
            ...mapGetters('contracts', ['getContractData']),
            symbol() {
                return this.getContractData({
                    contract: args.contractName,
                    method: args.method,
                })
            }
        }
    }
</script>

<style scoped>
    .get-symbol {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .symbol {
        margin: 0.3rem;
        font-size: 32px;
        background: linear-gradient(to left, #0C7BB3, #19be6b);
        -webkit-background-clip: text;
        color: transparent;
    }

    .title {
        color: #19be6b;
    }

</style>