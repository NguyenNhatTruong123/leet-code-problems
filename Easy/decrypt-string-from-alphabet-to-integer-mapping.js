/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let decrypt = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10": "j",
        "11": "k",
        "12": "l",
        "13": "m",
        "14": "n",
        "15": "o",
        "16": "p",
        "17": "q",
        "18": "r",
        "19": "s",
        "20": "t",
        "21": "u",
        "22": "v",
        "23": "w",
        "24": "x",
        "25": "y",
        "26": "z"
    }

    let splitString = s.split("#")
    let result = ""
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].length === 2 && i !== splitString.length - 1) result += decrypt[splitString[i]]
        else if (splitString[i].length > 2 && i !== splitString.length - 1) {
            for (let j = 0; j < splitString[i].length - 2; j++) {
                result += decrypt[splitString[i][j]]
            }
            result += decrypt[splitString[i][splitString[i].length - 2] + splitString[i][splitString[i].length - 1]]
        } else {
            for (let j = 0; j < splitString[i].length; j++) {
                result += decrypt[splitString[i][j]]
            }
        }
    }

    return result
};

console.log(freqAlphabets("151112"))