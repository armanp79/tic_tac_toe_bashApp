const readline = require('readline');




board = ['1','2','3','4','5','6','7','8','9']

var renderBoard = (board) => {
  var str = ""

  var row1 = [board[0],board[1],board[2]];
  var row2 = [board[3],board[4],board[5]];
  var row3 = [board[6],board[7],board[8]];


  str +=`${row1[0]} | ${row1[1]} | ${row1[2]}\n`
  str += '---------\n'
  str +=`${row2[0]} | ${row2[1]} | ${row2[2]}\n`
  str += '---------\n'
  str +=`${row3[0]} | ${row3[1]} | ${row3[2]}\n`

  console.log(str)
}



async function main() {
  console.log("Welcome To Tic Tac Toe!\n");
  console.log("How To Play: ");
  console.log("First Player to go will be X and the second will be O. Enter numbers 1-9 when prompted to place your move");
  console.log("Here is a visual representation for which number to enter for which box:\n");
  console.log(renderBoard(board), '\n');
  console.log('Enter ctrl + d to end!');

  // let move = null;
  // for (let i =0; i<4;i++) {
  //   move = await getInput();
  //   console.log(move, 'move');
  // }
  const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter Move: '
  })

  var validInputs = [1,2,3,4,5,6,7,8,9];
  var round = 1;
  var player = 'X';
  console.log('Round', round, '\n')
  console.log('Player', player, ':')

  input.prompt()
  input.on('line', (move)=>{

    move = Number(move);

    if (validInputs.includes(move)) {
      board[move-1] = player
      round += 1;
      player = player === 'X' ? 'O' : 'X';
      validInputs = validInputs.filter(m => m!= move);

      renderBoard(board);


    } else {
      console.log('invalid retry')
    }

    if (validInputs.length > 0) {
      input.prompt();
    } else{
      console.log('Tie')
      input.close();
    }
  })



}




main();