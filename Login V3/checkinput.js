setCookie('tt1', "0", 7);
setCookie('tt2', "0", 7);

function checkinput() {
    var username = $("#username").val();
    if (username == "") {
        $("#err1").css("display", "block");
        $("#username").css("border", "2px red solid");
    }else setCookie('tt1', "1", 7);

    $("#username").focus(function () {
        $("#username").css("border", "none");
        $("#err1").css("display", "none");
    });
    
}
function checkinput2(){
    var pass = $("#pass").val();
    if (pass == "") {
        $("#err2").css("display", "block");
        $("#pass").css("border", "2px red solid");
    }else{
        setCookie('tt2', "1", 7);
        checkhanghieu();
    } 
    $("#pass").focus(function () {
        $("#pass").css("border", "none");
        $("#err2").css("display", "none");
    });
}
function checkhanghieu(){
if (getCookie('tt1')=="1"){
    if (getCookie('tt2')=="1"){
        $(".btn").css("display", "block");
    }
}
}
function demo(){
    var pass = $("#pass").val();
    alert(pass);
}