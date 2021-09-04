<template>
    <div class="room_card" style="cursor: pointer;">
        <a-row type="flex" justify="space-between" align="middle" :gutter="[0,32]">
            <a-col class="room_card__title" :span='12'>
                <p >{{title}}</p>
            </a-col>
            <a-col class="room_card__icon" :span='12'>
                <img :src="source" alt="" >
            </a-col>
            </a-row>
            <a-row type="flex" justify="space-between" align="middle" :gutter="[0,32]">
            <a-col class="room_card__capacity" :span='7'>
                <p >ظرفیت: {{capacity}}</p>
            </a-col>
            <a-col class="room_card__price" :span='15'>
                <p>{{price}} <span class="font-small">تومان/ساعت</span></p>
            </a-col>
        </a-row>
        <!-- <div class="room_card__row first_row">
            <p class="room_card__row__title">{{title}}</p>
            <img :src="source" alt="" class="room_card__row__icon">
        </div>
        <div class="room_card__row">
            <p class="room_card__row__capacity">ظرفیت: {{capacity}}</p>
            <p class="room_card__row__price">{{price}} تومان/ساعتی</p>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String
        },
        source:{
            type: String
        },
        capacity:{
            type: Number
        },
        price:{
            type: Number
        },
    }
}
</script>