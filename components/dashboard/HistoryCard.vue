<template>
    <div class="history_card">
        <a-row :gutter="[0,40]" class="history_card__row" type="flex" justify="start" align="middle">
            <a-col :xl="6" :lg="8" :md="12" :xs="24" >
                <p class="history_card__row__subject">اتاق:</p>
                <p class="history_card__row__data">{{innerData.room_title.title}}</p>
            </a-col>
            <a-col :xl="6" :lg="8" :md="12" :xs="24">
                <p class="history_card__row__subject">تاریخ:</p>
                <p class="history_card__row__data">{{innerData.start_datetime.split('T')[0] | moment("dddd jDD jMMMM jYYYY")}}</p>
            </a-col>
            <a-col :xl="6" :lg="8" :md="12" :xs="24">
                <p class="history_card__row__subject">از ساعت:</p>
                <p class="history_card__row__data">{{innerData.start_datetime.split('T')[1].split("Z")[0].slice(0,5)}}</p>
            </a-col>
            <a-col :xl="6" :lg="8" :md="12" :xs="24">
                <p class="history_card__row__subject">به مدت زمان:</p>
                <p class="history_card__row__data">{{innerData.duration.slice(0,5)}} <span>ساعت</span></p></a-col>
            <a-col :xl="6" :lg="8" :md="12" :xs="24">
                <p class="history_card__row__subject">قیمت هر ساعت:</p>
                <p class="history_card__row__data">{{innerData.price_per_hour}}</p>
            </a-col>
            <a-col :xl="6" :lg="8" :md="12" :xs="24">
                <p class="history_card__row__subject">قیمت کل:</p>
                <p class="history_card__row__data" :class="{'history_card__row__data__price--discount': innerData.discount != null}">{{innerData.payable_amount}}</p>
                <p class="history_card__row__data history_card__row__data__final_price" :class="{'history_card__row__data__final_price--discount': innerData.discount != null}">{{innerData.final_amount}}</p>
            </a-col>
            <a-col :xl="6" :lg="8" :md="12" :xs="24">
                <p class="history_card__row__subject">کد پیگیری:</p>
                <p class="history_card__row__data">{{innerData.id}}</p>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    props: {
        innerData: {
            type: Object
        }
    },
    mounted(){
        console.log('sag' , this.innerData)
    }
}
</script>