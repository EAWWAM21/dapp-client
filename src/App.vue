<template>
    <div id="app">
        <Tittle/>
        <div>
            <router-link to="/">
                <Button type="info">Home</Button>
            </router-link>
            |
            <router-link to="/simpleStorage" v-if="isDrizzleInitialized">
                <Button type="success">SimpleStorage</Button>
            </router-link>
            <router-link to="/" v-else>
                <Button type="success" loading>SimpleStorage</Button>
            </router-link>
            |
            <router-link to="/tutorialToken" v-if="isDrizzleInitialized">
                <Button type="warning">TutorialToken</Button>
            </router-link>
            <router-link to="/" v-else>
                <Button type="warning" loading>TutorialToken</Button>
            </router-link>
            |
            <router-link to="/about">
                <Button type="error">About</Button>
            </router-link>
        </div>
        <div>
            <Row class="router-view">
                <Col span="20" offset="2">
                    <Card :bordered="false">
                        <router-view/>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>

</template>


<script>
    import Tittle from "./components/Tittle"
    import {mapGetters} from 'vuex'

    export default {
        components: {Tittle},
        computed: mapGetters('drizzle', ['isDrizzleInitialized']),
        abc() {

        },
        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background: linear-gradient(30deg, #9FA5D5, #E8F5C8) no-repeat fixed;')
            let i = false
            ethereum.on('accountsChanged', function (accounts) {
                if (i) {
                    alert("账户发生改变 重新加载页面")
                    window.location.reload()
                }
                i = true
            })
        },
    }
</script>

<style>
    #app {
        text-align: center;
    }

    .router-view {
        padding: 5rem;
    }

</style>