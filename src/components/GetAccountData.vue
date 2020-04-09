<template>
    <div class="get-account-data">
        <Row class="row-margin-top">
            <Col span="1">
                <IconSvg icon-name="#icon-metamask"/>
            </Col>
            <Col span="23" class="text-align-left">
                <Button @click="copyAccount()" type="text"><h3>{{activeAccount}}</h3></Button>
            </Col>
        </Row>
        <Row class="row-margin-bottom">
            <Col span="1">
                <IconSvg icon-name="#icon-eth"/>
            </Col>
            <Col span="23" class="text-align-left">
                <Button @click="copyBalance()" type="text">
                    <h3>{{activeBalance}} Wei
                        <span class="balance-font">≈ {{activeBalanceETH}} ETH</span>
                    </h3>
                </Button>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import IconSvg from "@/components/Tool/IconSvg"

    export default {
        name: "GetAccountData",
        components: {IconSvg},
        computed: {
            ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
            activeBalanceETH() {
                return Number(this.activeBalance / 1000000000000000000).toFixed(3)
            }
        },
        methods: {
            copyAccount() {
                this.$Notice.success({
                    title: '成功复制地址至剪切板',
                    desc: ''
                })
                let domAccount = document.createElement('input')
                domAccount.value = this.activeAccount
                document.body.appendChild(domAccount)
                domAccount.select()
                document.execCommand("Copy")
                domAccount.remove()
            },
            copyBalance() {
                this.$Notice.success({
                    title: '成功复制余额至剪切板',
                    desc: ''
                })
                let domBalance = document.createElement('input')
                domBalance.value = this.activeBalance
                document.body.appendChild(domBalance)
                domBalance.select()
                document.execCommand("Copy")
                domBalance.remove()
            },
        }
    }
</script>

<style scoped>
    .get-account-data {
        border: 1px solid #ffd77a;
        border-radius: 0.5rem;
        background-color: #fff9e6;
    }

    .text-align-left {
        text-align: left;
    }

    .row-margin-top {
        margin-top: 0.2rem;
    }

    .row-margin-bottom {
        margin-bottom: 0.2rem;
    }

    .balance-font {
        font-size: 0.5rem;
        font-weight: normal;
        margin-left: 0.25rem;
    }

</style>