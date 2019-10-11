document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here! 
var board = { cells: [] }


function makeBoard() {

  for (var x = 0; x < 6; x++) {
    for (var y = 0; y < 6; y++) {
      var random = Math.random();
      board.cells.push({
        row: x,
        col: y,
        isMine: Boolean(Math.floor(Math.random() * 1.5)),
        isMarked: false,
        hidden: true
      })
    }
  }
}


function startGame() {
  
  makeBoard()
  for (i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // for loop through board cells
  // if cell is true to isMine and NOT true to isMarked - return to exit function
  // if cell is true to isMarked is true to hidden - return to exit function
  // if cell is true to isMine and true to isMarked - you have won???
  //
  for (k = 0; k < board.cells.length; k++) {
    if (board.cells[k].isMine === true && board.cells[k].isMarked === false) {
      console.log('hey')
      return
    }

    else if (board.cells[k].isMine !== true && board.cells[k].hidden === true) {
      console.log('ollie')
      return
    }

  }
  lib.displayMessage('You win!')
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  //loop surrounding cells array
  //if isMine is equal to true, add to count variable
  //return count
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  
  for (j = 0; j < surrounding.length; j++) {
    if (surrounding[j].isMine === true) {

      // ollie said something about ++??
      count++
    }
  }

  return count;

  // }

  // }
  //console.log(surrounding)
}

function restart () {
  document.location.reload();
}


