/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

function mazeSolver(maze, index = [0, 0]) {
  let row = index[0];
  let column = index[1];
  let path = "";

  // base case:
  // if the index is already at the exit, return an empty string
  if (maze[row][column] === "e") {
    console.log("you have reached the exit!");
    console.log(path);
    return path;

    // recursion:
    // do the following while the current position is open
  }
  while (maze[row][column] === " ") {
    // if the next position is in the same row and is still open,
    if (column < maze[row].length - 1 && maze[row][column + 1] !== "*") {
      console.log("turning right");
      // block current position
      maze[row][column] = "*";
      // add right to the path to exit
      path = "R";
      console.log(path);
      // return the current path and call the function again
      return path + mazeSolver(maze, [row, column + 1]);
    }

    // if we are not in the last row of the maze and the position in the next row is not blocked, block the current position, and add down as the next step in the path
    if (row < maze.length - 1 && maze[row + 1][column] !== "*") {
      console.log("going down");
      maze[row][column] = "*";
      path = "D";
      console.log(path);
      // return the current path and call function again
      return path + mazeSolver(maze, [row + 1, column]);
    }

    // if we are not in the first row, and the column in the row above is not blocked, block the current position, and add up as the next step in the path
    if (row > 0 && maze[row - 1][column] !== "*") {
      console.log("going up");
      maze[row][column] = "*";
      path = "U";
      console.log(path);
      return path + mazeSolver(maze, [row - 1, column]);
    }

    // if we are past the first column, and the column to the left is not blocked, block the current position, and add left as the next step in the path
    if (column > 0 && maze[row][column - 1] !== "*") {
      console.log("turning left");
      maze[row][column] = "*";
      path = "L";
      console.log(path);
      return path + mazeSolver(maze, [row, column - 1]);
    }
  }
}

module.exports = mazeSolver;
