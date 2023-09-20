class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        for(int i = 0; i < 9; i++){
            for (int j = 0; j < 9; j++){
                if (board[i][j] != '.'){
                    vector<int> re = getSquare(i, j);
                    if (!checkSquare(i, j, re[0], re[1], board) || !checkColumn(i, j, board) || !checkRow(i,j,board)){
                        return false;
                    }
                }
            }
        }

        return true;
    }
    
    vector<int> getSquare(int i, int j){
        vector<int> re;

        re.push_back((i / 3) * 3);
        re.push_back((j / 3) * 3);

        return re;
    }

    bool checkSquare(int i, int j, int indexI, int indexJ, vector<vector<char>> board){
        for (int a = indexI; a < indexI + 3; a++){
            for (int b = indexJ; b < indexJ + 3; b++){
                if((a != i && b != j) && (board[a][b] == board[i][j])){
                    return false;
                }
            }
        }
        return true;
    };

    bool checkColumn(int i, int j, vector<vector<char>> board){
        for(int a = 0; a < 9; a++){
            if (a != i && board[a][j] == board[i][j]){
                return false;
            }
        }
        return true;
    };

    bool checkRow(int i, int j, vector<vector<char>> board){
        for(int a = 0; a < 9; a++){
            if (a != j && board[i][a] == board[i][j]){
                return false;
            }
        }
        return true;
    };

};