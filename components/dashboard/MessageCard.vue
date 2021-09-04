<template>
    <div class="msg_card">
        <div v-show="!messageData.is_read" class="msg_card__new_msg">
            <img class="msg_card__new_msg__icon" src="~assets/images/new-msg.svg" alt="">
            <p class="msg_card__new_msg__text">پیام جدید</p>
        </div>
        <div class="msg_card__content">
            <div class="msg_card__content__first_row">
                <div class="msg_card__content__first_row__subject">
                    <p class="msg_card__content__first_row__title">عنوان:</p>
                    <p class="msg_card__content__first_row__text">{{messageData.title}}</p>
                </div>
                <div class="msg_card__content__first_row__date">
                    <p class="msg_card__content__first_row__title">تاریخ:</p>
                    <p class="msg_card__content__first_row__text">{{messageData.create_date.split('T')[0] | moment("dddd jDD jMMMM jYYYY")}}</p>
                </div>
            </div>
            <div class="msg_card__content__text_msg">
                <p>{{messageData.message_text}}</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        messageData: {
            type: Object,
        }
    }
}
</script>