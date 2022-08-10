function chkPoint(amt, disc, pnt, com, min, unit) {
    // amt : 상품 원래 금액 / disc : 할인되는 금액 / pnt : 사용가능,남은 적립금 / com : 결제 수수료 / min : 사용 가능 최소 적립금 / unit : 사용단위
    let point = 0;
    let payAmount = 0;
    let unit_won = " ₩";
    let minus = "-";

    payAmount = amt - disc;

    if (document.getElementById("chk_use").click) {

        if (pnt < min) {

            point = 0;

        } else {

            point = pnt - pnt % unit;

        }

        if (pnt > amt) {

            point = amt - disc;

        }

        if (amt == disc || amt < payAmount || payAmount == 0) {

            point = 0;

        }

        if (payAmount <= pnt) {
            point = payAmount;
        }
    }

    commAmt = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaDisc = disc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaAmount = payAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById("use_pnt").value = "0";
    document.getElementById("all_price_1").innerHTML = commAmt + unit_won;
    document.getElementById("all_price_2").innerHTML = commAmt + unit_won;
    document.getElementById("pay_disc_1").innerHTML = minus + commaDisc + unit_won;
    document.getElementById("pay_disc_2").innerHTML = minus + commaDisc + unit_won;
    document.getElementById("amount_txt").innerHTML = commaAmount + unit_won;

    changePoint(amt, disc, pnt, com, min, unit);
}


function changePoint(amt, disc, pnt, com, min, unit) {
    // amt : 상품 원래 금액 / disc : 할인되는 금액 / pnt : 사용가능,남은 적립금 / com : 결제 수수료 / min : 사용 가능 최소 적립금 / unit : 사용단위
    let point = parseInt(document.getElementById("use_pnt").value);
    let percent_unit = 100;
    let payAmount = 0;
    let unit_won = " ₩";
    let minus = "-";
    let percent = " %";

    payAmount = amt - disc;

    if (point > pnt) {

        point = pnt;
        document.getElementById("use_pnt").value = point;

    }

    if (point > amt) {

        point = payAmount;
        document.getElementById("use_pnt").value = point;

    }

    if (point < min) {

        point = 0;
        document.getElementById("use_pnt").value = point;

    } else {

        point = point - point % unit;

    }

    if (amt == disc) {
        point = 0;
        document.getElementById("use_pnt").value = point;
    }

    let totalDisc = disc + point;
    let resultPnt = amt - totalDisc;
    let percentTxt = (totalDisc / amt) * percent_unit;

    commAmt = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaDisc = disc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaPnt = point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaCom = com.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaTotalDisc = totalDisc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    commaResultPnt = resultPnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //document.getElementById("all_price").innerHTML = commAmt + unit_won;
    //document.getElementById("pay_disc").innerHTML = minus + commaDisc + unit_won;
    document.getElementById("total_pnt").innerHTML = commaPnt + unit_won;
    document.getElementById("total_disc").innerHTML = minus + commaTotalDisc + unit_won;
    document.getElementById("percent_box").style.display = "inline-block";
    document.getElementById("percent_txt").innerHTML = percentTxt.toFixed(1) + percent;
    document.getElementById("com_txt").innerHTML = commaCom + unit_won;
    document.getElementById("result_pnt").innerHTML = commaResultPnt + unit_won;
    document.getElementById("total_pay").innerHTML = commaResultPnt;
}


$(document).ready(function () {

    $('#payCheck').click(function () {

        let payCheck = $('#payCheck').prop('checked');

        if (payCheck == true) {

            $('#payButton').css("background-color", "#DD3141").attr("disabled", false);

        } else {

            $('#payButton').css("background-color", "#e9e9e9").attr("disabled", true);

        }

    });

});