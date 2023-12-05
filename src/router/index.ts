import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login.vue';
import Appointments from '../views/Appointments.vue';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/:dentist_id/appointment_slots',
    name: 'Appointments',
    component: Appointments,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
