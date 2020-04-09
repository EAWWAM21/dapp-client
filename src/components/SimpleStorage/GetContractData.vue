<template>
    <div class="get-contract-data">
        <h1 class="contract-data">{{contractData}}</h1>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    const args = {
        contractName: 'SimpleStorage',
        method: 'storedData',
        methodArgs: ''
    }

    export default {
        name: "GetContractData",
        created() {
            this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
                contractName: args.contractName,
                method: args.method,
                methodArgs: args.methodArgs
            })
        },
        computed: {
            ...mapGetters('contracts', ['getContractData']),
            contractData() {
                return this.getContractData({
                    contract: args.contractName,
                    method: args.method,
                })
            }
        }
    }
</script>

<style scoped>
    .get-contract-data {
        border: 1px solid #8ce6b0;
        border-radius: 0.5rem;
        background-color: #edfff3;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .contract-data {
        margin: 0.5rem;
        font-size: 48px;
        background: linear-gradient(to left, #0C7BB3, #F2BAE8);
        -webkit-background-clip: text;
        color: transparent;
    }

</style>