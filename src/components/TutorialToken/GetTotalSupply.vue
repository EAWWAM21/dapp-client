<template>
    <div class="get-total-supply">
        <span class="title">发行总量</span>
        <h1 class="total-supply">{{totalSupply}}</h1>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    const args = {
        contractName: 'TutorialToken',
        method: 'totalSupply',
        methodArgs: ''
    }

    export default {
        name: "GetTotalSupply",
        created() {
            this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
                contractName: args.contractName,
                method: args.method,
                methodArgs: args.methodArgs
            })
        },
        computed: {
            ...mapGetters('contracts', ['getContractData']),
            totalSupply() {
                return Number(this.getContractData({
                    contract: args.contractName,
                    method: args.method,
                }) / 100).toFixed(2)
            }
        }
    }
</script>

<style scoped>
    .get-total-supply {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .total-supply {
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