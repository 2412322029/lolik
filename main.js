
var tishi
function show(tishi) {
    var hh1 = document.getElementsByClassName(tishi);
    if (hh1[0].style.display == "none") {
        hh1[0].style.display = "block"
    } else {
        hh1[0].style.display = "block"
    }
}
function hiddenbox(tishi) {
    var hh1 = document.getElementsByClassName(tishi);
    if (hh1[0].style.display == "block") {
        hh1[0].style.display = "none"
    } else {
        hh1[0].style.display = "block"
   }
}
function change(tishi) {
    var hh1 = document.getElementsByClassName(tishi);
    if (hh1[0].style.display == "block" ) {
        hh1[0].style.display = "none"
    } else {
        hh1[0].style.display = "block"
   }
}


function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    } else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;

    } else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}


//监听滚动条
var totop = document.querySelector(".top")

window.onscroll = function() {
    if (getScrollTop() > 500) {
        to_top.style.display = "block"
    } else {
        to_top.style.display = "none"
    }
}

function back_top(){
    let a=scrollY       //
    let timer=setInterval(function(){
    if(a>0){
        // scrollTo(0,0);
        a-=20;
        scrollTo(0,a);
        return;
    }
    // else{
        clearInterval(timer);
    // }
    
},10)

}

// var reu
// // 向给定ID的用户发起请求
// axios.get('./1.json')
// .then(function (response) {
//     // 处理成功情况
//     console.log(response.data.result.latest);
//     reu=response.data.result.latest
// })
// .catch(function (error) {
//     // 处理错误情况
//     console.log(error);
// })
// .then(function () {
//     // 总是会执行
// });



