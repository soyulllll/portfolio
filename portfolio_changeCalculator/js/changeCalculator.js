window.onload = function () {
    /* 엔터키 작동X */
    $(document).keydown(function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            e.preventDefault()
        };
    });
    /* 이미지 슬라이드 */
    $(document).ready(function () {
        let slide = 0;
        $("#storeContentBox div").each(function () {
            $(this).css('left'.slide + "px");
            slide += 480;
        });
        setInterval(function () {
            $("#storeContentBox div").each(function () {
                var left = parseInt($(this).css('left'));
                $(this).animate({
                    'left': '-=480px'
                }, 1000, function () {
                    var left = parseInt($(this).css('left'));
                    if (left <= -480) {
                        $(this).css('left', '1920px');
                    }
                });
            }).delay(1000);
        }, 4000);
    });

    $(".numberBox1").on(
        "mouseover",
        function () {
            $(".storeName1").css("display", "block");
        }
    );
    $(".numberBox1").on(
        "mouseout",
        function () {
            $(".storeName1").css("display", "none");
        }
    );
    $(".numberBox2").on(
        "mouseover",
        function () {
            $(".storeName2").css("display", "block");
        }
    );
    $(".numberBox2").on(
        "mouseout",
        function () {
            $(".storeName2").css("display", "none");
        }
    );
    $(".numberBox3").on(
        "mouseover",
        function () {
            $(".storeName3").css("display", "block");
        }
    );
    $(".numberBox3").on(
        "mouseout",
        function () {
            $(".storeName3").css("display", "none");
        }
    );
    $(".numberBox4").on(
        "mouseover",
        function () {
            $(".storeName4").css("display", "block");
        }
    );
    $(".numberBox4").on(
        "mouseout",
        function () {
            $(".storeName4").css("display", "none");
        }
    );
    $(".numberBox5").on(
        "mouseover",
        function () {
            $(".storeName5").css("display", "block");
        }
    );
    $(".numberBox5").on(
        "mouseout",
        function () {
            $(".storeName5").css("display", "none");
        }
    );

    /* 이미지 클릭하면 금액 나오기 */
    let comma = "";
    let totalPrice = 0;
    let totalResult = 0;
    let startCount = [1, 1, 1, 1, 1];
    const totalMoney = [1950, 2000, 1780, 1990, 1500];
    const chargeMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
    const chargeText = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
    $(".storeImg1, .storeImg2, .storeImg3, .storeImg4, .storeImg5").on("click", function () {
        let $this = $(this);
        if ($this.hasClass("storeImg1")) {
            totalPrice += totalMoney[0];
            $(".numberBox1").html(startCount[0]++);
        } else if ($this.hasClass("storeImg2")) {
            totalPrice += totalMoney[1];
            $(".numberBox2").html(startCount[1]++);
        } else if ($this.hasClass("storeImg3")) {
            totalPrice += totalMoney[2];
            $(".numberBox3").html(startCount[2]++);
        } else if ($this.hasClass("storeImg4")) {
            totalPrice += totalMoney[3];
            $(".numberBox4").html(startCount[3]++);
        } else if ($this.hasClass("storeImg5")) {
            totalPrice += totalMoney[4];
            $(".numberBox5").html(startCount[4]++);
        };
        comma = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#totalBox").html(comma);
    });

    $(".money50000, .money10000, .money5000, .money1000, .money500, .money100, .money50, .money10").on("click", function () {
        let $this = $(this);
        if ($this.hasClass("money50000")) {
            totalResult += chargeMoney[0];
        } else if ($this.hasClass("money10000")) {
            totalResult += chargeMoney[1];
        } else if ($this.hasClass("money5000")) {
            totalResult += chargeMoney[2];
        } else if ($this.hasClass("money1000")) {
            totalResult += chargeMoney[3];
        } else if ($this.hasClass("money500")) {
            totalResult += chargeMoney[4];
        } else if ($this.hasClass("money100")) {
            totalResult += chargeMoney[5];
        } else if ($this.hasClass("money50")) {
            totalResult += chargeMoney[6];
        } else if ($this.hasClass("money10")) {
            totalResult += chargeMoney[7];
        };
        comma = totalResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#chargeBox").html(comma);
    });

    /* 계산하기 */
    let totalChange1 = "";
    let totalChange2 = "";
    let allChange = "";
    let allMoney1 = "";
    let allMoney2 = "";
    $("#payBox").click(function () {
        if ($("#totalBox").html() == '' && $("#chargeBox").html() == '') {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">음식을 선택한 후 금액을 지불해 주세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
        if ($("#totalBox").html() == '') {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">음식을 선택해 주세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
        if ($("#chargeBox").html() == '') {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">금액을 지불해 주세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
        if (totalResult < totalPrice) {
            $(".xWindow").css("display", "block");
            $(".contentBox").prepend('<div class = "textPlus">지불하신 금액이 부족합니다.</div>');
            $(".closeBtn").on("click", function () {
                $(".xWindow").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        };
        /* 숫자를 ","있는 스트링으로 변환 */
        totalChange1 += $("#chargeBox").html();
        totalChange1 = totalChange1.replace(/,/g, "");

        totalChange2 += $("#totalBox").html();
        totalChange2 = totalChange2.replace(/,/g, "");

        allChange = parseInt(totalChange1) - parseInt(totalChange2);

        comma = allChange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#firstResul").html(comma);
        totalChange1 = "";
        totalChange2 = "";
        $("#allMoney").css("display", "block");

        /* 장 수 나타내기 */
        chargeText[0] = parseInt(allChange / 50000);
        chargeText[1] = parseInt(allChange % 50000 / 10000);
        chargeText[2] = parseInt((allChange % 10000) / 5000);
        chargeText[3] = parseInt((allChange % 5000) / 1000);
        chargeText[4] = parseInt((allChange % 1000) / 500);
        chargeText[5] = parseInt((allChange % 500) / 100);
        chargeText[6] = parseInt((allChange % 100) / 50);
        chargeText[7] = parseInt((allChange % 50) / 10);
        allMoney1 += '<div class = "allText1">';
        allMoney1 += chargeText[0] + '장' + '<br>';
        allMoney1 += chargeText[1] + '장' + '<br>';
        allMoney1 += chargeText[2] + '장' + '<br>';
        allMoney1 += chargeText[3] + '장' + '<br>';
        allMoney1 += '</div>';
        allMoney2 += '<div class = "allText2">';
        allMoney2 += chargeText[4] + '개' + '<br>';
        allMoney2 += chargeText[5] + '개' + '<br>';
        allMoney2 += chargeText[6] + '개' + '<br>';
        allMoney2 += chargeText[7] + '개' + '<br>';
        allMoney2 += '</div>';
        $(".allText1").detach();
        $(".allText2").detach();
        $("#resulText").prepend(allMoney1, allMoney2);
        allMoney1 = "";
        allMoney2 = "";
    });


    $("#resetBox").on("click", function () {
        totalPrice = 0;
        totalResult = 0;
        totalChange1 = "";
        totalChange2 = "";
        allChange = "";
        allMoney1 = "";
        allMoney2 = "";
        startCount = [1, 1, 1, 1, 1];
        parseFloat($("#chargeBox").html(""));
        parseFloat($("#totalBox").html(""));
        parseFloat($("#firstResul").html(""));
        parseFloat($("#resulText").html(""));
        $(".allMoney").css("display", "none");
        $(".numberBox1").html("");
        $(".numberBox2").html("");
        $(".numberBox3").html("");
        $(".numberBox4").html("");
        $(".numberBox5").html("");
    });
};