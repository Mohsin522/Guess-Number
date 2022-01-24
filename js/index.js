/*
         Guess Your Number Game
1:Generate the random number
2:get the user input
3:compare them
4:save the guess history
5:shoe the history
6:restart the game
7:The End
*/



window.onload = function () {
    $(".mybtn").click(checkme);
    $(".restart").click(restart);
    getRandomNum();
}
let guesses = [];

let randomenumber = getRandomNum();
console.log(randomenumber);
function getRandomNum() {
    let num = Math.random();
    let correctNum = Math.floor(num * 100);
    return correctNum;

}

function checkme() {
    let guessnum = $(".myinput").val();
  
    guesses.push(guessnum);
    compare(guessnum);
    display();
    console.log(guesses);
    // $(".myinput").val()="";
}

function display(){
  
    let list="<ul>";
    for(let index=0;index<guesses.length;index++){
        // $(".listing").html(guesses[index]);
  list+="<li>" + "Your guesse is " + guesses[index] + "</li>"; 
    }
    list+="</ul>";
   $(".listing").html(list);



}

function compare(guessnum) {
    if (randomenumber > guessnum) {

    showlow();
    $(".result-div-outer").html(showlow());

    } else if (randomenumber < guessnum) {
   
    showhigh();
    $(".result-div-outer").html(showhigh());
    } else if (randomenumber == guessnum) {
      showwin();
    $(".result-div-outer").html(showwin());
        
    };
}

function showlow() {
 
    let result = "<div class='result-div-inner low'>";
    result += "<p>Your Result is too Low</p>";
    result += "</div>";
   return result;
    


}

function showhigh() {
 
    let result = "<div class='result-div-inner high'>";
    result += "<p>Your Result is too High</p>";
    result += "</div>";
    return result;

  
}

function showwin() {

    let result = "<div class='result-div-inner won'>";
    result += "<p>Good Job ..Its Correct</p>";
    result += "</div>";
    return result;
 
}




function restart() {

    $(".listing").html("");
    guesses=[];
    $(".result-div-outer").html("");
 
  console.log(guesses);

    }