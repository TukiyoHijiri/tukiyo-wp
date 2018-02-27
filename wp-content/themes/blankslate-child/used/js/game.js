/* keyCode取得*/
/*
document.onkeydown = keydown;
function keydown(){
    document.getElementById("keycode").innerHTML = "キーが押されました KeyCode :" + event.keyCode;
}
*/

/* block01 */
/*
function move (){
var block = document.getElementById("block01");
    block.style.top = '100px';
    block.style.backgroundColor = '#666666';
}
*/


/* block02 */
/*
window.onload = function(){
var block = document.getElementById("block02");
    block.style.top = '100px';
    block.style.backgroundColor = '#666666';
}

setInterval(function(){
    var pos = $("#block02").position();
    $("#value02").html("That div is " + pos.top);
},1000);
*/


/* block03 */
/*
var posy03 = 0;
var posx03 = 0;
setInterval(function(){
    var block = document.getElementById("block03");
        posy03++;
        block.style.top = posy03 + 'px';
    if(posy03 >= 180){ posy03 = 0 };
        var pos = $("#block03").position();
        $("#value03").html("That div is " + pos.top);
},60);
*/


/* block04 */
/*
var posy04 = 0;
var posx04 = 0;
var flag04 = 0;
setInterval(function(){
var block = document.getElementById("block04");
var bullet = document.getElementById("bullet04");
    posy04++;
    block.style.top = posy04 + 'px';
    bullet.style.left = posx04 + 'px';

var pos = $("#bullet04").position();
    $("#value04").html("That div is " + pos.left);
    if(flag04 == 0){
        posx04 = 20;
        bullet.style.top = posy04 + 10 + 'px';
    }else if(flag04 == 1){
        bullet.style.top = posy04+ 10 + 'px';
        posx04 = posx04+20;
        flag04 = 2;
    }else if(flag04 == 2){
        posx04 = posx04+5;
        $("#bullet04").show();
    }
    if(posy04 >= 180){ posy04 = 0 };
    if(posx04 >= 190){
        flag04 = 0;
        $('#bullet04').hide();
    }

    document.onkeydown = keydown;
    function keydown(){
        document.getElementById("keycode").innerHTML = "キーが押されました KeyCode :" + event.keyCode;
        if(event.keyCode == 32 && posx04 == 20){flag04 = 1;}
    }
},30);
*/

/* block05 */
var BLposy05 = 0;

var BUposy05 = 0;
var BUposx05 =  0;

var flag05 = 0;

setInterval(function(){
var block = document.getElementById("block05");
var bullet = document.getElementById("bullet05");
var pos = $("#bullet05").position();
    BLposy05++;
    block.style.top = BLposy05 + 'px';
    bullet.style.left = BUposx05 + 'px';

//    $("#value05").html("That div is " + BUposx05);
    if(flag05 == 0){
        BUposx05 = 20;
        bullet.style.top = BLposy05 + 10 + 'px';
        $('#bullet05').hide();
    }else if(flag05 == 1){
        BUposx05 = BUposx05+20;
        flag05 = 2;
    }else if(flag05 == 2){
        BUposx05 = BUposx05+5;
        $("#bullet05").show();
    }

    if(BLposy05 >= 180){BLposy05 = 0;}

    if(pos.left >= 145 && pos.top >= 30 && pos.top <= 130){ flag05 = 0;}
    else if(BUposx05 >= 185){flag05 = 0;}

    document.onkeydown = keydown;
    function keydown(evt){
        if(evt.which == 13 && BUposx05 == 20){flag05 = 1;}
    }
},30);