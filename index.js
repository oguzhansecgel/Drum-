
var wsound = new Audio("./sounds/crash.mp3");
var asound = new Audio("./sounds/kick-bass.mp3");
var ssound = new Audio("./sounds/snare.mp3");
var dsound = new Audio("./sounds/tom-1.mp3");
var jsound = new Audio("./sounds/tom-2.mp3");
var ksound = new Audio("./sounds/tom-3.mp3");
var lsound = new Audio("./sounds/tom-4.mp3");
// çoklu tıklama olayı için
var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrumButton;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
{      
    //    console.log(this.innerHTML); //this fonk hangisine tıklandığını verir
    //     this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    switch(buttonInnerHTML)
    {
        case "w": wsound.play();break;
        case "a": asound.play(); break;
        case "s": ssound.play(); break;
        case "d": dsound.play(); break;
        case "j": jsound.play(); break;
        case "k": ksound.play(); break;
        case "l": lsound.play(); break;
    }
        
});
}




// sadece biri için tıklama olayı gerçekleşir
// document.querySelectorAll("button").addEventListener("click",function()
// {
//     alert("tıkladım");
    

// }); // tıklama ile alakalı bir etkileşime girmesi durumu
 