from itertools import permutations 

class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        ar = [];
        for i in range(1, n+1):
            ar.append(i)
        
        per = list(permutations(ar))[k-1]
        s = ""
        for num in per:
            s += "{}".format(num)
        
        return s