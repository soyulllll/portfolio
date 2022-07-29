import { createWebHistory, createRouter} from "vue-router";
import { MasterList } from "@/router/master";
import { ConsultantList } from "@/router/consultant";

const routes = [{
        path: "/",
        name: "LoginPage",
        component: () => import('@/pages/account/login.vue')
    },
    {
        path: "/updatePw",
        name: "updatePw",
        component: () => import('@/pages/account/UpdatePassword.vue')
    },
    ...MasterList,
    ...ConsultantList,
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;