<template>
    <div class="tutorial-token">
        <div v-if="isDrizzleInitialized">
            <GetAccountData/>
            <div class="row">
                <Row>
                    <Col span="2">
                        <GetSymbol/>
                    </Col>
                    <Col span="2">
                        <GetTotalSupply/>
                    </Col>
                    <Col span="19" offset="1">
                        <Introduction/>
                    </Col>
                </Row>
            </div>
            <GetBalance/>
            <Transfer/>
        </div>
        <div v-else>
            <NotConnect/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import NotConnect from "@/components/NotConnect"
    import GetAccountData from "@/components/GetAccountData"
    import GetTotalSupply from "@/components/TutorialToken/GetTotalSupply"
    import GetSymbol from "@/components/TutorialToken/GetSymbol"
    import GetBalance from "@/components/TutorialToken/GetBalance"
    import Transfer from "@/components/TutorialToken/Transfer"
    import Introduction from "@/components/TutorialToken/Introduction"

    export default {
        name: "TutorialToken",
        components: {Introduction, Transfer, GetBalance, GetSymbol, GetTotalSupply, GetAccountData, NotConnect},
        computed: mapGetters('drizzle', ['isDrizzleInitialized']),
    }
</script>

<style scoped>
    .row {
        border: 1px solid #8ce6b0;
        border-radius: 0.5rem;
        background-color: #edfff3;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }

</style>