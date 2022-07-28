/* 문자 방지  */
function inputCheck() {
    $("#content_number").val($("content_number").val().replace(/[^0-9]/g, ''));
};

/* 반응형 또는 아닐 때  */
let windowWidth = window.matchMedia("screen and (max-width: 768px)");
if (windowWidth.matches) { //screen and (max-width: 768px)에 해당한다.
    /* 사이드 메뉴 */
    function openNav() {
        document.getElementById("sidenav").style.width = "20vw";
        $(".menu_icon").css("opacity", "0");
    }

    function closeNav() {
        document.getElementById("sidenav").style.width = "0";
        $(".menu_icon").css("opacity", "1");
    }

} else { //screen and (max-width: 768px)에 해당하지 않는다.
    /* 사이드 메뉴 */
    function openNav() {
        document.getElementById("sidenav").style.width = "13vw";
        $(".menu_icon").css("opacity", "0");
    }

    function closeNav() {
        document.getElementById("sidenav").style.width = "0";
        $(".menu_icon").css("opacity", "1");
    }
}


window.onload = function () {

    /* 새로고침 시 맨 위로 */
    setTimeout(function () {
        scroll(0, 0);
    }, 100);


    $("#top_icon").on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /* 이용약관 클릭*/
    $("#content1_1").on("click", function () {
        $(".terms_of_use").animate({
            opacity: 1
        }, 1000);
    });

    $("#content1_2").on("click", function () {
        $(".information_box").animate({
            opacity: 1
        }, 1000);
    });

    $(".x_icon").on("click", function () {
        $(".terms_of_use").animate({
            opacity: 0
        }, 1000);
        $(".information_box").animate({
            opacity: 0
        }, 1000);
    });


    $("#content_cart, #content_shopping").on("click", function () {
        $(".detail_all_box").css("display", "none");
        $(".popup_box").css("display", "block");
    })

    $("#back_ok").on("click", function () {
        $(".detail_all_box").css("display", "block");
        $(".popup_box").css("display", "none");
    });


    /* 서브이미지 변경 */
    $("#sub_picture_1").on("click", function () {
        $("#detail_main_picture").attr('src', './image/shop_bag_img_1.jpg');
    });
    $("#sub_picture_2").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_2.jpg');
    });
    $("#sub_picture_3").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_3.jpg');
    });
    $("#sub_picture_4").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_4.jpg');
    });
    $("#sub_picture_5").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_5.jpg');
    });
    $("#sub_picture_6").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_6.jpg');
    });
    $("#sub_picture_7").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_7.jpg');
    });
    $("#sub_picture_8").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_8.jpg');
    });
    $("#sub_picture_9").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_9.jpg');
    });
    $("#sub_picture_10").on("click", function () {
        $("#detail_main_picture").attr('src', './image/sub_picture_10.jpg');
    });


    /* 상품 수량 증가 */
    function test() {
        let number_buttom = $("#content_number").val();
        let price_number = "";
        const price_buttom = 288000;
        $("#plus_icon").on("click", function () {
            if ($("#content_number").val() < 10) {
                number_buttom++;
                $("#content_number").val(number_buttom);

                price_number += price_buttom - 1;
                $("#price_box").html(price_number++);
                comma = price_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                $("#price_box").html(comma);
            }
        });
        $("#minus_icon").on("click", function () {
            if ($("#content_number").val() > 0) {
                number_buttom--;
                $("#content_number").val(number_buttom);

                price_number -= price_buttom - 1;
                $("#price_box").html(price_number--);
                comma = price_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                $("#price_box").html(comma);
            }
        });

        /* 색상 클릭 */
        $("#black_button").on("click", function () {
            $("#black_text").css("display", "inline-block");
            $("#white_text").css("display", "none");
            $("#brown_text").css("display", "none");
            $("#plus_icon").css("display", "inline-block");
            $("#minus_icon").css("display", "inline-block");
            $("#content_number").css("display", "inline-block");
        });

        $("#white_button").on("click", function () {
            $("#black_text").css("display", "none");
            $("#white_text").css("display", "inline-block");
            $("#brown_text").css("display", "none");
            $("#plus_icon").css("display", "inline-block");
            $("#minus_icon").css("display", "inline-block");
            $("#content_number").css("display", "inline-block");
        });

        $("#brown_button").on("click", function () {
            $("#black_text").css("display", "none");
            $("#white_text").css("display", "none");
            $("#brown_text").css("display", "inline-block");
            $("#plus_icon").css("display", "inline-block");
            $("#minus_icon").css("display", "inline-block");
            $("#content_number").css("display", "inline-block");
        });

        $("#black_button, #white_button, #brown_button").on("click", function () {
            number_buttom = "";
            price_number = "";
            $("#content_number").val("");
            $("#price_box").html("");
        });
    }
    test();


    let windowWidth = window.matchMedia("screen and (max-width: 768px)");
    if (windowWidth.matches) { //screen and (max-width: 768px)에 해당한다.

    } else { //screen and (max-width: 768px)에 해당하지 않는다.
        /* 메뉴 클릭했을 때 서브메뉴 나타내기*/
        $("#shop_click").on("click", function () {
            $("#lookbook_click").animate({
                "margin-top": "150px"
            });
            $(".click_buttom").css("margin-top", "0");
            $("#sub_big_menu1").animate({
                "opacity": "1"
            }, 1500);
            $("#sub_big_menu1").css("display", "block");
            $("#sub_big_menu2").animate({
                "opacity": "0"
            });
            $("#sub_big_menu2").css("display", "none");
            $("#sub_big_menu3").animate({
                "opacity": "0"
            });
            $("#sub_big_menu3").css("display", "none");
        });

        $("#lookbook_click").on("click", function () {
            $("#customer_click").animate({
                "margin-top": "50px"
            });
            $(".click_buttom").css("margin-top", "0");
            $("#sub_big_menu1").animate({
                "opacity": "0"
            });
            $("#sub_big_menu1").css("display", "none");
            $("#sub_big_menu2").animate({
                "opacity": "1"
            }, 1500);
            $("#sub_big_menu2").css("display", "block");
            $("#sub_big_menu3").animate({
                "opacity": "0"
            });
            $("#sub_big_menu3").css("display", "none");
        });

        $("#customer_click").on("click", function () {
            $("#contact_click").animate({
                "margin-top": "50px"
            });
            $(".click_buttom").css("margin-top", "0");
            $("#sub_big_menu1").animate({
                "opacity": "0"
            });
            $("#sub_big_menu1").css("display", "none");
            $("#sub_big_menu2").animate({
                "opacity": "0"
            });
            $("#sub_big_menu2").css("display", "none");
            $("#sub_big_menu3").animate({
                "opacity": "1"
            }, 1500);
            $("#sub_big_menu3").css("display", "block");
        });

        $("#home_click, #about_click, #contact_click").on("click", function () {
            $(".click_buttom").css("margin-top", "0");
            $("#sub_big_menu1").animate({
                "opacity": "0"
            });
            $("#sub_big_menu1").css("display", "none");
            $("#sub_big_menu2").animate({
                "opacity": "0"
            });
            $("#sub_big_menu2").css("display", "none");
            $("#sub_big_menu3").animate({
                "opacity": "0"
            });
            $("#sub_big_menu3").css("display", "none");
        });
    }
}