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


    /* 스크롤 시 다음 컨텐츠 나타나기 */
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
        const elems2 = document.querySelectorAll('.up-on-scroll_2');
        elems.forEach(elem => {
            if (isElementUnderBottom(elem, -30)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateX(-3.6vw)';
            } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateX(-0vw)';
            }
        });

        elems2.forEach(elem => {
            if (isElementUnderBottom(elem, -30)) {
                elem.style.opacity = "0";
                elem.style.transform = 'translateX(3.6vw)';
            } else {
                elem.style.opacity = "1";
                elem.style.transform = 'translateX(0vw)';
            }
        })
    }
    window.addEventListener('scroll', handleScroll);



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