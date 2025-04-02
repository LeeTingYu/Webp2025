
function randomString(max) {
    let text = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const len = Math.floor(Math.random() * (max + 1));
    for(let i = 0; i < len; i++){
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return text;
}


function add_new_chars(min, max) {
    const container = document.getElementById("container");
    container.innerHTML += randomString(max - min) + randomString(min);
}


window.onload = function() {
    add_new_chars(0, 2);  
    document.getElementById("container").focus(); 
};


window.addEventListener("keyup", function(e){
    const container = document.getElementById("container");
    const currentText = container.innerHTML;

    console.log(e.key); 

 
    if(currentText.charAt(0) === e.key) {
        container.innerHTML = currentText.substring(1);
    }

    add_new_chars(1, 3); 
});