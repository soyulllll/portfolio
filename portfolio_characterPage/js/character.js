window.onload = function () {
    /* page load - scroll top */
    $(function () {
        $("html, body").animate({
            scrollTop: 0
        });
    });

    /* 빙하 클릭 시 메인 페이지 이동 */
    $("#go_home_img_1, #go_home_img_2, #go_home_img_3").on('click', function () {
        location.href = '#main_page_1';

        /* 마이콜 멘트 삭제 */
        setTimeout(function () {
            //사용했던 변수 초기화
            typingBool = false;
            liIndex = 0;
            typingIdx = -0;

            //첫번째 문장으로 셋팅
            typingTxt = $(".rt_text_content_box_4>ul>li").eq(liIndex).text();
            //타이핑 결과 모두 지우기
            $(".text_typing ul li").html("")

            //반복시작
            tyInt = setInterval(typing, 100);
        }, 1000);

        // 캐릭터 소개 리셋
        $(".int_str p:first-child").animate({
            opacity: 1
        }, 1000);
        $(".int_str p:nth-child(2)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(3)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(4)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(5)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(6)").animate({
            opacity: 0
        }, 100);

        /* 2, 3, 4페이지 안보이게 */
        $("#page_all_2, #page_all_3, #page_all_4_1, #page_all_4_2").animate({
            opacity: 0
        }, 1000);

        /* 메인 페이지 나타나게 */
        $("#main_crt_img2").animate({
            width: '50%',
            marginLeft: '40%',
            marginTop: '10%',
            opacity: 0
        }, 1000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").animate({
            opacity: 1
        }, 1000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").css(
            "display", "block",
        );

        //오프닝 동영상 사라지게
        $(".open_move, .story_close").animate({
            opacity: 0
        }, 100);
        $(".open_move iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        $(".crt_content_box_4 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });


    /* 캐릭터에 마우스 호버 시 콘텐츠 알림창 */
    $("#crt_img_1").on(
        "mouseover",
        function () {
            $("#content_text_box_1").animate({
                opacity: 1
            }, 1000);
        }
    );
    $("#crt_img_2").on(
        "mouseover",
        function () {
            $("#content_text_box_2").animate({
                opacity: 1
            }, 1000);
        }
    );
    $("#crt_img_3").on(
        "mouseover",
        function () {
            $("#content_text_box_3").animate({
                opacity: 1
            }, 1000);
        }
    );
    $("#crt_img_4").on(
        "mouseover",
        function () {
            $("#content_text_box_4").animate({
                opacity: 1
            }, 1000);
        }
    );
    $("#crt_img_5").on(
        "mouseover",
        function () {
            $("#content_text_box_5").animate({
                opacity: 1
            }, 1000);
        }
    );


    /* 캐릭터에 마우스 아웃 시 콘텐츠 사라지게 */
    $("#crt_img_1").on(
        "mouseout",
        function () {
            $("#content_text_box_1").animate({
                opacity: 0
            }, 10);
        }
    );
    $("#crt_img_2").on(
        "mouseout",
        function () {
            $("#content_text_box_2").animate({
                opacity: 0
            }, 10);
        }
    );
    $("#crt_img_3").on(
        "mouseout",
        function () {
            $("#content_text_box_3").animate({
                opacity: 0
            }, 10);
        }
    );
    $("#crt_img_4").on(
        "mouseout",
        function () {
            $("#content_text_box_4").animate({
                opacity: 0
            }, 10);
        }
    );
    $("#crt_img_5").on(
        "mouseout",
        function () {
            $("#content_text_box_5").animate({
                opacity: 0
            }, 10);
        }
    );


    /* 도우너 클릭 시 줄거리 페이지 이동 */
    $("#crt_img_1").on('click', function () {
        $("#page_all_2").animate({
            opacity: 1
        }, 3000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").animate({
            opacity: 0
        }, 1000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").css(
            "display", "none",
        );

        $("#main_crt_img2").animate({
            width: '30%',
            marginLeft: '2000px',
            marginTop: '25%',
            opacity: 1
        }, 1000);
        location.href = '#main_page_2';
    });

    //꼴뚜기왕자 클릭 시 오프닝 동영상 나타나기
    $(".open_img").on('click', function () {
        $(".open_move, .story_close").animate({
            opacity: 1
        }, 1000);
    })

    //오프닝 동영상 사라지게
    $(".story_close").on('click', function () {
        $(".open_move, .story_close").animate({
            opacity: 0
        }, 100);

        $(".open_move iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });


    /* 둘리 클릭 시 캐릭터 소개 페이지 이동 */
    $("#crt_img_2").on('click', function () {
        $("#page_all_3").animate({
            opacity: 1
        }, 3000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").animate({
            opacity: 0
        }, 1000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").css(
            "display", "none",
        );

        $("#main_crt_img2").animate({
            width: '30%',
            marginLeft: '3920px',
            marginTop: '25%',
            opacity: 1
        }, 1000);
        location.href = '#main_page_3';
    });

    //캐릭터 소개 글
    $(".crt_int_1").on('click', function () {
        $(".int_str p:first-child").animate({
            opacity: 1
        }, 1000);
        $(".int_str p:nth-child(2)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(3)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(4)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(5)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(6)").animate({
            opacity: 0
        }, 100);
    });

    $(".crt_int_2").on('click', function () {
        $(".int_str p:first-child").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(2)").animate({
            opacity: 1
        }, 1000);
        $(".int_str p:nth-child(3)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(4)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(5)").animate({
            opacity: 0
        }, 100)
        $(".int_str p:nth-child(6)").animate({
            opacity: 0
        }, 100)
    });

    $(".crt_int_3").on('click', function () {
        $(".int_str p:first-child").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(2)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(3)").animate({
            opacity: 1
        }, 1000);
        $(".int_str p:nth-child(4)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(5)").animate({
            opacity: 0
        }, 100)
        $(".int_str p:nth-child(6)").animate({
            opacity: 0
        }, 100)
    });

    $(".crt_int_4").on('click', function () {
        $(".int_str p:first-child").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(2)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(3)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(4)").animate({
            opacity: 1
        }, 1000);
        $(".int_str p:nth-child(5)").animate({
            opacity: 0
        }, 100)
        $(".int_str p:nth-child(6)").animate({
            opacity: 0
        }, 100)
    });

    $(".crt_int_5").on('click', function () {
        $(".int_str p:first-child").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(2)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(3)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(4)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(5)").animate({
            opacity: 1
        }, 1000)
        $(".int_str p:nth-child(6)").animate({
            opacity: 0
        }, 100)
    });

    $(".crt_int_6").on('click', function () {
        $(".int_str p:first-child").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(2)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(3)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(4)").animate({
            opacity: 0
        }, 100);
        $(".int_str p:nth-child(5)").animate({
            opacity: 0
        }, 100)
        $(".int_str p:nth-child(6)").animate({
            opacity: 1
        }, 1000)
    });


    /* 마이콜 클릭 시 동영상 페이지 이동 */
    $("#crt_img_4").on('click', function () {

        // 텍스트 타이핑 효과
        var typingBool = false;
        var typingIdx = 0;
        var liIndex = 0;
        var liLength = $(".crt_text_content_box_4>ul>li").length;

        // 타이핑될 텍스트를 가져온다 
        var typingTxt = $(".crt_text_content_box_4>ul>li").eq(liIndex).text();
        //liIndex 인덱스로 구분해 한줄씩 가져옴

        typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;
            var tyInt = setInterval(typing, 100); // 반복동작 
        }

        function typing() {
            $(".text_typing ul li").removeClass("on");
            $(".text_typing ul li").eq(liIndex).addClass("on");
            //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                $(".text_typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++;
            } else { //한문장이끝나면
                if (liIndex < liLength - 1) {
                    //다음문장으로  가기위해 인덱스를 1증가
                    liIndex++;
                    //다음문장을 타이핑하기위한 셋팅
                    typingIdx = 0;
                    typingBool = false;
                    typingTxt = $(".crt_text_content_box_4>ul>li").eq(liIndex).text();

                    //다음문장 타이핑전 1초 쉰다
                    clearInterval(tyInt);
                    //타이핑종료

                    setTimeout(function () {
                        //1초후에 다시 타이핑 반복 시작
                        tyInt = setInterval(typing, 100);
                    }, 1000);
                } else if (liIndex == liLength - 1) {

                    //마지막 문장까지 써지면 반복종료
                    clearInterval(tyInt);
                }
            }
        }

        $("#page_all_4_1").animate({
            opacity: 1
        }, 3000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").animate({
            opacity: 0
        }, 1000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").css(
            "display", "none",
        );


        $("#main_crt_img2").animate({
            width: '30%',
            marginLeft: '5840px',
            marginTop: '25%',
            opacity: 1
        }, 1000);
        location.href = '#main_page_4';
    });


    /* 또치 클릭 시 갤러리 페이지 이동 */
    $("#crt_img_5").on('click', function () {
        $("#page_all_4_2").animate({
            opacity: 1
        }, 3000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").animate({
            opacity: 0
        }, 1000);
        $("#main_crt_img, #crt_img_1, #crt_img_2, #crt_img_3, #crt_img_4, #crt_img_5, #flag_img").css(
            "display", "none",
        );


        $("#main_crt_img2").animate({
            width: '30%',
            marginLeft: '5840px',
            marginTop: '25%',
            opacity: 1
        }, 1000);
        location.href = '#main_page_4';
    })

    //이미지 클릭 시 확대
    $(".close").on('click', function () {
        $("#gallery_box").css("display", "none");
    });

    let gallerySubImgStr = $("#gallery_box img");

    function imgChange() {
        $("#gallery_img_1").on("click", function () {
            $("#gallery_box").css("display", "block");
            $("#gallery_box").html(gallerySubImgStr[0]);
        });
        $("#gallery_img_2").on("click", function () {
            $("#gallery_box").css("display", "block");
            $("#gallery_box").html(gallerySubImgStr[1]);
        });
        $("#gallery_img_3").on("click", function () {
            $("#gallery_box").css("display", "block");
            $("#gallery_box").html(gallerySubImgStr[2]);
        });
        $("#gallery_img_4").on("click", function () {
            $("#gallery_box").css("display", "block");
            $("#gallery_box").html(gallerySubImgStr[3]);
        });
        $("#gallery_img_5").on("click", function () {
            $("#gallery_box").css("display", "block");
            $("#gallery_box").html(gallerySubImgStr[4]);
        });
    }
    imgChange();
}