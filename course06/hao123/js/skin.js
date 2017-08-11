//换肤js
var skinColor = ["#f50", "#0aa770", "#ffb333", "#534fa7", "#e44eff"];
//事件绑定
function addHandler() {
    var btnObj = [];

    btnObj[0] = document.getElementById("sk-color-red");
    btnObj[1] = document.getElementById("sk-color-green");
    btnObj[2] = document.getElementById("sk-color-yellow");
    btnObj[3] = document.getElementById("sk-color-blue");
    btnObj[4] = document.getElementById("sk-color-purple");

    for (i = 0; i < 5; i++) {

        if (btnObj[i].addEventListener) {
            btnObj[i].addEventListener("click", function(event) { //IE9以上和其他绝大多数现代浏览器
                handleEvent(event);
            }, false);

        } else if (btnObj[i].attachEvent) { //IE浏览器
            btnObj[i].attachEvent("onclick", function(event) {
                handleEvent(evennt);
            });

        } else {
            //DOM 0级事件处理程序，适用所有浏览器
            btnObj[i].onclick = function(evennt) {
                handleEvent(evennt);
            };
        }
    }
}
addHandler();

//事件处理
function handleEvent(e) {
    var id = event.target.id;
    switch (id) {

        case 'sk-color-red':
            changeSkin('0');
            break;
        case 'sk-color-green':
            changeSkin('1');
            break;
        case 'sk-color-yellow':
            changeSkin('2');
            break;
        case 'sk-color-blue':
            changeSkin('3');
            break;
        case 'sk-color-purple':
            changeSkin('4');
            break;
        default:
            break;

    }

}
//设置重点文本的颜色
function settextcolor(colorindex) {
    var color = "color:" + skinColor[colorindex];
    var ob;
    obj = document.getElementById("suningm");
    obj.style = color;
    obj = document.getElementById("lottery");
    obj.style = color;
    document.getElementById("cball").style = color;
    document.getElementById("weip").style = color;
    document.getElementById("amazon").style = color;
    document.getElementById("aitaobao").style = color;
    document.getElementById("qqmusic").style = color;

}
//设置皮肤，保存localStorage
function changeSkin(color) {
    var bkColor;
    var obj;
    switch (color) {

        case '0':
            document.getElementById("body-wrapper").style = "background: url(./img/skin1.jpg) no-repeat center top;";
            bkColor = "background-color:" + skinColor[0];
            document.getElementById("menus-lists").style = bkColor;
            localStorage.setItem("skincolor1", 0);
            settextcolor(0);
            break;
        case '1':
            document.getElementById("body-wrapper").style = "background: url(./img/skin2.jpg) no-repeat center top;";
            bkColor = "background-color:" + skinColor[1];
            document.getElementById("menus-lists").style = bkColor;
            localStorage.setItem("skincolor1", 1);
            settextcolor(1);
            break;
        case '2':
            document.getElementById("body-wrapper").style = "background: url(./img/skin3.jpg) no-repeat center top;";
            bkColor = "background-color:" + skinColor[2];
            document.getElementById("menus-lists").style = bkColor;
            localStorage.setItem("skincolor1", 2);
            settextcolor(2);
            break;
        case '3':
            document.getElementById("body-wrapper").style = "background: url(./img/skin4.jpg) no-repeat center top;";
            bkColor = "background-color:" + skinColor[3];
            document.getElementById("menus-lists").style = bkColor;
            localStorage.setItem("skincolor1", 3);
            settextcolor(3);
            break;
        case '4':
            document.getElementById("body-wrapper").style = "background: url(./img/skin5.jpg) no-repeat center top;";
            bkColor = "background-color:" + skinColor[4];
            document.getElementById("menus-lists").style = bkColor;
            localStorage.setItem("skincolor1", 4);
            settextcolor(4);
            break;
        default:
            break;

    }
}
//加载后读取本地存储的上次皮肤，并设置
function setlastskin() {

    var col = localStorage.getItem("skincolor1");
    if (col == null)
        col = 0;
    changeSkin(col);

}
//加载后调用设置皮肤
window.onload = setlastskin;
