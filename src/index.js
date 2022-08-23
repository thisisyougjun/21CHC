$(".ContentNav").on('click',function (){
    console.log("asd")
    if ($(".Contents_Nav_box").css("top")=="1000px"){
            $(".Contents_Nav_box").stop().animate({top:550},'slow')
    }else {
        $(".Contents_Nav_box").stop().animate({top:1000},)

    }
});

$("#content_title_logo").on('click',function (){
    location.href='../index.html';
    console.log("asd")
})

$(".content-box>.col").hover(function (){
    $(this).css("background-color","white")
    $(this).find(".content_info").css("display","block")

},function (){
    $(this).css("background-color","black")
    $(this).find(".content_info").css("display","none")
})


