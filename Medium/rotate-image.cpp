class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        vector<vector<int>> re(matrix[0].size(), vector<int> (matrix[0].size()));
        int size = matrix[0].size() - 1;        
        for (int i = 0; i <= size; i ++){
            int a = size;
            for (int j = 0; j <= size; j++){
                re[i][j] = matrix[a][i];
                a--;
            }
        }
        matrix = re;
    }
};