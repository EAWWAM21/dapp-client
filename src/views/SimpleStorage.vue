<template>
    <div class="simple-storage">
        <div v-if="isDrizzleInitialized">
            <GetAccountData/>
            <GetContractData/>
            <SetContractData/>
        </div>
        <div v-else>
            <NotConnect/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import GetContractData from "@/components/SimpleStorage/GetContractData"
    import GetAccountData from "@/components/GetAccountData"
    import SetContractData from "@/components/SimpleStorage/SetContractData"
    import NotConnect from "@/components/NotConnect"

    export default {
        name: "SimpleStorage",
        components: {NotConnect, SetContractData, GetAccountData, GetContractData},
        computed: mapGetters('drizzle', ['isDrizzleInitialized']),
    }
</script>

<style scoped>

</style>




