/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let first = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    let second = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    let third = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

    let result = []
    let sameRow = 0;
    for (let word of words) {
        if (first.some(i => word.toLowerCase().split("").includes(i))) {
            sameRow++
        }

        if (second.some(i => word.toLowerCase().split("").includes(i))) {
            sameRow++
            if (sameRow > 1) {
                sameRow = 0
                continue
            }
        }

        if (third.some(i => word.toLowerCase().split("").includes(i))) {
            sameRow++
            if (sameRow > 1) {
                sameRow = 0
                continue
            }
        }

        result.push(word)
        sameRow = 0;
    }

    return result
}