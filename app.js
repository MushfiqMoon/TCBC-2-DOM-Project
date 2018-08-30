/*----------------------------------
two task 
1. background color change rendomely
2. Make the peragraph text editable
----------------------------------*/


let jumbotron = document.querySelector('.jumbotron')
// let editable = document.querySelector('#edit-me')




// 1. background color change rendomely


setInterval(function () {
    jumbotron.style.background = rendomColor();
}, 1000)


// rednom color generaore
function rendomColor() {
    // pick a red form 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green form 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a blue form 0-255
    var b = Math.floor(Math.random() * 256);

    // rgb(11, 20, 20)
    return `rgb(${r},  ${g}, ${b})`;


}

// 2. Make the peragraph text editable


let editable = document.querySelector('#edit-me')
let heading = document.querySelector('#heading')


editable.addEventListener('click', function () {

    // editable.style.visibility = 'hidden';

    editable.innerText = '';

    let prevText = editable.innerText;

    let createTextarea = document.createElement("textarea");

    let edittxt = document.querySelector('textarea');

    createTextarea.addEventListener('click', function (e) {

        let myNewtxt = e.target.value
        // console.log(myNewtxt);

        prevText = myNewtxt;

        editable.innerText = prevText;

      
        // heading.appendChild(createTextarea)

    })

    // var inText = document.createTextNode(prevText);

    // createTextarea.appendChild(inText);



    heading.appendChild(createTextarea)

    // let edittxt= createTextarea.value;

    // console.log(edittxt);


})