
let number = 1;

function next() {
    number = number + 1;

    if(number > 29){
        number = 1;
    }

    photo.src = `./assets/images/Photo ${number}.jpg`;

    caption.innerHTML = `Photo #${number}`;
}