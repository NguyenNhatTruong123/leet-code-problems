var solveSudoku = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') {
                for (let l = 1; l < 10; l++) {
                    if (isValid(board, i, j, l.toString())) {
                        board[i][j] = l.toString()
                        let solved = solveSudoku(board)
                        if (solved !== false) return solved
                        board[i][j] = '.'
                    }
                }
                return false
            }
        }
    }
    return board
};

function isValid(board, i, j, l) {
    for (let p = 0; p < board.length; p++) {
        if (board[i][p] === l) return false
        if (board[p][j] === l) return false

        let gridVal = board[3 * Math.floor(i / 3) + Math.floor(p / 3)][3 * Math.floor(j / 3) + p % 3]
        if (gridVal === l) return false
    }

    return true
}