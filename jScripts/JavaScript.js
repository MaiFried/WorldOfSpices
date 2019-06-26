//$(document).ready(function () {
//    $(".spices_fade").mouseenter(function () {
//        $(".spices_fade").css("opacity", "0.2");
//    });

//    $(".spices_fade").mouseleave(function () {
//        $(".spices_fade").css("opacity", "1");
//    });
//});

function fade_in(event) {
    console.log("מה לעזאזאל");
    document.querySelector("#spices_fade").style.visibility = "visible";
    event.target.style.zIndex = 2;
}

function fade_out(event) {
    console.log("מה cfbgdfghdgfhdgfh");
    document.querySelector("#spices_fade").style.visibility = "hidden";
    event.target.style.zIndex = 0;

}