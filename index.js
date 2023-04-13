$(document).ready(function () {

let image1= $("img").eq(0);
let image2= $("img").eq(1);
let clicked1= false;
let clicked2= false;

const updateImage= function () {
    let randomNumber1= Math.floor(Math.random()*6+1);
    let randomNumber2= Math.floor(Math.random()*6+1);

    let randomDiceImage1= `images/dice${randomNumber1}.png`;
    let randomDiceImage2= `images/dice${randomNumber2}.png`;

    image1.attr("src", randomDiceImage1);
    image2.attr("src", randomDiceImage2);

    if (clicked1 && clicked2) {
        if (randomNumber1 > randomNumber2) {
            $("h1").text("Player 1 wins. Click any key to restart");
           
        } else if (randomNumber2 > randomNumber1) {
            $("h1").text("Player 2 wins. Click any key to restart");
           
            
        } else {
            $("h1").text("Draw. Click any key to restart");
            }
    }
    }
    
    $(document).on("keydown", function () {
        clicked1= false;
        clicked2= false;
        $("h1").text("Roll the dice");
    })


    image1.click(function () {
        clicked1= true;
        buttonAnimation($(this));
        updateImage();
    })

    image2.click(function () {
        clicked2= true;
        buttonAnimation($(this));
        updateImage();

    })

  

// updateImage();

const buttonAnimation= function (currentImage) {
    currentImage.addClass("pressed");

    setTimeout(function () {
        $("img").removeClass("pressed");
    },100)
}




});








//     if (randomNumber1 > randomNumber2) {
//         $("h1").text("Player 1 Wins");
    
//     } else if (randomNumber2 > randomNumber1) {
//         $("h1").text("Player 2 Wins");
    
//     } else {
//         $("h1").text("Draw");
//     }




// });





























// let randomNumber1= Math.floor(Math.random()*6 + 1);

// let randomNumber2= Math.floor(Math.random()*6 + 1);


// let randomDiceImage1= `images/dice${randomNumber1}.png`;

// let randomDiceImage2= `images/dice${randomNumber2}.png`;


// let image1= document.querySelectorAll("img")[0];
// let image2= document.querySelectorAll("img")[1];

// image1.setAttribute("src", randomDiceImage1);
// image2.setAttribute("src",randomDiceImage2);



//     if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").textContent= "Player 1 wins!"

//      } else if (randomNumber2 > randomNumber1) {
//         document.querySelector("h1").textContent= "Player 2 wins!";
     
//     } else {
//         document.querySelector("h1").textContent= "Draw!";
//     }
 


// if (randomNumber1>randomNumber2) {
//     document.querySelector("h1").textContent= "Player 1 wins!";
// }

// if (randomNumber1<randomNumber2) {
//     document.querySelector("h1").textContent= "Player 2 wins!";
// }

// if (randomNumber1===randomNumber2) {
//     document.querySelector("h1").textContent= "Draw!";
// }

