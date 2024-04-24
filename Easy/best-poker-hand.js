/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    if (Array.from(new Set(suits)).length === 1) return "Flush"
    let setLen = Array.from(new Set(ranks)).length
    if (setLen === 5) return "High Card"
    else if (setLen === 4) return "Pair"
    else {

    }
};

console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]))