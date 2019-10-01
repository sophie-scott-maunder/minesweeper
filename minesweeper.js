document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0, col: 0, isMine: true, hidden: true
    },
    {
      row: 0, col: 1, isMine: false, hidden: true
    },
    {
      row: 0, col: 2, isMine: true, hidden: true
    },
    {
      row: 1, col: 0, isMine: true, hidden: true
    },
    {
      row: 1, col: 1, isMine: false, hidden: true
    },
    {
      row: 1, col: 2, isMine: false, hidden: true
    },
    {
      row: 2, col: 0, isMine: true, hidden: true
    },
    {
      row: 2, col: 1, isMine: true, hidden: true
    },
    {
      row: 2, col: 2, isMine: false, hidden: true
    }]
}






function startGame() {
  //write a for loop that loops through board.cells
  //call countSurroundingMines once for each cell in board.cells
  //pass each cell as an argument
  //assign result of countSurroundingMines to a property on each cell object
  //call it surroundingMines
  for (i = 0; i < board.cells.length; i++) {
    cell = board.cells[i]
    cell.surroundingMines = countSurroundingMines(cell)
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
    if (board.cells[k].isMine === true && board.cells[k].isMarked !== true) {
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
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (j = 0; j < surrounding.length; j++) {
    if (surrounding[j].isMine === true) {

      // ollie said something about ++??
      count++
    }
  }

  return count
  // }

  // }
  //console.log(surrounding)
}

