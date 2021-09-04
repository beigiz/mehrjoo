<template>
    <div class="reservation">
        <a-spin :spinning="isLoading">
        <TitleDashboard class="reservation__title" title="رزرواسیون" :path="icon"/>
        <div class="reservation__select_date">
            <HeadLine class="reservation__headline" title="انتخاب روز"/>
            <p class="reservation__question">روز را انتخاب کنید.</p>
                <no-ssr placeholder="loading...">
                    <date-picker class="reservation__select_date__date_picker" 
                    v-model="date" format="YYYY-MM-DD" 
                    display-format="dddd jDD jMMMM jYYYY"
                    @change="searchRooms()"></date-picker>
                </no-ssr>
        </div>
        
        <div class="reservation__select_room" v-if="date != ''">
            <HeadLine class="reservation__headline" title="انتخاب اتاق"/>
            <a-row class="reservation__select_room__cards" :gutter="[24,24]">
                <a-col :xl="8" :xs="24" :lg="12" v-for="room in dayRoomsInfo" :key="room.id">
                    <RoomCard :class="{'active-room-card' :(activeId == room.id)}" @click.native="selectRoom(room.id)" :title="room.title" :capacity="room.size" :price="room.price_per_hour" :source="roomIcon" />
                </a-col>
            </a-row>
        </div>

        <div class="reservation__select_time" v-if="date != '' && activeId != null">
            <HeadLine class="reservation__headline" title="انتخاب زمان"/>
            <p class="reservation__question">زمان را از بین بازه‌های خالی زیر انتخاب کنید.</p>
            <a-row :gutter="[8,8]" class="reservation__select_time__free_time" type="flex">
                <a-col :span="4" class="reservation__select_time__free_time__item" v-for="free in freeTimes" :key="free">
                    <p>{{free}}</p>
                </a-col>
            </a-row>
            <p class="reservation__select_time__title"> از ساعت:</p>
            <no-ssr class="reservation__select_time__time_picker" placeholder="loading...">
                <date-picker class="reservation__select_time__date_picker" v-model="startTime" 
                    type="time"
                    :min='minAvailableTime'
                    :max='maxAvailableTime'
                    :jumpMinute='interval'
                    :showNowBtn='false'
                    :wrapperSubmit='true'
                />
            </no-ssr>

            <p class="reservation__select_time__title">به مدت زمان <span class="font-small">(زمان انتخابی به ساعت می‌باشد)</span></p>
            <no-ssr class="reservation__select_time__time_picker" placeholder="loading...">
                <date-picker class="reservation__select_time__date_picker" v-model="duration" 
                    type="time"
                    :min='minRoomTime'
                    :max='maxDuration'
                    :jumpMinute='interval'
                    :showNowBtn='false'
                    :wrapperSubmit='true'
                />
            </no-ssr>
        </div>

        <div class="reservation__payment" v-if="date != '' && activeId != null">
            <HeadLine class="reservation__headline" title="پرداخت"/>
            <a-row :gutter="[0,40]" class="reservation__payment__card" type="flex" justify="space-around" align="middle">
                <a-col class="reservation__payment__card__item" :span="6" >
                    <span class="reservation__payment__card__item__title">اتاق: </span>
                    <span class="reservation__payment__card__item__text">{{getName}}</span>
                </a-col>
                <a-col class="reservation__payment__card__item" :span="6">
                    <span class="reservation__payment__card__item__title">تاریخ: </span>
                    <span class="reservation__payment__card__item__text">{{date | moment("dddd jDD jMMMM jYYYY") }}</span>
                </a-col>

                <a-col class="reservation__payment__card__item" :span="6" >
                    <span class="reservation__payment__card__item__title">ساعت: </span>
                    <span class="reservation__payment__card__item__text">{{startTime}}</span>
                </a-col>
                <a-col class="reservation__payment__card__item" :span="6">
                    <span class="reservation__payment__card__item__title">مدت زمان: </span>
                    <span class="reservation__payment__card__item__text">{{duration}}</span>
                </a-col>
                <a-col class="reservation__payment__card__item" :span="6">
                    <span class="reservation__payment__card__item__title">قیمت هر ساعت: </span>
                    <span class="reservation__payment__card__item__text">{{this.activeRoom.price_per_hour}}</span>
                </a-col>
                <a-col class="reservation__payment__card__item" :span="6">
                    <span class="reservation__payment__card__item__title">قیمت کل: </span>
                    <span class="reservation__payment__card__item__text" :class="{'reservation__payment__card__item__text--payable': ifDiscount}">{{calculatePrice}}</span>
                    <span class="reservation__payment__card__item__text reservation__payment__card__item__text__final" :class="{'reservation__payment__card__item__text__final--discount': ifDiscount}">{{final_amount}}</span>
                </a-col>
                <a-col class="reservation__payment__card__item" :span="6">
                    <a-input-search class="reservation__payment__card__item__discount_input"  placeholder="کد تخفیف" size="large" @search="onSearch" v-model="discountCode">
                        <a-button :disabled="discountCode == ''" type="primary" ghost slot="enterButton">
                            ثبت
                        </a-button>
                    </a-input-search>
                </a-col>
                <a-col class="reservation__payment__card__item" :span="6">
                    <a-button @click="reserve" class="reservation__payment__card__item reservation__payment__card__item__button" size="large" type="primary">پرداخت</a-button>
                </a-col>
            </a-row>
        </div>
        </a-spin>
    </div>
</template>

<script>
import RoomCard from "~/components/dashboard/RoomCard.vue";
import TitleDashboard from "~/components/dashboard/TitleDashboard.vue";
import HeadLine from "~/components/dashboard/HeadLine.vue";
import {mapActions} from 'vuex';
import {mapState} from 'vuex';
export default {
    components: {
        RoomCard,
        TitleDashboard,
        HeadLine,
        datePicker: () => import('vue-persian-datetime-picker'),
    },
    data() {
        return {
            dayRoomsInfo: null,
            spinning: false,
            activeRoom: null,
            date: '',
            startTime: '',
            minAvailableTime: '',
            maxAvailableTime: '',
            duration: '',
            minRoomTime: '',
            discountCode: '',
            interval: null,
            icon: require('~/assets/images/reserve-title.svg'),
            roomIcon: require('~/assets/images/working-chair.svg'),
            paymentIcon: require('~/assets/images/credit-card.svg'),
            activeId: null,
            freeTimes: null,
            successText: '.کد تخفیف با موفقیت ثبت شد',
            errorText: '!کد تخفیف وارد شده صحیح نمی‌باشد',
            payable_amount: '',
            final_amount: '',
            ifDiscount: false,
        }
    },
    methods: {
        ...mapActions(['getRooms', 'reservationCreate', 'searchDiscount']),
        getName() {
            var selected = this.rooms.find(room => room.id == this.activeId);
            if (selected != null){
                return selected.name;
            }
        },
        getPrice() {
            var selected = this.rooms.find(room => room.id == this.activeId);
            if (selected != null){
                return selected.price;
            }
        }, 
        searchRooms(){
            this.getRooms(this.date).then(res =>{
                this.dayRoomsInfo = res
            }).catch(err =>{
                console.log(err)
            })
        },
        calIntervalMin(intervalStr){
            let min = parseInt(intervalStr.slice(3,5), 10)
            let hourToMin = (parseInt(intervalStr.slice(0,2), 10)) / 60
            return min + hourToMin
        },
        selectRoom(roomId){
            this.activeId = roomId  
            this.activeRoom = this.dayRoomsInfo.find(y => y['id'] == this.activeId)
            let roomFreeTime = this.activeRoom.free_times_to_show
            console.log(this.activeRoom);
            let modifiedRFT = roomFreeTime.map(hours => {
                let time1 = hours[0].split('T')[1].split('Z')[0].slice(0,5)
                let time2 = hours[1].split('T')[1].split('Z')[0].slice(0,5)
                return `${time1} الی ${time2}`
            })
            this.freeTimes = modifiedRFT
            this.minAvailableTime = this.activeRoom.day.start_time.slice(0,5)
            // this.maxAvailableTime = this.activeRoom.day.end_time.slice(0,5)
            this.startTime = this.activeRoom.day.start_time.slice(0,5)
            //todo havaset bashe bayad interval ro be minutes khales tabdil koni
            this.interval = this.calIntervalMin(this.activeRoom.day.interval)
            this.duration = this.activeRoom.day.min_time.slice(0,5)
            this.minRoomTime = this.activeRoom.day.min_time.slice(0,5)
            this.payable_amount = this.activeRoom.price_per_hour
        },
        onSearch(){
            let time = {
                "start_datetime": `${this.date}T${this.startTime}`,
                "duration": `${this.duration}:00`,
                "room": this.activeRoom.id,
                "discount": this.discountCode,
            }
            let __th = this
            this.searchDiscount(time).then(res => {
                console.log("discount", res)
                __th.$message.success(__th.successText, 2.5)
                __th.payable_amount = res.payable_amount
                __th.final_amount = res.final_amount
                __th.ifDiscount = true
            }).catch(err => {
                console.log("discount", err)
                __th.$message.error(__th.errorText, 2.5)
            })
        },
        reserve(){
            let time = {
                "start_datetime": `${this.date}T${this.startTime}`,
                "duration": `${this.duration}:00`,
                "room": this.activeRoom.id,
                "discount": this.discountCode,
            }
            let __th = this
            this.reservationCreate(time)
            .then(res=>{
              location.replace(`https://${res.invoice_url}`)
            })
            .catch(err => {
              console.log('err', err);
              if (err.response){
                if (err.response.data.non_field_errors[0].includes('Room is full')) __th.$message.error('این مکان در بازه انتخابی شما رزرو می‌باشد', 2.5)
              }
            })
            console.log('time', time);
        },
        computPrice(){
            return this.activeRoom.day.price_per_interval * 3
        }
    },
    computed: {
        ...mapState(['isLoading']),
        getName(){
            if (this.activeRoom != null){
                return this.activeRoom.title
            }
        }, 
        maxDuration(){
            return '10:00'
            //todo havasemon bashe nazane biron az roz
        },
        calculatePrice(){
            let hours = parseInt(this.duration.slice(0,2), 10 )
            let minutes = parseInt(this.duration.slice(3,5), 10 )
            let totalInterval = ((hours * 60) + minutes) / this.interval
            console.log("ali hours", this.duration.split(0,2));
            console.log("ali minutes", minutes);
            console.log("ali inter", this.interval);
            console.log("ali total", totalInterval);
            console.log("ali dur", this.duration);
            console.log("ali active", this.activeRoom.day.price_per_interval);
            return totalInterval * this.activeRoom.day.price_per_interval
        }  
    },
}
</script>