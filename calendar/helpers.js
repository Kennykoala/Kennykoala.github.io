

//helpers通常用在modules的檔名，selectorrule就是CSS選取器，此modules可替代querySelector和querySelectorAll
function $g(selectorrule) {
    //判斷是否為id selector
    if (selectorrule.includes('#')) {
        //回傳Element
        return document.querySelector(selectorrule);
    }
    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selectorrule);
    return nodelist.length == 1 ? nodelist[0] : nodelist;

}


function $c(element){
    return document.createElement(element);
}

//若有這個module，就不要用上面的modele了，功能相同的module盡量不要重複
function $ce(element, text){
    let el = document.createElement(element);
    //防呆:因為document.createElement('tr')沒有第二個參數，所以用以下判斷式，讓document.createElement('tr')也能作用
    if(text !== "" && text !== null){
        el.innerText = text;
    }
    return el;
}


//亂數模組，從0715-3貼過來的
function $getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



//輸出模組  $g as $got
export { $g, $c, $ce, $getRandom};