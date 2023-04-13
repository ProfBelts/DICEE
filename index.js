
let randomNumber1= Math.floor(Math.random()*6 + 1);

let randomNumber2= Math.floor(Math.random()*6 + 1);


let randomDiceImage1= `images/dice${randomNumber1}.png`;

let randomDiceImage2= `images/dice${randomNumber2}.png`;


let image1= document.querySelectorAll("img")[0];
let image2= document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src",randomDiceImage2);



    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent= "Player 1 wins!"

     } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent= "Player 2 wins!";
     
    } else {
        document.querySelector("h1").textContent= "Draw!";
    }
 

















// if (randomNumber1>randomNumber2) {
//     document.querySelector("h1").textContent= "Player 1 wins!";
// }

// if (randomNumber1<randomNumber2) {
//     document.querySelector("h1").textContent= "Player 2 wins!";
// }

// if (randomNumber1===randomNumber2) {
//     document.querySelector("h1").textContent= "Draw!";
// }








