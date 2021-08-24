
var repeater;
var T;
function f()
{
    T = new Date();
    if(T.getHours().valueOf() >= 10)
    {
        document.getElementById("h").innerHTML = T.getHours().toString();
    }
    else
    {
        document.getElementById("h").innerHTML = "0" + T.getHours().toString();
    }

    if(T.getMinutes().valueOf() >= 10)
    {
        document.getElementById("m").innerHTML = T.getMinutes().toString();
    }
    else
    {
        document.getElementById("m").innerHTML = "0" + T.getMinutes().toString();
    }

    if(T.getSeconds().valueOf() >= 10)
    {
        document.getElementById("sec").innerHTML = T.getSeconds().toString();
    }
    else
    {
        document.getElementById("sec").innerHTML = "0" + T.getSeconds().toString();
    }
    repeater = setTimeout(f,500);
}

f();


