
import "./css/style.css"
import "./css/index.css"
import logo from "./source/slide_img/DSCF4495.jpg";
import logo2 from "./source/slide_img/DSCF4496.jpg";
import logo3 from "./source/slide_img/DSCF6811.jpg";

// Import all of  our custom CSS
// // import Bootstrap's JS

// 이거 일단 이미지를 배열에 넣어야 하는데 아직은 모르겠삼

const img0 = `<img src="${logo}" alt="이미지">`;
const img1 = `<img src="${logo2}" alt="이미지">`;
const img2 = `<img src="${logo3}" alt="이미지">`;

$(".slide_img")[0].innerHTML=img0;
$(".slide_img")[1].innerHTML=img1;
$(".slide_img")[2].innerHTML=img2;

$(".ContentNav").on('click',function (){
    if ($(".ContentsBox").css("top")=="1000px"){
            $(".ContentsBox").stop().animate({top:550},'slow')
    }else {
        $(".ContentsBox").stop().animate({top:1000},)

    }
});
