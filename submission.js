let nextPlayer = 'X'; 

//initalizes the game 
document.getElementById('next-lbl').innerText = nextPlayer;

createGameBoard()

function createGameBoard()
{
    //Populates each cell with a button element
    for(let i=1; i<=9; i++){
        let cell = document.getElementById('c' + i);
        cell.innerHTML = '<button>[ ]</button>';
    }
   
    let btns = document.querySelectorAll('button');

    for (let i=0; i<btns.length; i++)
    {
        //loops though all elemtns in btns and attaches a click to it
       btns[i].addEventListener('click', function(event){
            takeCell(event);
        })
    }
}


function takeCell(event)
{
    //updated the clicked button with the current palyers symbol, then disables it
   let clickedButton = event.target;
   clickedButton.innerText = nextPlayer;

    
    clickedButton.disabled = true;

    // swithces the current player
    nextPlayer = (nextPlayer === 'X')? 'O' :'X';
    document.getElementById('next-lbl').innerText = nextPlayer;


    if (isGameOver())
    {
        //checks if the game has ended, if so then it shows this
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over </h1>';
    }
 
}

function isGameOver()
{
    //loops through evey element on the board button and checks if any there are any avaible moves and returns true or false accordinly
    let btns = document.querySelectorAll('button');
    for(let i=0; i<btns.length; i++){
        if(!btns[i].disabled){
            return false;
        }
    }
    //
    return true;
}

//index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <b>Next Player:</b> <label id='next-lbl'> </label>
    <br>
    <table id='gameboard' border="1"> 
        <tr>
            <td id='c1'></td>
            <td id='c2'></td>
            <td id='c3'></td>
        </tr>
        <tr>
            <td id='c4'></td>
            <td id='c5'></td>
            <td id='c6'></td>
        </tr>
        <tr>
            <td id='c7'></td>
            <td id='c8'></td>
            <td id='c9'></td>
        </tr>
    </table>
    <label id='game-over-lbl'></label>

    <script src='scripts.js'></script>
</body>

</html>
