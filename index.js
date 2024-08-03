let container = $("#board");
let target ;
let idDiv;
let idCell;
let count = 0;
const puzzle = [ 
[3, 0, 6, 5, 0, 8, 4, 0, 0],
[5, 2, 0, 0, 0, 0, 0, 0, 0],
[0, 8, 7, 0, 0, 0, 0, 3, 1],
[0, 0, 3, 0, 1, 0, 0, 8, 0],
[9, 0, 0, 8, 6, 3, 0, 0, 5],
[0, 5, 0, 0, 9, 0, 6, 0, 0], 
[1, 3, 0, 0, 0, 0, 2, 5, 0],
[0, 0, 0, 0, 0, 0, 0, 7, 4],
[0, 0, 5, 2, 0, 6, 3, 0, 0] ];

const solvedPuzzle = [
[3, 1, 6, 5, 7, 8, 4, 9, 2],
[5, 2, 9 ,1, 3, 4 ,7 ,6 ,8],
[4, 8, 7, 6, 2, 9, 5, 3 ,1],
[2, 6 ,3 ,4, 1 ,5, 9, 8, 7],
[9, 7 ,4 ,8 ,6, 3, 1, 2, 5],
[8, 5, 1 ,7 ,9 ,2, 6 ,4, 3],
[1, 3, 8, 9, 4 ,7, 2, 5, 6],
[6, 9, 2 ,3, 5, 1, 8 ,7, 4],
[7, 4, 5, 2, 8, 6, 3, 1, 9]];

for(var i=0; i<9 ;i++){
    const div = $('<div>',{class:"section", id: `div${i+1}`});
    container.prepend(div);
    for(var j=0;j<9 ;j++){
        
        const box = $('<div>',{class:"cell", id: `div${i+1}Cell${j+1}`});
        if(puzzle[i][j] != 0){
            box.text(`${puzzle[i][j]}`);
        }
        else
            box.text(` `);
        div.prepend(box);

        box.click(function(e){
            //console.log(e.target.id);
            target = e.target.id;
            idDiv = target.slice(3,4)-1;
            idCell = target.slice(8,9)-1;
            //console.log(idDiv,idCell);
        });
        
        }
    
}
//do i need to use class? for sudoku cells?
$("body").keydown(function(event){
    var input = event.key;
    var type = parseInt(input);
    //console.log(type == "number");
    if( typeof type === "number" && !isNaN(type) && type !== 0){
        if(solvedPuzzle[idDiv][idCell] == type ){
            $(`#${target}`).text(`${input}`);
            console.log("right");}
        else{
            console.log("wrong");
            count++;
            if(count == 3){
                console.log("game over");
            }
        }
            
    }
});
    




    //make game over
    //make restart
    //center txt inside cell and make it bigger in css
