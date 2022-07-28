/* 문자 방지 시작  */
function inputCheckA(id) {
    $("#" + id).val($("#" + id).val().replace(/[^-0-9]/g, ''));
};

function inputCheck() {
    $(".aXBox").val($(".aXBox").val().replace(/[^-0-6]/g, ''));
    $(".aYBox").val($(".aYBox").val().replace(/[^-0-6]/g, ''));
    $(".bXBox").val($(".bXBox").val().replace(/[^-0-6]/g, ''));
    $(".bYBox").val($(".bYBox").val().replace(/[^-0-6]/g, ''));
};
/* 문자 방지 끝  */

window.onload = function () {
    /* a 행렬박스 만들기 시작 */
    /* 행과 렬 변수를 만들어서 처음 0으로 지정 */
    let a_y = 0;
    let a_x = 0;
    let b_y = 0;
    let b_x = 0;
    /* playBox 버튼을 누를 때 밑의 식이 실행됨 */
    $("#playBox").click(function () {
        /* 먼저 행과 열을 각각 a_y, a_x로 지정해줌으로써 구문이 짧아지는 장점 */
        a_y = $(".aYBox").val();
        a_x = $(".aXBox").val();
        /* a 행렬박스 만들기 시작 */
        /* 행에 값이 없을 때 창띄우기 */
        if (a_y == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A의 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }
        /* 열에 값이 없을 때 창띄우기 */
        if (a_x == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A의 행을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }
        /* aTalbeStr 안에 table 넣기( table 쓰는 방법 공부 ) */
        let aTalbeStr = "<table>";
        /* 반복문을 실행하여 table 안의 tr(y)와 td(x)값을 실행시키기 */
        for (let i = 0; i < a_y; i++) {
            /* tr(y)행이 한번 실행될 때 -> */
            aTalbeStr += "<tr>";
            for (let k = 0; k < a_x; k++) {
                /* td(x)열도 한번 실행됨 ( input박스로 실행됨, css 주기 )( i와 k 사이에 "" 쓰는 이유는 두개가 더해지는 것을 방지하기 위함 ) -> */
                aTalbeStr += "<td><input class = 'aInputClass' id='aNumber" + i + "" + k + "' type = 'text' maxlength='4' min = '0' max = '100' step = '1' value='' onKeyup = \"inputCheckA('aNumber" + i + "" + k + "')\"></td>";
            }
            aTalbeStr += "</tr>";
        }
        aTalbeStr += "</table>";
        /* aPrintBox 불러와서 innerHTML 방식으로 aTalbeStr를 aPrintBox에 집어넣음 */
        $("#aPrintBox").html(aTalbeStr);
        /* a 행렬박스 만들기 끝 */

        /* b 행렬박스 만들기 시작 */
        b_y = $(".bYBox").val();
        b_x = $(".bXBox").val();
        if (b_y == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">B의 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }
        if (b_x == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">B의 행을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }

        let bTalbeStr = "<table>";
        for (let i = 0; i < b_y; i++) {
            bTalbeStr += "<tr>";
            for (let k = 0; k < b_x; k++) {
                bTalbeStr += "<td><input class = 'bInputClass' id='bNumber" + i + "" + k + "' type = 'text' maxlength='4' min = '0' max = '100' step = '1' value='' onKeyup = \"inputCheckA('bNumber" + i + "" + k + "')\"></td>";
            }
            bTalbeStr += "<tr>";
        }
        bTalbeStr += "</table>";
        $("#bPrintBox").html(bTalbeStr);
        /* b 행렬박스 만들기 끝 */
    });

    /* + 박스 시작 */
    $("#plusBox").click(function () {
        if (a_y == "" || b_y == "" || a_x == "" || b_x == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A와 B의 행과 열을 생성하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }
        if (a_y != b_y || a_x != b_x) {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A와 B의 행과 열을 같게 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }

        let number = "";
        let comma = "";
        let abTalbeStr = "<table>";
        for (let i = 0; i < a_y; i++) {
            abTalbeStr += "<tr>";
            for (let k = 0; k < b_x; k++) {
                if ($('#aNumber' + i + "" + k).val() == '' || $('#bNumber' + i + "" + k).val() == '') {
                    $(".alertBigBox").css("display", "block");
                    $(".alertSmallBox").prepend('<div class = "textPlus">빈 값을 입력해주세요.</div>');
                    $(".closeBtn").on("click", function () {
                        $(".alertBigBox").css("display", "none");
                        $(".textPlus").detach();
                    });
                    return;
                } else {
                    abTalbeStr += "<td class = 'abInputClass'>";
                    abTalbeStr += (Number($('#aNumber' + i + "" + k).val()) + Number($('#bNumber' + i + "" + k).val()));
                    abTalbeStr += "</td>";
                }
            }
            abTalbeStr += "<tr>";
        }
        abTalbeStr += "</table>";
        number = abTalbeStr;
        comma = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#printBox").html(comma);
        /* 박스 초기화 */
        $("#printBox").val("");
    });
    /* + 박스 끝  */

    /* - 박스 시작 */
    $("#minusBox").click(function () {
        if (a_y == "" || b_y == "" || a_x == "" || b_x == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A와 B의 행과 열을 생성하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }
        if (a_y != b_y || a_x != b_x) {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A와 B의 행과 열을 같게 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }

        let number = "";
        let comma = "";
        let abTalbeStr = "<table>";
        for (let i = 0; i < a_y; i++) {
            abTalbeStr += "<tr>";
            for (let k = 0; k < b_x; k++) {
                if ($('#aNumber' + i + "" + k).val() == '' || $('#bNumber' + i + "" + k).val() == '') {
                    $(".alertBigBox").css("display", "block");
                    $(".alertSmallBox").prepend('<div class = "textPlus">빈 값을 입력해주세요.</div>');
                    $(".closeBtn").on("click", function () {
                        $(".alertBigBox").css("display", "none");
                        $(".textPlus").detach();
                    });
                    return;
                } else {
                    abTalbeStr += "<td class = 'abInputClass'>";
                    abTalbeStr += (Number($('#aNumber' + i + "" + k).val()) - Number($('#bNumber' + i + "" + k).val()));
                    abTalbeStr += "</td>";
                }
            }
            abTalbeStr += "<tr>";
        }
        abTalbeStr += "</table>";
        number = abTalbeStr;
        comma = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#printBox").html(comma);
        /* 박스 초기화 */
        $("#printBox").val("");
    });
    /* - 박스 끝  */

    /* * 박스 시작 */
    $("#multiplyBox").click(function () {
        if (a_y == "" || b_y == "" || a_x == "" || b_x == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A와 B의 행과 열을 생성하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }
        if (a_x != b_y) {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A의 행과 B의 열을 같게 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }

        let number = "";
        let comma = "";
        let answer = 0;
        let abTalbeStr = "<table>";
        for (let i = 0; i < a_y; i++) {
            abTalbeStr += "<tr>";
            for (let j = 0; j < b_x; j++) {
                abTalbeStr += "<td class = 'abInputClass'>";
                for (let k = 0; k < a_x; k++) {
                    if ($('#aNumber' + i + "" + k).val() == '' || $('#bNumber' + i + "" + k).val() == '') {
                        $(".alertBigBox").css("display", "block");
                        $(".alertSmallBox").prepend('<div class = "textPlus">빈 값을 입력해주세요.</div>');
                        $(".closeBtn").on("click", function () {
                            $(".alertBigBox").css("display", "none");
                            $(".textPlus").detach();
                        });
                        return;
                    } else {
                        answer += (Number($('#aNumber' + i + "" + k).val())) * (Number($('#bNumber' + k + "" + j).val()));
                    }
                }
                abTalbeStr += answer;
                answer = 0;
                abTalbeStr += "</td>";
            }
            abTalbeStr += "<tr>";
        }
        abTalbeStr += "</table>";
        number = abTalbeStr;
        comma = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $("#printBox").html(comma);
        /* 박스 초기화 */
        $("#printBox").val("");
    });
    /* * 박스 끝  */

    /* random 박스 시작 */
    $("#randomBox").click(function () {
        if (a_y == "" || b_y == "" || a_x == "" || b_x == "") {
            $(".alertBigBox").css("display", "block");
            $(".alertSmallBox").prepend('<div class = "textPlus">A와 B의 행과 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBigBox").css("display", "none");
                $(".textPlus").detach();
            });
            return;
        }

        /* a박스 랜덤 */
        let abTalbeStr = "<table>";
        for (let i = 0; i < a_y; i++) {
            abTalbeStr += "<tr>";
            for (let k = 0; k < a_x; k++) {
                abTalbeStr += "<td class = 'abInputClass'>";
                abTalbeStr += Number($('#aNumber' + i + "" + k + '').val(Math.floor(Math.random() * 50)));
                abTalbeStr += "</td>";
            }
            abTalbeStr += "<tr>";
        }
        abTalbeStr += "</table>";

        /* b박스 랜덤 */
        let abTalbeStr1 = "<table>";
        for (let i = 0; i < b_y; i++) {
            abTalbeStr += "<tr>";
            for (let k = 0; k < b_x; k++) {
                abTalbeStr1 += "<td class = 'abInputClass'>";
                abTalbeStr1 += Number($('#bNumber' + i + "" + k + '').val(Math.floor(Math.random() * 50)));
                abTalbeStr1 += "</td>";
            }
            abTalbeStr1 += "<tr>";
        }
        abTalbeStr1 += "</table>";
    });
    /* random 박스 끝  */
};