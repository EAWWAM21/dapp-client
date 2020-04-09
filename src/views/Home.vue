<template>
    <div class="home">
        <div class="build-success" v-if="isDrizzleInitialized">
            <h1>搭建成功!</h1>
            <Divider/>
            <Row>
                <Col span="2" offset="8">
                    <img alt="Vue logo" src="../assets/images/logo-vue.png">
                </Col>
                <Col span="2">
                    <img alt="Vue logo" src="../assets/images/logo-truffle.png">
                </Col>
                <Col span="2">
                    <img alt="Vue logo" src="../assets/images/logo-ganache.png">
                </Col>
                <Col span="2">
                    <img alt="Vue logo" src="../assets/images/logo-drizzle.png">
                </Col>
            </Row>
        </div>
        <div v-else>
            <NotConnect/>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from "vuex"
    import NotConnect from "@/components/NotConnect"

    export default {
        name: 'Home',
        components: {NotConnect},
        computed: mapGetters('drizzle', ['isDrizzleInitialized']),
    }
</script>

<style scoped>
    .build-success {
        border: 1px solid #abdcff;
        border-radius: 0.5rem;
        background-color: #f0faff;
        margin: 0.5rem;
        padding: 1.5rem;
    }

</style>

