
import MasterHome from '@/pages/master/home/MasterMain.vue';
import RefundWaiting from '@/pages/master/refund/RefundWaiting.vue';
import RefundCompleted from '@/pages/master/refund/RefundCompleted.vue';
import ManageConsultant from '@/pages/master/manage/ManageConsultant.vue';
import ManageConsulting from '@/pages/master/manage/ManageConsulting.vue';

export const MasterList = [
    {
        path: '/master',
        component: MasterHome
    },
    {
        path: '/master/refund/waiting',
        component: RefundWaiting
    },
    {
        path: '/master/refund/completed',
        component: RefundCompleted
    },
    {
        path: '/master/manage/consultant',
        component: ManageConsultant
    },
    {
        path: '/master/manage/consulting',
        component: ManageConsulting
    }
  ];