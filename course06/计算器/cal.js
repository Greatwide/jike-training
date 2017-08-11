var numshow = ""; //屏幕上显示的值
var formulastr = ""; //算式
var isLastOp = false; //上次输入的是不是运算符或小数点
var isLastOpdiv = false; //运算符是不是除法
var onenum = ""; //每一个数值，用来判断这个数值的前面运算符如果是除法时，这个数值是不是0
var isLastEqual = false; //上一个按键为=号
var isHasDot = false; //数值中已经包含小数点

var objFormula = document.getElementById("formula");
var objValue = document.getElementById("showdata");

//清除
function clear() {
    formulastr.length = 0;
    numshow.length = 0;
    formulastr = "";
    numshow = "";
    objFormula.value = formulastr;
    objValue.value = numshow;
    isLastOp = false;
    isLastOpdiv = false;
    isLastEqual = false;
    isHasDot = false;
}
var num = 0;

//除了除法、清除、删除、%、1/X外的其他输入键处理
function cal(num) {
    var ret = false;
    if (num >= '0' && num <= '9' || num == '.') {
        if (numshow.length >= 9)
            return;
        if (num == '.') {
            if (isHasDot)
                return;
            else
                isHasDot = true;
        }
        if (isLastEqual) { //如果上一个输入是=号且这次是数字
            formulastr = num;
            numshow = num;
            isLastEqual = false;
            isLastOp = false;

        } else {
            formulastr += num;

            //onenum+=num;
            numshow += num;
        }
        isLastOp = false;
    } else { //运算符
        if (formulastr.length == 0) //第一个不能是操作符
            return;
        if (isLastOp) //上一次输入也是非数字，重复，无效
        {
            return;
        }
        isLastOp = true;
        formulastr += num;
        ret = chkdata();
        //numshow="";
        isHasDot = false;

    }
    isLastEqual = false

    if (!ret) {
        objValue.value = numshow;
    }

    objFormula.value = formulastr;
}

//除法
function divided() {
    if (isLastOp) //重复输入运算符
        return;
    if (formulastr.length == 0) //第一个不能是操作符
        return;
    isLastOp = true;
    isLastOpdiv = true;
    isLastEqual = false;
    formulastr += "/";
    var ret = chkdata();
    objFormula.value = formulastr;
    if (!ret) {
        objValue.value = numshow;
    }
}
//等于
function result() {
    if (formulastr.length == 0) //第一个不能是操作符
        return;
   if(chkdata())
   return;
    numshow = eval(formulastr);
    //var numtemp = new Number(numshow);

    // numtemp=  numtemp.toExponential(20);

    formulastr = "";
    objFormula.value = formulastr;
    objValue.value = numshow;

    formulastr = numshow;
    isLastEqual = true;
    //isLastOp=true;
}
//1/x处理
function onediv() {
    if (isLastOp)
        return;
    if (formulastr.length == 0) //第一个不能是操作符
        return;
    if (0 == eval(numshow)) {
        objValue.style.color = "#f51613"
        objValue.value = "X不能为0";
        return;
    }
    numshow = 1 / eval(formulastr);
    formulastr = "";
    objFormula.value = formulastr;
    objValue.value = numshow;
    formulastr = numshow;
    isLastEqual = true;
    //isLastOp=true;
}
//删除键
function backspace() {
    if (formulastr.length != 0)
        formulastr = formulastr.substr(0, formulastr.length - 1);
    if (numshow.length != 0)
        numshow = numshow.substr(0, numshow.length - 1);
    objFormula.value = formulastr;
    objValue.value = numshow;

}
//%的处理
function percent() {
    if (isLastOp)
        return;
    if (formulastr.length == 0) //第一个不能是操作符
        return;
    numshow = eval(formulastr) * 0.01;
    formulastr = "";
    objFormula.value = formulastr;
    objValue.value = numshow;
    formulastr = numshow;
    isLastEqual = true;
    //isLastOp=true;
}
//检查除法的除数是否为0
function chkdata() {
    var tmp = false;
    if (isLastOpdiv) {
        if (0 == eval(numshow)) {
            //alert("除数不能为0")

            backspace();
            numshow = '0';
            isLastOp = false;
            objValue.style.color = "#f51613"
            objValue.value = "除数不能为0";

            tmp = true;
        } else {
            numshow = "";
        }
    } else {
        numshow = "";
    }

    isLastOpdiv = true;
    return tmp;
}

var btn = document.getElementById("clear");
var allliobj = document.getElementsByTagName("li");
var i = 0;


//所有输入键
function handleMsg(Obj) {
    objValue.style.color = "#000"
    num = Obj.currentTarget.innerText;

    if (num == "C") //清除键
    {
        clear();
    } else if (num == '1/x') {
        onediv();
    } else if (num == '←') {
        backspace();
    } else if (num == '%') {
        percent();
    } else if (num == '÷') {
        divided();
    } else if (num == '=') {
        result();
    } else {
        cal(num);
    }
}

//事件绑定
function addHandler() {
    for (i = 0; i < allliobj.length; i++) {
        if (allliobj[i].addEventListener) {
            allliobj[i].addEventListener("click", function(event) { //IE9以上和其他绝大多数现代浏览器
                handleMsg(event);
            }, false);

        } else if (allliobj[i].attachEvent) { //IE浏览器
            allliobj[i].attachEvent("onclick", function(event) {
                handleMsg(evennt);
            });

        } else {
            //DOM 0级事件处理程序，适用所有浏览器
            allliobj[i].onclick = function(evennt) {
                handleMsg(evennt);
            };
        }
    }

}
addHandler();
