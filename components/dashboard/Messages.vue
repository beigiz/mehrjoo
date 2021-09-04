<template>
    <div class="messages">
        <a-spin :spinning="isLoading">
            <TitleDashboard class="reservation_history__title" title="پیام‌ها" :path="icon"/>
            <div v-for="msg in messages" :key="msg.id">
                <Message :messageData='msg'/>
            </div>
            <div v-if="empty" class="messages__empty">
                <a-empty>
                    <span slot="description">.پیامی برای نمایش وجود ندارد</span>  
                </a-empty>  
            </div>
        </a-spin>
    </div>
</template>

<script>
import Message from "~/components/dashboard/MessageCard.vue";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'
// import {Bus} from 'vue'
export default {
    components: {
        Message,
    },
    data(){
        return{
            icon: require('~/assets/images/message-title.svg'),
            messages: [],
            empty: false,
        }
    },
    methods: {
        ...mapActions(['retrieveMessages', 'readMessage', 'unreadMessage']),
    },
    mounted () {
        let __th = this
        this.retrieveMessages().then(res => {
            console.log("msg",res);
            this.messages = res
            if (res.length === 0){
                this.empty = true
            }
            res.forEach(function(obj) { 
                if (!obj.is_read){
                    console.log("msg1 obj", obj);
                    __th.readMessage(obj.id)
                }
                $nuxt.$emit('messagesRead')
                // for test
                // if (obj.is_read){
                //     console.log("msg1 obj", obj);
                //     __th.unreadMessage(obj.id)
                // }
                console.log("msg1", obj); 
            });
        }).catch(err =>{
            console.log("msg",err);
            this.empty = true
        })
    },
    computed: {
        ...mapState([ 'isLoading']),
    },
}
</script>