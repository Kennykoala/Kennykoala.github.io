
let html = document.queryCommandValue('html')
let logbtn = document.querySelector('#loginmodal')
let signbtn = document.querySelector('#signupmodal')
let modalbtn = document.querySelectorAll('.modalbutton');
let modalbtnclose = document.querySelector('.modal-btn-close');
let maillog = document.querySelector('.maillog');
let phonelog = document.querySelector('.phonelog');
let mobileicon = document.querySelector('.fa-mobile');
let mailicon = document.querySelector('.fa-envelope');
// let logmobile = document.querySelector('.logmobile');
// let logmail = document.querySelector('.logmail');
// let signmobile = document.querySelector('.signmobile');
// let signmail = document.querySelector('.signmail');

let logsignBtn = document.querySelector('#loginbutton');

let msgClose = document.querySelector('.msg-close');
let msgdropdown = document.querySelector('.dropdown-menu');

let logsigntab = document.querySelectorAll('.logsign-tab');
let logsigntitle = document.querySelector('.logsign-title');
let modalfooter = document.querySelector('.modalfooter');



window.onload = function () {

    let navItems = document.querySelectorAll('.navItem');
    navItems.forEach(ele => {
        ele.classList.remove('purple-text-border');
        ele.addEventListener('click', function (event) {
            navItems.forEach(e => {
                e.classList.remove('purple-text-border');
            })
            event.srcElement.classList.add('purple-text-border');
        })
    })


    //login / signup modal
    modalbtn.forEach((btn, idx) => {
        logsigntab[idx].classList.remove('logsign-purple-border');

        btn.addEventListener('click', function (event) {

            //初始化modal打開樣式
            logsigntab[idx].classList.add('logsign-purple-border');
            logsigntitle.innerHTML = idx === 0 ? "Log in and experience ePal services for free" : "Sign in and experience ePal services for free";
            modalfooter.style.display = idx === 0 ? 'flex' : 'none';
            logsignBtn.innerHTML = idx === 0 ? "Log In" : "Sign Up";
            maillog.style.display = 'block';

            logsigntab.forEach((item, index) => {

                //modal裡面按下不同tab，執行各自的purple border
                item.addEventListener('click', function (event) {
                    // maillog.style.display = 'block';

                    item.classList.remove('logsign-purple-border');
                    logsigntab.forEach(e => {
                        e.classList.remove('logsign-purple-border');
                        logsigntitle.innerHTML = index === 0 ? "Log in and experience ePal services for free" : "Sign up and experience ePal services for free";
                        modalfooter.style.display = index === 0 ? 'flex' : 'none';
                        logsignBtn.innerHTML = index === 0 ? "Log In" : "Sign Up";
                    })
                    event.srcElement.classList.add('logsign-purple-border');
                })
                //modal關閉後清除purple border
                modalbtnclose.addEventListener('click', function (event) {
                    item.classList.remove('logsign-purple-border');
                })
            })
        })
    })
    $('#myModal').modal({ backdrop: 'static', keyboard: false });
}



// //login/signup through mail or mobile
// logmobile.addEventListener('click', function () {
//     maillog.style.display = 'none';
//     phonelog.style.display = 'block';
// })
// logmail.addEventListener('click', function () {
//     maillog.style.display = 'block';
//     phonelog.style.display = 'none';
// })
// signmobile.addEventListener('click', function () {
//     maillog.style.display = 'none';
//     phonelog.style.display = 'block';
// })
// signmail.addEventListener('click', function () {
//     maillog.style.display = 'block';
//     phonelog.style.display = 'none';
// })


//modal password hide/show
function Password() {
    var x = document.querySelector('#myinput');
    var y = document.querySelector('.passwordshow');
    if (x.type === "password") {
        x.type = "text";
        y.value = "hide";
    } else {
        x.type = "password";
        y.value = "show";
    }
}



//gotop
$(function () {
    // 按下gotop按鈕事件 
    $('#gotop').click(function () {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });

    //卷軸滑動時，往下滑超過200px就讓gotop按鈕出現 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});


//(手機)login/signup change
$('.logsign-toggle').on('click', function (e) {
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');
    $('.tab-content > div').not(target).hide();
    $(target).fadeIn(600);
});


//navbar隨不同頁面做變化
$(function () {
    //href需替換
    if (window.location.href == "http://127.0.0.1:5500/ePal/beforelogin/E-Pal_layout_beforelogin.html") {
        //首頁navbar向下滑動出現
        $(window).scroll(function () {
            if ($(this).scrollTop() > 60) {
                $('#navbarLeft').css('display', 'flex')
                $('#navbarLeft').fadeIn();
                $('.navbar').css('background-color', '#302F3D')
            } else {
                $('#navbarLeft').fadeOut();
                $('.navbar').css('background-color', 'transparent')
            }
        });
    }
    else {
        $('#navbarLeft').css('display', 'flex')
        $('.navbar').css('background-color', '#302F3D')
    }
})


// //首頁navbar向下滑動出現
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 60) {
//         $('#navbarLeft').css('display', 'flex')
//         $('#navbarLeft').fadeIn();
//         $('.navbar').css('background-color', '#302F3D')
//     } else {
//         $('#navbarLeft').fadeOut();
//         $('.navbar').css('background-color', 'transparent')
//     }
// });
