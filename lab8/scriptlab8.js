var container = document.getElementById('container');
var wrongCount = 0;

//網頁載入初始化
window.onload = function(){
   container.textContent = add_new_chars(3);
   container.focus();
}

//隨機產生字串
function add_new_chars(x){
    var n = Math.floor(Math.random()*x) + 1;
    var str = '';
    for(let i = 0;i < n; i++){
        str += String.fromCharCode(97 + Math.floor(Math.random()*26));
    }  
    return str;
};
//偵測鍵盤輸入
window.addEventListener("keyup" , function(e){
    var firstone = container.textContent.substring(0,1);

    if(e.key === firstone){
        container.textContent = container.textContent.substring(1);
        wrongCount = 0;
    }else{
        container.textContent += e.key;
        wrongCount++;
    }
    container.textContent += add_new_chars(3);
    if(wrongCount >= 3){
        container.textContent += add_new_chars(6);
        wrongCount = 0;
    }
});