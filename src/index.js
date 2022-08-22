$("#nav").on('click',function (){
    console.log("asd")
    if ($(".ContentsBox").css("top")=="1000px"){
            $(".ContentsBox").stop().animate({top:550},'slow')
    }else {
        $(".ContentsBox").stop().animate({top:1000},)

    }
});

