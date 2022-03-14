let inputDir = {x:0, y:0};
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio ("dead.mp3");
const moveSound = new Audio("move.mp3");
const musicSound= new Audio("continuous.mp3");
let score = 0;
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
] ;
food = {x:6, y:7};
////////////////////////////////////////////////////////////////
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
        lastPaintTime = ctime;
        gameEngine();

       
}
///////////////////////////////////////////////////////////////
//1: updating the snake array & Food
//2: Render the snake & Food



function gameEngine(){
    // if (iscollide(snakeArr)){
    //     gameOverSound.play();
    //     musicSound.pause();
    //     inputDir={x: 0, y:0};
    //     alert ("Game over , press any key to restart!");
    //     snakeArr= [{x: 13, y: 15}];
    //     musicSound.play();
    //     score = 0;
    // }

//if snake has eaten the food, increment the score and regenerate the food///////////
if (snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y +inputDir.y});
    let a=2;
    let b= 16;
    food= {x: Math.round(a+ (b-a)* Math.random()), y: Math.round(a+(b-a)*Math.random())}
}
////////////////////////////////moving the snake/////////////////////////////////////
for (let i = snakeArr.length - 2 ; i>=0; i--){
    const element= array[i];
    snakeArr[i+1] = {...snakeArr[i]}
}
snakeArr[0].x += inputDir.x;
snakeArr[0].y += inputDir.y;

/////////////////////////////////////////////////////////////////////////////////////
    board.innerHtml = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0){
            snakeElement.classList.add("head");
        }else{
            snakeElement.classList.add("snake")
        }
        board.appendChild(snakeElement);
    });

    //////display the food////////////
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}


/////////////////////////////main logic//////////////////////////////////////////////////

window.requestAnimationFrame(main);
window.addEventListener ("keydown", e =>{
    inputDir = {x:0, y:1};
    musicSound.play();
    switch (e.key) {
    case "ArrowUp": 
        console.log("ArrowUp")
        inputDir.x= 0;
        inputDir.y= -1;
        break;
    case "ArrowDown": 
        console.log("ArrowDown")
        inputDir.x= 0;
        inputDir.y= 1;
        break;
    case "ArrowRight": 
        console.log("ArrowRight")
        inputDir.x= 1;
        inputDir.y= 0;
        break;
    case "ArrowLeft": 
        console.log("ArrowLeft")
        inputDir.x= -1;
        inputDir.y= 0;
        break;
    default:
        break;

    }
});

