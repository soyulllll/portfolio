<template>
    <div class="nav_box">
        <div class="nav_main">
            <img alt="nav" :src="require(`@/assets/image/icon/consultant_nav.png`)">
            <p>CONSULTANT</p>
        </div>
        <ul class="nav_list">
            <li class="nav_sub">
                <a href="/Notice" alt="Notice"><img alt="nav"
                        :src="require(`@/assets/image/icon/consultant_notice.png`)"><span>Notice</span></a>
            
            </li>
            <li class="nav_sub"><a href='/Consulting' alt="Consulting"><img alt="nav"
                        :src="require(`@/assets/image/icon/consultant_consulting.png`)"><span>Consulting</span></a><div class="nav_click"></div>
                        </li>
            <li class="nav_sub"><a href='/Inquiry' alt="Inquiry"><img alt="nav"
                        :src="require(`@/assets/image/icon/consultant_inquiry.png`)"><span>Inquiry</span></a>
                        </li>
            <li class="nav_sub"><a href='/Mypage' alt="Mypage"><img alt="nav"
                        :src="require(`@/assets/image/icon/consultant_mypage.png`)"><span>My Page</span></a>
                        
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'ConsultantNav',
    }
    
    window.onload = function () {
        const location = window.location.pathname;
        const changeColor = document.querySelectorAll('.nav_sub a');

        changeColor.forEach(function (item) {
            const link = item.getAttribute('href');
            
            if (link === location) {
                item.parentNode.classList.add("active");
                item.parentNode.classList.add("activeBg");
            } else {
                item.parentNode.classList.remove("active");
                item.parentNode.classList.remove("activeBg");
            }
        });
    };

    // export default {
    //     name: 'NavPage',
    //     data() {
    //         return {}
    //     },
    // }
</script>


<style scoped>
    .nav_box {
        width: 200px;
        height: 1006px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0px;
        padding: 50px 0 100px 0;
        border-radius: 0 30px 30px 0;
        background-color: #FFE76A;
        cursor: default;
        font-family: 'Outfit', sans-serif;
    }

    .nav_list,
    .nav_main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .nav_main p {
        margin: 20px 0 25px 0;
        color: #FFC61A;
        font-weight: 600;
        font-size: 22px;
        letter-spacing: 1px;
    }

    .nav_sub {
        width: 170px;
        margin: 25px 0 25px 30px;
        display: flex;
        z-index: 20;
        cursor: pointer;
        font-size: 20px;
        font-weight: 400;
        flex-direction: column;
        align-items: flex-start;
    }

    .nav_sub a {
        font-size: 18px;
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        z-index: 20;
        border-radius: 20px 0 0 20px;
    }

    a span {
        margin-left: 10px;
    }

    .active a {
        color: #FFC61A !important;
        z-index: 10;
    }

    .activeBg a {
        background-color: #F8F8FB;
        z-index: 10;
        width: 170px;
        height: 40px;
        /*transform: translateY(90px);*/
        transition-duration: 0.8s;
    }
</style>