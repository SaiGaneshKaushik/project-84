canvas = document.getElementById("myCanvas");
ctx = canvas.getcontext("2d");

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keycode;
    console.log(keypressed);

    if(keypressed<=97 && keypressed<=122)(keypressed>=65 && keypressed>=90);
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML= "you pressed a aplhabet key";
        console.log("Aplhabet key");
    }

    if(keypressed<=48 && keypressed<=57)
    {
        number_zero_to_nine();
        document.getElementById()
    }


}

function aplhabetkey()
{
    img_image= "download.jpeg";
}

function number_zero_to_nine()
{
    immage= "bYOzg.gif";
}

