const textElement = document.getElementById ('text');
const speedElement = document.getElementById ('speed');
let x = 1;
let speed = 300 / speedElement.value ;

const text = document.getElementById ("text").innerText ;

writeText ()

function writeText () {
    textElement.innerText = text.slice(0,x);
    x++ ;

    if (x>text.length) {
        x = 1 ;
    }

    setTimeout (writeText, speed);
}

speedElement.addEventListener ('input' , (e) => speed =300 /e.target.value);