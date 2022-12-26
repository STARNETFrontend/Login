// start form
const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});
// end form




// start btn login

function btnlogin() {
    // khi trỏ văn bản thì quay lại mặc định
    $("#username").focus(function () {
        $("#username").css("border", "none");
        // $("#err1").css("display", "none");
        $("#doiconuser").css("color", "#999");
        $("#douser").css("color", "#999");
    });
    $("#pass").focus(function () {
        $("#pass").css("border", "none");
        // $("#err2").css("display", "none");
        $("#doiconpass").css("color", "#999");
        $("#dopass").css("color", "#999");
        
    });
    //
    // kiểm tra lỗi không nhập
    var username = $("#username").val();
    var pass = $("#pass").val();
    if (username == "") {
        $("#doiconuser").css("color", "red");
        $("#douser").css("color", "red");
        $("#username").css("border-bottom", "2px red solid");
        // $("#err1").css("display", "block");
    } else if (pass == "") {
        // $("#err2").css("display", "block");
        $("#doiconpass").css("color", "red");
        $("#dopass").css("color", "red");
        $("#pass").css("border-bottom", "2px red solid");
    } else { // ràng buộc btn login
        $("#btn").html('<div style="margin-left: 45% ;" class="spinner-border text-warning" role="status"><span  class="sr-only">Loading...</span></div>');
        $(".spinner-border").css("display", "block");
        document.querySelector('#btn').disabled = true;
        var username = $("#username").val();
        var pass = $("#pass").val();
        var dulieu = {
            "user": username,
            "password": pass,
            "mac-address": getCookie('Mac'),
            "ip": getCookie('Ip')
        };
        $.ajax(
            {
                url: "http://api.clbmang.net:8000/login", method: "POST", data: JSON.stringify(dulieu), contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log("thanh cong");
                    console.log(data);

                    // var json = "<h4>Ajax Response</h4><pre>"
                    //     + JSON.stringify(data, null, 4) + "</pre>";
                    // $('#feedback').html(json);

                    // console.log("SUCCESS : ", data);
                    // $("#btn-search").prop("disabled", false);

                },
                error: function (err) {
                    console.log("loi");
                    console.log(err);
                    // hien thi lai button
                    $("#btn").text("LOGIN");
                    $(".spinner-border").css("display", "none");
                    document.querySelector('#btn').disabled = false;
                    //
                    // document.getElementById("err").innerHTML = err.responseText;
                    $("#err").css("display", "block");
                    console.log(err.responseText);

                    // var json = "<h4>Ajax Response</h4><pre>"
                    //     + e.responseText + "</pre>";
                    // $('#feedback').html(json);

                    // console.log("ERROR : ", e);
                    // $("#btn-search").prop("disabled", false);

                }
            }

        )
    }

}
//end btn login







// $("#err").css("display", "block");
