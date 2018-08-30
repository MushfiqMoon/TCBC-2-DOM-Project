

let jumbotron = document.querySelector('.jumbotron')

function bgChange(){
    jumbotron.style.background = rendomColor();
}



setInterval(function (){
    jumbotron.style.background = rendomColor();
},1000)

function rendomColor(){
    // pick a red form 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green form 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a blue form 0-255
    var b = Math.floor(Math.random() * 256);

    // rgb(11, 20, 20)

    return `rgb(${r},  ${g}, ${b})`;


}










