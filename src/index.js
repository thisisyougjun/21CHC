$(document).ready(function() {

$("#content_title_logo>svg").on('click',function (){
    location.href='../index.html';
})
//슬라이드 메뉴 기능

    $(".content-box>.col").hover(function (){
        $(this).css("background-color","white")
        $(this).find(".content_info").css("display","block")

    },function (){
        $(this).css("background-color","black")
        $(this).find(".content_info").css("display","none")
    })

    $(".category_nav").on('click',function (){
        if ($(".contents_nav_box>.row").css("display")=="none"){
            $(".contents_nav_box>.row").slideDown();
        }else {
            $(".contents_nav_box>.row").slideUp();
        }
    })

    $("html").on('click',function (e){
        if ($(e.target).parents('.footer_nav').length<1){
            $(".contents_nav_box>.row").slideUp();
        }

    });

/* 툴바 옵션 */
    $('#write_tool').summernote({
        height:600,
        toolbar:[
            ['style', ['bold', 'italic', 'underline', 'clear','hr','']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color','forecolor']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert',['picture','video','link']],
            ['view', ['undo','redo']],
        ],
    });
    $('.note-statusbar').hide();

});
