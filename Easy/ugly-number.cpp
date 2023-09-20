class Solution {
    public:
        bool isUgly(int n) {
            int prime = 2;

            if (n <= 0) return false;

            while (n > 1) {
                if (n % prime != 0) {
                    prime++;
                    if (prime > 5) return false;
                } else {
                    if (prime > 5) {
                        return false;
                    } else {
                        n = n / prime;
                    }
                }
            }
            return true;
        }
};