<template>
    <div class="home">
        <div class="ct_nav">
            <ConsultantNav />
        </div>
        <div class="ct_body">
            <h1>Consulting</h1>
            <span class="all_count">Total {{ list.count }} Remains</span>

            <!-- consulting list -->
            <div class="list_box">
                <ul class="list_name">
                    <li>ver.</li>
                    <li>D-day</li>
                    <li>ID</li>
                    <li>Style Quiz</li>
                    <li>Result</li>
                </ul>

                <ul class="list_detail" v-for="item in list.results" v-bind:key="item">
                    <li class="list_ver"
                        v-bind:class="{blue: item.type === '3_hair_custom_consulting', green: item.type === '2_hair_one_pick_consulting', pink: item.type === '1_hair_free_consulting'}">
                        <div v-if="item.type === '3_hair_custom_consulting'">Custom</div>
                        <div v-if="item.type === '2_hair_one_pick_consulting'">1Pick</div>
                        <div v-if="item.type === '1_hair_free_consulting'">Free</div>
                    </li>
                    <li>D{{item.d_day[0].d_day}}</li>
                    <li>{{item.customer_user_name[0].username}}</li>

                    <li v-if="item.type === '3_hair_custom_consulting'"><button class="list_view"
                            v-on:click="view_custom()" type="button">View</button></li>
                    <li v-if="item.type === '2_hair_one_pick_consulting'"><button class="list_view"
                            v-on:click="view_one_pick()" type="button">View</button></li>
                    <li v-if="item.type === '1_hair_free_consulting'"><button class="list_view"
                            v-on:click="view_free()" type="button">View</button></li>

                    <li v-if="item.type === '3_hair_custom_consulting'"><button class="list_register"
                    v-on:click="result_custom()" type="button">Register</button></li>
                    <li v-if="item.type === '2_hair_one_pick_consulting'"><button class="list_register"
                    v-on:click="result_one_pick()" type="button">Register</button></li>
                    <li v-if="item.type === '1_hair_free_consulting'"><button class="list_register"
                    v-on:click="result_free()" type="button">Register</button></li>
                </ul>
            </div>

            <!-- pagination -->
            <div class="paging_box">
                <button type="button" :disabled="list.pageNumber === 1" @click="prevPage(list.pageNumber-1)"
                    class="page-btn">
                    <img alt="before_page" :src="require(`@/assets/image/icon/before_page.png`)">
                </button>
                <div v-for="(item, index) in list.pageCount" :key="index" @click="allList(index+1)"
                    :class="{act : index+1 === list.pageNumber}" class="page-count">{{ index+1 }}</div>
                <button type="button" :disabled="list.pageNumber === list.pageCount"
                    @click="nextPage(list.pageNumber+1)" class="page-btn">
                    <img alt="next_page" :src="require(`@/assets/image/icon/next_page.png`)">
                </button>
            </div>
        </div>

        <!-- view modal -->
        <!-- <div class="modal_box" v-show="is_show">
            <div class="view_content">
                <div class="main_name">
                    <img class="close_button" alt="close_button" @click="handle_toggle"
                        :src="require(`@/assets/image/icon/close_button.png`)">
                    <span>Style Quiz</span>
                </div>
                <div class="view_img_box">
                    <div class="view_img"></div>
                    <span>정면사진</span>
                    <button>확대보기</button>
                </div>
            </div>
        </div> -->
    </div>
</template>


<script>
    import axios from 'axios';
    import ConsultantNav from '@/pages/consultant/ConsultantNav.vue';

    export default {
        name: 'ConsultingList',
        components: {
            ConsultantNav,
        },
        created() {
            this.allList(1);
        },
        data() {
            return {
                list: [],
                is_show: false,
                pop: null,
            }
        },
        computed: {
            totalpage() {
                if (this.list.count == 0) {
                    return 1;
                } else {
                    return Math.ceil(this.list.count / 10);
                }
            }
        },
        methods: {
            allList(page) {
                const params = {
                    params: {
                        page: page,
                        size: 10
                    }
                }
                axios.get('', params)
                    .then((res) => {
                        this.list = res.data
                        console.log(res)
                    }).catch(err => console.error(err))
            },
            testfl() {
                console(this.value)
            },
            // view: function () {
            //     this.is_show = !this.is_show;
            // },

            view_free() {
                this.pop = window.open("/ViewFreePopup");
            },
            view_one_pick() {
                this.pop = window.open("/ViewOnepickPopup");
            },
            view_custom() {
                this.pop = window.open("/ViewCustomPopup");
            },
            result_free() {
                this.$router.push('/RegisterResultFree');
            },
            result_one_pick() {
                this.$router.push('/RegisterResultOnepick');
            },
            result_custom() {
                this.$router.push('/RegisterResultCustom');
            }
        },
    }
</script>


<style scoped>
    .ct_body {
        width: 1000px;
        cursor: default;
        margin: auto;
        margin-top: 100px;
        font-family: 'Outfit', sans-serif;
    }

    .ct_body h1 {
        margin-bottom: 60px;
        font-size: 30px;
        font-weight: 500;
        text-align: center;
    }

    .all_count {
        display: table;
        padding: 8px 18px;
        font-size: 15px;
        color: #8C93DB;
        background-color: #E9EBFF;
        border-radius: 8px;
        letter-spacing: 1px;
    }

    .list_name,
    .list_detail {
        display: flex;
        align-items: center;
        margin-top: 20px;
        text-align: center;
    }

    .list_name li {
        width: calc(100%/5);
        font-size: 15px;
        font-weight: 400;
        color: #cacaca;
    }

    .list_detail {
        width: 100%;
        height: 50px;
        background-color: #fff;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 300;
        box-shadow: 2px 4px 15px rgba(158, 158, 169, 0.25);
    }

    .list_detail li {
        width: calc(100%/5);
        font-weight: 300;
    }

    .list_ver div {
        font-weight: 500;
    }

    .list_view {
        width: 100px;
        padding: 8px 35px;
        color: #FFC61A;
        background-color: #FFF7D1;
        border-radius: 7px;
        cursor: pointer;
        border: none;
    }

    .list_register {
        width: 100px;
        padding: 8px 24px;
        color: #FF4000;
        background-color: rgba(255, 64, 0, 0.2);
        border-radius: 7px;
        cursor: pointer;
        border: none;
    }

    .blue {
        color: #77ACF2;
    }

    .pink {
        color: #F28DB2;
    }

    .green {
        color: #53A62D;
    }

    /* modal */
    /* .modal_box {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .view_content {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 640px;
        height: auto;
        padding: 30px;
        background-color: #fff;
        border-radius: 20px;
        transform: translateX(-50%) translateY(-50%);
    }

    .main_name {
        position: relative;
        margin-bottom: 50px;
    }

    .close_button {
        cursor: pointer;
        position: absolute;
        right: 0;
        top: 0;
    }

    .view_img_box {
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0px 8.47px 27.85px rgb(150 163 207 / 27%);
    }

    .view_img_box button {
        float: right;
    } */

    .paging_box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    .paging_box button {
        height: 24px;
        border: none;
        padding: 0 10px;
        cursor: pointer;
        background-color: transparent;
    }

    .page-count {
        font-weight: 300;
    }

    .act {
        font-weight: 700;
    }
</style>