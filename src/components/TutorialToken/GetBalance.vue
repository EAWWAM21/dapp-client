<template>
    <div class="get-balance">
        <Row>
            <Col span="1" offset="10">
                <h1 class="title">余额</h1>
            </Col>
            <Col span="3">
                <h1 class="balance">{{balance}}</h1>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    const args = {
        contractName: 'TutorialToken',
        method: 'balanceOf'
    }

    export default {
        name: "GetBalance",
        created() {
            this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
                contractName: args.contractName,
                method: args.method,
                methodArgs: [this.activeAccount]
            })
        },
        computed: {
            ...mapGetters('contracts', ['getContractData']),
            ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
            balance() {
                return Number(this.getContractData({
                    contract: args.contractName,
                    method: args.method,
                }) / 100).toFixed(2)
            }
        }
    }
</script>

<style scoped>
    .get-balance {
        border: 1px solid #ffb08f;
        border-radius: 0.5rem;
        background-color: #ffefe6;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .balance {
        margin: 0.2rem;
        font-size: 2.5rem;
        background: linear-gradient(-90deg, #ff9900, #ed4014);
        -webkit-background-clip: text;
        color: transparent;
    }

    .title {
        margin-top: 1.45rem;
        font-size: 1rem;
        color: #ff9900;
    }

</style>