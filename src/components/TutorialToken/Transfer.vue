<template>
    <div class="transfer">
        <Row>
            <Col span="8" offset="8">
                <Input v-model="inputAddress" placeholder="转入地址(16进制)" class="col-margin"/>
            </Col>
            <Col span="4" offset="1">
                <Input v-model="inputAmount" placeholder="转入数量(单位0.01TT)" class="col-margin"/>
            </Col>
            <Col span="1" offset="1">
                <Button @click="onSubmit" type="primary" class="col-margin">提交</Button>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    const args = {
        contractName: 'TutorialToken',
        method: 'transfer',
        methodArgs: ''
    }

    export default {
        name: "Transfer",
        computed: {
            ...mapGetters('drizzle', ['drizzleInstance'])
        },
        methods: {
            onSubmit() {
                if (!this.inputAddress || !this.inputAmount) {
                    this.$Notice.error({
                        title: '输入内容不全',
                        desc: ''
                    })
                    return
                }
                if (this.inputAddress.search(/^0x[a-fA-F0-9]{40}$/)) {
                    this.$Notice.error({
                        title: '输入地址有误',
                        desc: ''
                    })
                    return
                }
                if (this.inputAmount.search(/\D/) >= 0) {
                    this.$Notice.error({
                        title: '仅支持无符号整数',
                        desc: ''
                    })
                    return
                }
                this.drizzleInstance.contracts[args.contractName].methods[args.method].cacheSend(this.inputAddress, this.inputAmount)
            }
        },
        data: () => ({
            inputAddress: null,
            inputAmount: null,
        })
    }
</script>

<style scoped>
    .transfer {
        border: 1px solid #abdcff;
        border-radius: 0.5rem;
        background-color: #f0faff;
    }

    .col-margin {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

</style>