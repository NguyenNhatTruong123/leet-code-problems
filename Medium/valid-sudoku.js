/**
 * @param {character[][]} board
 * @return {boolean}
 */


var getSquare = function (i, j) {
    let a = 0;
    let b = 0;

    a = ~~(i / 3) * 3;
    b = ~~(j / 3) * 3;

    return [a, b]
};

var checkSquare = function (i, j, indexI, indexJ, board) {
    for (let a = indexI; a < indexI + 3; a++) {
        for (let b = indexJ; b < indexJ + 3; b++) {
            if ((a !== i && b !== j) && (board[a][b] === board[i][j])) {
                return false
            }
        }
    }
    return true
};

var checkColumn = function (i, j, board) {
    for (let a = 0; a < 9; a++) {
        if (a !== i && board[a][j] === board[i][j]) {
            return false;
        }
    }
    return true
};

var checkRow = function (i, j, board) {
    for (let a = 0; a < 9; a++) {
        if (a !== j && board[i][a] === board[i][j]) {
            return false;
        }
    }
    return true
};

var isValidSudoku = function (board) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let [a, b] = getSquare(i, j);
                if (!checkSquare(i, j, a, b, board) || !checkColumn(i, j, board) || !checkRow(i, j, board)) {
                    return false
                }
            }
        }
    }

    return true;
};