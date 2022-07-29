import Notice from '@/pages/consultant/notice/ConsultantNotice.vue';
import Consulting from '@/pages/consultant/consulting/ConsultingList.vue';
import ViewFreePopup from '@/pages/consultant/consulting/ViewFreePopup.vue';
import ViewOnepickPopup from '@/pages/consultant/consulting/ViewOnepickPopup.vue';
import ViewCustomPopup from '@/pages/consultant/consulting/ViewCustomPopup.vue';
import RegisterResultFree from '@/pages/consultant/consulting/RegisterResultFree.vue';
import RegisterResultOnepick from '@/pages/consultant/consulting/RegisterResultOnepick.vue';
import RegisterResultCustom from '@/pages/consultant/consulting/RegisterResultCustom.vue';
import Inquiry from '@/pages/consultant/inquiry/InquiryList.vue';
import Mypage from '@/pages/consultant/mypage/MyPage.vue';


export const ConsultantList = [{
        path: "/Notice",
        component: Notice
    },
    {
        path: "/Consulting",
        component: Consulting
    },
    {
        path: "/ViewFreePopup",
        component: ViewFreePopup
    },
    {
        path: "/ViewOnepickPopup",
        component: ViewOnepickPopup
    },
    {
        path: "/ViewCustomPopup",
        component: ViewCustomPopup
    },
    {
        path: "/RegisterResultFree",
        component: RegisterResultFree
    },
    {
        path: "/RegisterResultOnepick",
        component: RegisterResultOnepick
    },
    {
        path: "/RegisterResultCustom",
        component: RegisterResultCustom
    },
    {
        path: "/Inquiry",
        component: Inquiry
    },
    {
        path: "/Mypage",
        component: Mypage
    },
];