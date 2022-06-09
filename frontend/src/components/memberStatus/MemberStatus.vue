<template>
  <section id="_cs_production_type" class="sc_new cs_production_type">
    <h1 class="title">원픽 예약 실시간 현황</h1>
    <div class="status_info_add">
      <ul>
        <li class="info_01_add">
          <strong class="info_title_add">예약건수(쿠폰사용)</strong>
          <p class="info_num_add">{{ cur_reserveCount }}건({{ cur_useCoupon }}건)</p>
        </li>
        <li class="info_02_add">
          <strong class="info_title_add">예약금액(원)</strong>
          <p class="info_num_add">{{ cur_reserveAmount }}원</p>
        </li>
        <li class="info_03_add">
          <strong class="info_title_add">신규회원수</strong>
          <p class="info_num_add">{{ todayMembers }}명</p>
        </li>
      </ul>
    </div>
    <div class="api_subject_bx">
      <div class="main_tab_area">
        <div class="main_tab_area">
          <ul role="tablist" class="main_tab_list">
            <li role="tab">
              <router-link to="/">
                <span class="menu">예약현황</span>
              </router-link>
            </li>
            <li role="tab" aria-selected="true">
              <router-link to="/memberStatus">
                <span class="menu">회원현황</span>
              </router-link>
            </li>
          </ul>
          <div class="status_info">
            <ul>
              <li class="info_01">
                <strong class="info_title">신규회원수</strong>
                <p class="info_num">{{ todayMembers }}</p>
                <p class="info_num">누적회원수: {{ accumulate }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="csp_tab_area _tab_root">
        <div class="type_main">
          <div class="_infect_content" data-type="status" data-param="u1=1" style="display: block;">
            <div class="_normality">
              <div class="confirmed_status new">
                <div class="turnout_graph _graph">
                  <div class="tooltip_area _tooltip_wrapper">
                    <dl class="data_info _tooltip">
                      <div class="title_wrap">
                        <dt class="new">
                          <span class="_x_value">{{ today }}</span>
                          예약
                        </dt>
                        <dd class="desc _y_first_value">{{ cur_reserveCount }}건 / {{ cur_reserveAmount }}원</dd>
                      </div>
                      <div class="sub_info_wrap">
                        <dt class="sub_new">7일 평균</dt>
                        <dd class="desc _y_second_value">{{ aWeeksReservation }}건 / {{ aWeeksWorth }}원</dd>
                      </div>
                    </dl>
                  </div>
                  <router-view></router-view>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <script>
import dayjs from 'dayjs';

export default {
  name: 'ReservationStatus',
  components: {
    dayjs
  },
  data() {
    return {
      today: dayjs().format('MM.DD')
    }
  }
};
</script> -->
<script setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import axios from 'axios';

const today = ref(dayjs().format('MM.DD'));
const accumulate = ref('');
const todayMembers = ref('');
const cur_reserveCount = ref('');
const cur_useCoupon = ref('');
const cur_reserveAmount = ref('');
const aWeeksReservation = ref('');
const aWeeksWorth = ref('');

function cumulativeNumberOfMembers() {
  const path = "http://" + window.location.hostname + ":5000/cumulative-number-of-members";

  axios.post(path).then((response) => {
    console.log(response)
    accumulate.value = response.data;
  });
};
function todayNumberOfMembers() {
  const path = "http://" + window.location.hostname + ":5000/today-number-of-members";

  axios.post(path).then((response) => {
    console.log(response)
    todayMembers.value = response.data;
  });
};
function numberOfReservationsForToday() {
  const path = "http://" + window.location.hostname + ":5000/number-of-reservations-for-today";

  axios.post(path).then((response) => {
    cur_reserveCount.value = response.data;
  });
};
function useTodaysCoupon() {
  const path = "http://" + window.location.hostname + ":5000/use-todays-coupon";

  axios.post(path).then((response) => {
    cur_useCoupon.value = response.data;
  });
};
function reservationAmountForToday() {
  const path = "http://" + window.location.hostname + ":5000/reservation-amount-for-today";

  axios.post(path).then((response) => {
    cur_reserveAmount.value = response.data;
  });
};
function averageWeeklyReservation() {
  const path = "http://" + window.location.hostname + ":5000/average-weekly-reservation";

  axios.post(path).then((response) => {
    aWeeksReservation.value = response.data;
  });
};
function averageAmountPerWeek() {
  const path = "http://" + window.location.hostname + ":5000/average-amount-per-week";

  axios.post(path).then((response) => {
    aWeeksWorth.value = response.data;
  });
};

onMounted(() => {
  cumulativeNumberOfMembers();
  todayNumberOfMembers();
  numberOfReservationsForToday();
  useTodaysCoupon();
  reservationAmountForToday();
  averageWeeklyReservation();
  averageAmountPerWeek();
});
</script>