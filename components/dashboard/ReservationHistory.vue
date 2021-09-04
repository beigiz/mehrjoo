<template>
    <div class="reservation_history">
        <a-spin :spinning="isLoading">
            <TitleDashboard class="reservation_history__title" title="تاریخچه رزرو" :path="icon"/>
            <div v-for="item in historyCards" :key="item.id">
                <HistoryCard :innerData='item'/>
            </div>
            <div v-if="empty" class="reservation_history__empty">
                <a-empty>
                    <span slot="description">.هنوز رزروی انجام نداده اید</span>  
                </a-empty>  
            </div>
        </a-spin>
    </div>
</template>

<script>
import HistoryCard from "~/components/dashboard/HistoryCard.vue";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
export default {
    components: {
        HistoryCard,
    },
    data() {
        return {
            icon: require('~/assets/images/history-title.svg'),
            historyCards: [],
            empty: false
        }
    },
    methods: {
        ...mapActions(['retrieveReservationHistory']),
        
    },
    mounted(){
        this.retrieveReservationHistory().then(res => {
            this.historyCards = res
            if (res.length === 0){
                this.empty = true
            }
        }).catch(err =>{
            this.empty = true
        })
    },
    computed: {
        ...mapState([ 'isLoading']),
    }
}
</script>