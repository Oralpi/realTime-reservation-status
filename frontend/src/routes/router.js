import { createRouter, createWebHistory } from "vue-router";
import ReservationStatus from '@/components/reservationStatus/ReservationStatus.vue';
import MemberStatus from '@/components/memberStatus/MemberStatus.vue';
import ReservationTrend1 from '@/components/reservationStatus/ReservationTrend1.vue';
import NewMemberTrend from '@/components/memberStatus/NewMemberTrend.vue';


const routes = [
  {
    path: '/',
    component: ReservationStatus,
    children: [
      {
        path: '/',
        name: 'ReservationTrend1',
        component: ReservationTrend1
      },
    ]
  },
  {
    path: '/memberStatus',
    component: MemberStatus,
    children: [
      {
        path: '/memberStatus',
        name: 'NewMemberTrend',
        component: NewMemberTrend
      }
    ]
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;