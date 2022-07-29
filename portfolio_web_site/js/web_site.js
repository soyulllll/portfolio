/* 반응형 또는 아닐 때  */
let windowWidth = window.matchMedia("screen and (max-width: 480px)");
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


/* best item event */
let bestItem_time = 1;
$(function () {
    setInterval("bestItem()", 1000);

});

function bestItem() {
    $('#best_img_' + bestItem_time + " > img").css("opacity", "1");
    bestItem_time += 1;
    if (bestItem_time == 11) bestItem_time = 1;
    //$("#best_img_" + bestItem_time + " > img").attr("src", "./image/best_img_" + bestItem_time + "_on.png");
    $('#best_img_' + bestItem_time + " > img").css("opacity", "0");
};


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
    $("#content1_1").on("click", function(){
        $(".terms_of_use").animate({opacity: 1},1000);
    });

    $("#content1_2").on("click", function(){
        $(".information_box").animate({opacity: 1},1000);
    });

    $(".x_icon").on("click", function(){
        $(".terms_of_use").animate({opacity: 0},1000);
        $(".information_box").animate({opacity: 0},1000);
    });


    /* 아래로 스크롤 시 다음 컨텐츠 나타나기 */
    function isElementUnderBottom(elem, triggerDiff) {
        const {
            top
        } = elem.getBoundingClientRect();
        const {
            innerHeight
        } = window;
        return top > innerHeight + (triggerDiff || 0);
    }

    function handleScroll() {
        const elems = document.querySelectorAll('.up-on-scroll');
        elems.forEach(elem => {
            if (isElementUnderBottom(elem, -30)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateY(50px)';
            } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateY(0px)';
            }
        })
    }
    window.addEventListener('scroll', handleScroll);


    /* 페이지 이동 
    $("#sub_menu1").click(function () {
        location.href = './bag_shop.html';
    });
    $("#sub_menu2").click(function () {
        location.href = './shoes_shop.html';
    });
    $("#sub_menu3").click(function () {
        location.href = './clothes_shop.html';
    });
    $("#sub_menu4").click(function () {
        location.href = './acc_shop.html';
    });*/


    /* 룩북 마우스 호버  */
    $("#lookBook_content").on(
        "mouseover",
        function () {
            $("#lookBook_content").css("opacity", "50%");
            $("#lookBook_go").css("display", "block");
        }
    );
    $("#lookBook_content").on(
        "mouseout",
        function () {
            $("#lookBook_content").css("opacity", "100%");
            $("#lookBook_go").css("display", "none");
        }
    );


    /* 반응형 또는 아닐 때  */
    let windowWidth = window.matchMedia("screen and (max-width: 480px)");
    if (windowWidth.matches) { //screen and (max-width: 768px)에 해당한다.
        /* 메인 이미지 슬라이드  */
        $(document).ready(function () {
            let slide = 0;
            $("#main_img div").each(function () {
                $(this).css('left'.slide + "px");
                slide += 480;
            });
            setInterval(function () {
                $("#main_img div").each(function () {
                    var left = parseInt($(this).css('left'));
                    $(this).animate({
                        'left': '-=480px'
                    }, 1000, function () {
                        var left = parseInt($(this).css('left'));
                        if (left <= -480) {
                            $(this).css('left', '1440px');
                        }
                    });
                }).delay(1000);
            }, 4000);
        });

        /* 신상품 슬라이드*/
        $("#left_buttom").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "0"
            }, 2000);
            $("#left_buttom").css("background-color", "#fff");
            $("#right_buttom1").css("background-color", "#333");
            $("#right_buttom2").css("background-color", "#333");
            $("#right_buttom3").css("background-color", "#333");
            $("#right_buttom4").css("background-color", "#333");
            $("#right_buttom5").css("background-color", "#333");
        });
        $("#right_buttom1").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "100vw"
            }, 2000);
            $("#left_buttom").css("background-color", "#333");
            $("#right_buttom1").css("background-color", "#fff");
            $("#right_buttom2").css("background-color", "#333");
            $("#right_buttom3").css("background-color", "#333");
            $("#right_buttom4").css("background-color", "#333");
            $("#right_buttom5").css("background-color", "#333");
        });
        $("#right_buttom2").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "200vw"
            }, 2000);
            $("#left_buttom").css("background-color", "#333");
            $("#right_buttom1").css("background-color", "#333");
            $("#right_buttom2").css("background-color", "#fff");
            $("#right_buttom3").css("background-color", "#333");
            $("#right_buttom4").css("background-color", "#333");
            $("#right_buttom5").css("background-color", "#333");
        });
        $("#right_buttom3").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "300vw"
            }, 2000);
            $("#left_buttom").css("background-color", "#333");
            $("#right_buttom1").css("background-color", "#333");
            $("#right_buttom2").css("background-color", "#333");
            $("#right_buttom3").css("background-color", "#fff");
            $("#right_buttom4").css("background-color", "#333");
            $("#right_buttom5").css("background-color", "#333");
        });
        $("#right_buttom4").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "400vw"
            }, 2000);
            $("#left_buttom").css("background-color", "#333");
            $("#right_buttom1").css("background-color", "#333");
            $("#right_buttom2").css("background-color", "#333");
            $("#right_buttom3").css("background-color", "#333");
            $("#right_buttom4").css("background-color", "#fff");
            $("#right_buttom5").css("background-color", "#333");
        });
        $("#right_buttom5").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "500vw"
            }, 2000);
            $("#left_buttom").css("background-color", "#333");
            $("#right_buttom1").css("background-color", "#333");
            $("#right_buttom2").css("background-color", "#333");
            $("#right_buttom3").css("background-color", "#333");
            $("#right_buttom4").css("background-color", "#333");
            $("#right_buttom5").css("background-color", "#fff");
        });


        /* 메뉴 클릭했을 때 서브메뉴 나타내기*/
        $("#shop_click").on("click", function () {
            $("#lookbook_click").animate({
                "margin-top": "80px"
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
                "margin-top": "40px"
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
                "margin-top": "40px"
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


    } else { //screen and (max-width: 768px)에 해당하지 않는다.
        /* 메인 이미지 슬라이드  */
        $(document).ready(function () {
            let slide = 0;
            $("#main_img div").each(function () {
                $(this).css('left'.slide + "px");
                slide += 1920;
            });
            setInterval(function () {
                $("#main_img div").each(function () {
                    var left = parseInt($(this).css('left'));
                    $(this).animate({
                        'left': '-=1920px'
                    }, 1000, function () {
                        var left = parseInt($(this).css('left'));
                        if (left <= -1920) {
                            $(this).css('left', '5760px');
                        }
                    });
                }).delay(1000);
            }, 4000);
        });

        /* 신상품 슬라이드*/
        $("#left_buttom").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "0px"
            }, 2000);
            $("#left_buttom").css("background-color", "#fff");
            $("#right_buttom1").css("background-color", "#333");
        })
        $("#right_buttom1").on("click", function () {
            $(".new_arrival_slide_big_box").animate({
                "right": "1920px"
            }, 2000);
            $("#left_buttom").css("background-color", "#333");
            $("#right_buttom1").css("background-color", "#fff");
        })


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