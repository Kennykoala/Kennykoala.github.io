
let html = document.queryCommandValue('html')
let logbtn = document.querySelector('#loginmodal')
let signbtn = document.querySelector('#signupmodal')
let modalbtn = document.querySelectorAll('.modalbutton');
let modalbtnclose = document.querySelector('.modal-btn-close');
let maillog = document.querySelector('.maillog');
let phonelog = document.querySelector('.phonelog');
let mobileicon = document.querySelector('.fa-mobile');
let mailicon = document.querySelector('.fa-envelope');
let logsignBtn = document.querySelector('#loginbutton');
let msgicon = document.querySelectorAll('.message-icon-bk');
let msgiconCl = document.querySelectorAll('.message-icon-cl');
let msgListTitle = document.querySelector('#message-list-title');
let msgClose = document.querySelector('.msg-close');
let msgdropdown = document.querySelector('.dropdown-menu');
// let asidemenu = document.querySelector('.aside-Menu');
let logsigntab = document.querySelectorAll('.logsign-tab');
let logsigntitle = document.querySelector('.logsign-title');
let modalfooter = document.querySelector('.modalfooter');
let msgroom = document.querySelector('#dropdown-message');
let searchbar= document.querySelector('.search input');

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
            // myModal.modal({backdrop:'static', keyboard: false});

            //初始化modal打開樣式
            logsigntab[idx].classList.add('logsign-purple-border');
            logsigntitle.innerHTML = idx === 0 ? "Log in and experience ePal services for free" : "Sign in and experience ePal services for free";
            modalfooter.style.display = idx === 0 ? 'flex' : 'none';
            logsignBtn.innerHTML = idx === 0 ? "Log In" : "Sign Up";
            maillog.style.display = 'block';

            logsigntab.forEach((item, index) => {
                //modal裡面按下不同tab，執行各自的purple border
                item.addEventListener('click', function (event) {
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

// document.querySelectorAll('.loginicon').forEach((item, idx) =>{

//     item.addEventListener('click', function(){
//         if(idx === 0){
//             maillog.style.display = 'none';
//             phonelog.style.display = 'block';
//         }
//         else if(idx === 1){
//             maillog.style.display = 'block';
//             phonelog.style.display = 'none';
//         }
//     })
// }

//待處理
mobileicon.addEventListener('click', function () {
    maillog.style.display = 'none';
    phonelog.style.display = 'block';
})
mailicon.addEventListener('click', function () {
    maillog.style.display = 'block';
    phonelog.style.display = 'none';
    
})


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



//dropdown點選查詢不關閉下拉框
$("body").on('click', '[data-stopPropagation]', function (e) {
    e.stopPropagation();
});

// // dropdown-message-ul
// function dropdownMsgClose(){
//     document.querySelector('#dropdown-message-ul').style.display = "none";
// }


//dropdown-message-ul icon replace
msgicon.forEach((icon, idx) => {       
    icon.addEventListener('click', function (event) {
        msgicon[0].src = "message1.png";
        msgicon[1].src = "message2.png";
        msgicon[2].src = "message3.png";

        switch (idx) {
            case 0:
                msgListTitle.innerHTML = "Order Messages";
                icon.src = "message_1.png"
                break;
            case 1:
                msgListTitle.innerHTML = "Social Messages";
                icon.src = "message_2.png"
                break;
            case 2:
                msgListTitle.innerHTML = "System Messages";
                icon.src = "message_3.png"
                break;
            default:
                break;
        }
    })
})


//personal info.  open/close  
function PersonalOpen() {
    document.querySelector(".aside-Menu").style.width = "400px";
    document.querySelector(".aside-Menu").style.right = "0%";
    document.querySelector(".aside-Menu").style.zIndex = "10";
}
function PersonalClose() {
    document.querySelector(".aside-Menu").style.right = "-100%";
}


//chatroom  open/close
function MsgRoomOpen(){
    document.querySelector(".chat-container").style.display = "block";
}
function MsgRoomClose() {
    document.querySelector(".chat-container").style.display = "none";            
}


//首頁navbar動態呈現，待處理
// $(function () {
//     //卷軸滑動時，往下滑超過200px就讓gotop按鈕出現 
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 20) {
//             $('#gotop').fadeIn();
//         } else {
//             $('#gotop').fadeOut();
//         }
//     });
// });


//gotop
$(function () {
    // 按下gotop按鈕事件 
    $('#gotop').click(function () {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 'fast');   //返回到最頂 
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


// chatroom
// $(function () {
//     $(".chatbot").click(function () {
//         // $(".chatbox").fadeIn(),
//         // $(".chat-icon").fadeOut(),
//         // $(".chatbot i").fadeIn();
//         $(".chat-container").toggle("fast");
//         // $(".chat-icon").toggle("slow"),
//         // $(".chatbot i").toggle("slow");
//     });
// });

function changeLong(){
    searchbar.style.width = '250px';
    // searchbar.style.borderColor = 'blue';
}

function changeShort(){
    searchbar.style.width = '100px';
    // searchbar.style.borderColor = 'blue';
}


