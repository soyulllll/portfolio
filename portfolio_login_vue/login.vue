<template>
    <div class="login_title_box">
        <h1>CUSME</h1>
    </div>

    <div class="login_button_box">
        <button :class="{'cbtn':btnClick ==='cbtn'}" id="consultant_btn" class="title_btn"
            @click="consultantBtn">CONSULTANT</button>
        <button :class="{'mbtn':btnClick ==='mbtn'}" id="master_btn" class="title_btn"
            @click="masterBtn">MASTER</button>
    </div>

    <div class="input_box">
        <form @submit.prevent="loginSubmit()">
            <label>
                <img alt="id" :src="require(`@/assets/image/icon/login_id.png`)">
                <input id="id" type="text" v-model="username" autocomplete="username" placeholder="ID" />
            </label>
            <label>
                <img alt="id" :src="require(`@/assets/image/icon/login_pw.png`)">
                <input id="pwd" type="password" autocomplete="current-password" v-model="password" placeholder="PW" />
            </label>
            <input :disabled="!username || !password" id="loginBtn" type="submit" value="LOG IN" />
        </form>
    </div>

    <div class="account_find_box">
        <button class="find_btn">ID/PW 찾기</button>
    </div>
</template>

<script>
    import {
        loginUser
    } from '@/api/index';

    export default {
        name: 'LoginPage',
        data() {
            return {
                btnClick: 'cbtn',
                username: '',
                password: '',
            };
        },

        methods: {
            consultantBtn: function () {
                let loginBtn = document.getElementById("loginBtn");
                if (this.btnClick === 'mbtn') {
                    this.btnClick = 'cbtn'
                    loginBtn.style.backgroundColor = "#FFED90"
                    loginBtn.style.color = "#4B4B51"
                }
            },

            masterBtn: function () {
                const loginBtn = document.getElementById("loginBtn");
                if (this.btnClick === 'cbtn') {
                    this.btnClick = 'mbtn'
                    loginBtn.style.backgroundColor = "#AB82DA"
                    loginBtn.style.color = "#fff"
                }
            },

            async loginSubmit() {
                try {
                    const userData = {
                        username: this.username,
                        password: this.password,
                    };

                    const {
                        data
                    } = await loginUser(userData);

                    //console.log(data.type);
                    console.log(data);
                    console.log(data.username);

                    //this.$store.commit('setToken', data.token);
                    //this.$store.commit('setUsername', data.user.username);

                    if (data.type == 'CONSULTANT') {
                        this.$router.push('/Notice');
                    }

                    if (data.type == 'ADMIN') {
                        this.$router.push('/master');
                    }

                    if (data.last_login == '') {
                        this.$router.push('/updatePw');
                    }

                } catch (error) {
                    console.log(error.response.data);
                    alert('아이디 또는 패스워드를 확인하세요.');
                } finally {
                    this.initForm();
                }
            },

            initForm() {
                this.username = '';
                this.password = '';
            },
        },
    }
</script>


<style scoped>
    /* main title */
    h1 {
        margin-top: 100px;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 3px;
    }

    /* title btn */
    .title_btn {
        width: 175px;
        padding: 17px 0;
        margin: 0 6.5px;
        margin-top: 65px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        border: none;
        border-radius: 30px;
        color: #C5C5D4;
        cursor: pointer;
        background-color: #fff;
    }

    .cbtn {
        color: #4B4B51;
        background-color: #FFF5C6;
    }

    .mbtn {
        color: #4B4B51;
        background-color: #E9EBFF;
    }

    /* input */
    label {
        width: 360px;
        margin: auto;
        position: relative;
        display: flex;
        align-items: flex-end;
    }

    img {
        position: absolute;
    }

    #id,
    #pwd {
        width: 330px;
        display: block;
        padding: 14px 50px;
        margin: auto;
        font-size: 14px;
        border: 1px solid #E9EBFF;
        border-radius: 12px;
    }

    ::placeholder {
        font-weight: 300;
        color: #9FA1B4;
    }

    #id {
        margin-top: 38px;
    }

    #pwd {
        margin-top: 15px;
    }

    #loginBtn {
        width: 360px;
        padding: 13px 0;
        margin-top: 38px;
        text-align: center;
        font-size: 14px;
        font-weight: bolder;
        color: #4B4B51;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        background-color: #FFED90;
    }

    /* account find btn */
    .find_btn {
        width: 360px;
        margin-top: 15px;
        text-align: right;
        font-size: 12px;
        border: none;
        cursor: pointer;
        color: #9FA1B4;
        background-color: #F8F8FB;
    }
</style>