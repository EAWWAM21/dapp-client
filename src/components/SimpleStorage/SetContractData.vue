<template>
    <div class="set-contract-data">
        <Row>
            <Col span="10" offset="12">
                <Input v-model="inputValue" placeholder="输入无符号整数" maxlength="77" show-word-limit class="col-margin"/>
            </Col>
            <Col span="2" offset="0">
                <Button @click="onSubmit" type="primary" class="col-margin">提交</Button>
            </Col>
        </Row>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    const args = {
        contractName: 'SimpleStorage',
        method: 'set',
        methodArgs: ''
    }

    export default {
        name: "SetContractData",
        computed: {
            ...mapGetters('drizzle', ['drizzleInstance'])
        },
        methods: {
            onSubmit() {
                if (!this.inputValue) {
                    this.$Notice.error({
                        title: '输入内容为空',
                        desc: ''
                    })
                    return
                }
                if (this.inputValue.length > 77) {
                    this.$Notice.error({
                        title: '超出长度限制',
                        desc: ''
                    })
                    return
                }
                if (this.inputValue.search(/\D/) >= 0) {
                    this.$Notice.error({
                        title: '仅支持无符号整数',
                        desc: ''
                    })
                    return
                }
                this.drizzleInstance.contracts[args.contractName].methods[args.method].cacheSend(this.inputValue)
            }
        },
        data: () => ({
            inputValue: null,
        })
    }
</script>

<style scoped>
    .set-contract-data {
        border: 1px solid #abdcff;
        border-radius: 0.5rem;
        background-color: #f0faff;
    }

    .col-margin {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

</style>