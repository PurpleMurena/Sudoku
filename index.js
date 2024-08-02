var container = $("#board");
var target ;
const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

    //TODO map a solved board
    //TODO correct input checker
    //TODO keep track of wrong inputs
    //center txt inside cell and make it bigger in css
for(var i=0; i<9 ;i++){
    const div = $('<div>',{class:"section", id: `div${i+1}`});
    container.prepend(div);
    for(var j=0;j<9 ;j++){
        const box = $('<div>',{class:"cell", id: `div${i+1}Cell${j+1}`, text: `${puzzle[i][j]}`});
        //const box = $('<div>',{class:"cell", id: `div${i+1}Cell${j+1}`, text: `${j+1}`});
        
        div.prepend(box);
        box.click(function(e){
            console.log(e.target.id);
            target = e.target.id;
        });
        //console.log(puzzle[9-i][9-j]);
        }
    
}

$("body").keydown(function(event){
        var input = event.key;
        var type = parseInt(input);
        console.log(type == "number");
        if( typeof type === "number" && !isNaN(type) && type !== 0){
            $(`#${target}`).text(`${input}`);
        }
});
    

//if number is 
//every time user inputs number we say if it is right or wrong
//should i make sudoku solver first and then check the input with already answer
//or should i check only final answer
//check 3 different arrows 
//do i need recursion
// function checkBox(cell){
//     let div = cell.substring(3,4);
//     if (div)
// }