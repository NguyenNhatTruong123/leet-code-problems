/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    let slope = 0
    let ratioUp = coordinates[0][0] - coordinates[1][0]
    let ratioDown = coordinates[0][1] - coordinates[1][1]
    if (ratioDown !== 0 && ratioUp !== 0) {
        slope = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0])
    }

    let free = coordinates[0][1] - coordinates[0][0] * slope

    for (let i = 2; i < coordinates.length; i++) {
        if (slope === 0) {
            if (ratioUp == 0 && coordinates[i][0] !== coordinates[0][0]) return false
            if (ratioDown == 0 && coordinates[i][1] !== coordinates[0][1]) return false
        } else {
            if (coordinates[i][0] * slope + free !== coordinates[i][1]) return false
        }
    }
    return true
};

