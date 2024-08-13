let board = $("#board");
let target ;
let idDiv;
let idCell;
let count = 0;
let restartValue = false;
let isBoxEmpty;
const puzzle1 = [ 
[3, 0, 6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 7, 0, 0, 0, 0, 3, 1],
[0, 0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0, 5, 0, 0, 9, 0, 6, 0, 0], 
[1, 3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0, 0, 5, 2, 0, 6, 3, 0, 0] ];

const solvedPuzzle1 = [
[3, 1, 6, 5, 7, 8, 4, 9, 2],
[5, 2, 9 ,1, 3, 4 ,7 ,6 ,8],
[4, 8, 7, 6, 2, 9, 5, 3 ,1],
[2, 6 ,3 ,4, 1 ,5, 9, 8, 7],
[9, 7 ,4 ,8 ,6, 3, 1, 2, 5],
[8, 5, 1 ,7 ,9 ,2, 6 ,4, 3],
[1, 3, 8, 9, 4 ,7, 2, 5, 6],
[6, 9, 2 ,3, 5, 1, 8 ,7, 4],
[7, 4, 5, 2, 8, 6, 3, 1, 9]];

const puzzle2 = [
[0, 7, 0, 0, 0, 0, 0, 4, 3],
[0, 4, 0, 0, 0, 9, 6, 1, 0],
[8, 0, 0, 6, 3, 4, 9, 0, 0],
[0, 9, 4, 0 ,5 ,2, 0 ,0 ,0],
[3, 5, 8, 4, 6, 0, 0, 2, 0],
[0, 0, 0, 8, 0, 0, 5, 3, 0],
[0, 8, 0, 0, 7, 0, 0, 9, 1],
[9, 0, 2, 1, 0, 0, 0, 0, 5],
[0, 0, 7, 0, 4, 0, 8, 0, 2]];

const solvedPuzzle2 = [
[6, 7, 9, 5, 1 ,8, 2, 4, 3],
[5, 4, 3, 7, 2, 9, 6, 1, 8],
[8, 2, 1, 6, 3, 4, 9, 5, 7], 
[7, 9, 4, 3, 5, 2, 1, 8, 6],
[3, 5, 8, 4, 6, 1, 7, 2, 9],
[2, 1, 6, 8, 9, 7, 5, 3, 4],
[4, 8, 5, 2, 7 ,6, 3, 9, 1],
[9, 6, 2, 1, 8, 3, 4, 7, 5],
[1, 3, 7, 9, 4, 5, 8, 6, 2]];

const puzzle3 = [
[3, 0, 1, 0, 8, 6, 5, 0, 4], 
[0, 4, 6, 5, 2, 1, 0, 7, 0],
[5, 0, 0, 0, 0, 0, 0, 0, 1],
[4, 0, 0, 8, 0, 0, 0, 0, 2],
[0, 8, 0, 3, 4, 7, 9, 0, 0],
[0, 0, 9 ,0, 5, 0, 0, 3, 8],
[0, 0, 4, 0, 9, 0, 2 ,0, 0],
[0, 0, 8 ,7, 3, 4, 0, 9, 0],
[0, 0, 7, 2, 0, 8, 1 ,0, 3]];

const solvedPuzzle3 = [
[3, 7, 1, 9, 8, 6, 5, 2, 4],
[8, 4, 6 ,5 ,2, 1, 3, 7, 9],
[5, 9, 2, 4, 7, 3, 8, 6, 1],
[4, 6, 3, 8, 1, 9, 7, 5, 2],
[2, 8, 5, 3, 4, 7, 9, 1, 6],
[7, 1, 9, 6, 5, 2, 4, 3, 8],
[6, 3, 4, 1, 9, 5, 2, 8, 7],
[1, 2, 8, 7, 3, 4 ,6, 9, 5],
[9, 5, 7, 2, 6, 8, 1 ,4, 3]];

const puzzleArray = [puzzle1,puzzle2,puzzle3];
const solvedPuzzleArray = [solvedPuzzle1,solvedPuzzle2,solvedPuzzle3];
let randomNumber = parseInt(Math.random()* puzzleArray.length);

createBoard(randomNumber);
    let previousTarget;
    
    function createBoard(number){
        var currentBoard = puzzleArray[number];
        for(var i=0; i<9 ;i++){
            const div = $('<div>',{class:"section", id: `div${i+1}`});
            board.prepend(div);
            for(var j=0;j<9 ;j++){
                
                const box = $('<div>',{class:"cell", id: `div${i+1}Cell${j+1}`});
                if(currentBoard[i][j] != 0){
                    box.text(`${currentBoard[i][j]}`);
                    
                }
                else{
                    box.text(` `);
                    box.addClass('empty');
                    
                }
                    
                div.prepend(box);

                box.click(function(e){
                    // console.log(e.target.id);
                    $(`#${previousTarget}`).removeClass('highlight');
                    target = e.target.id;
                    idDiv = target.slice(3,4)-1;
                    idCell = target.slice(8,9)-1;
                    $(`#${target}`).addClass('highlight');
                    previousTarget = target;
                    
                });
                //mouse over effect
                box.mouseover(function(){
                    box.addClass("mouseover");
                });
                box.mouseout(function(){
                    box.removeClass("mouseover");
                });
                
            }

    }}
let timerOn = 0;
//input through keyboard
$("body").keydown(function(event){
    
    if(restartValue == false && $(`#${target}`).hasClass('empty')){
        var input = event.key;
        
        if(timerOn == 0){
            start();
            console.log("start");
        }
        inputUserValue(target, input);
    }
});
//input through numpad
$(".numbers").click(function(e){
    
    if(restartValue == false && $(`#${target}`).hasClass('empty')){
        let value = e.target.firstChild.textContent;
        
        if(timerOn == 0){
            start();
            console.log("start");
        }
        inputUserValue(target, value);
    }
}); 
//input function


function  inputUserValue(t, value){

    timerOn = 1;
    let currentSolvedPuzzle = solvedPuzzleArray[randomNumber];
    var userInput = parseInt(value);
    

        if( typeof userInput === "number" && !isNaN(userInput) && userInput !== 0){

            console.log(userInput);
    
            if(currentSolvedPuzzle[idDiv][idCell] == userInput ){
    
                $(`#${t}`).text(`${value}`);
                //removing wrong answer highlight
                $(`#${target}`).removeClass('wrongAnswer');
                console.log("right");
            }
            else{
                //if value is wrong
                $(`#${t}`).text(`${value}`);
                console.log("wrong");
    
                //highlighting wrong answer
                $(`#${target}`).addClass('wrongAnswer');
    
                
                count++;
                $("#mistakes").text(`${count}`);
                let gO;
                if(count == 3){
                     gO = gameover(); 
                    setTimeout(function(){$("body").click(restart)}, 200);
                }
                if(gO == true) {
                    stop();
                }
                
            }
                
        }
    }
    
   

function restart(){
    count= 0;
    board.empty();
    board.attr('id', "board");
    randomNumber = parseInt(Math.random()* puzzleArray.length);
    createBoard(randomNumber);
    $("#mistakes").text(`${count}`);
    $("body").off("click");
    $("#timer").text(`00:00`);
    restartValue = false;
    timerOn= 0;
    //timer restart
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
}

function gameover(){
   
    console.log("game over");
    board.empty();
    board.attr('id', "gameover");
    board.append($('<div>',{text: "GAME OVER"}));
    board.append($('<div>',{text: "click anywhere to restart"}));
    restartValue = true;
    
    return true;
}

//Timer
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start( ){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
        
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    $("#timer").text(`${minutes}:${seconds}`);
}


//when clicking on existing number nothing happens