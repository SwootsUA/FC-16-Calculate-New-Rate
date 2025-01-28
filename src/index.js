'use strict';

/**
 * Calculates the new rating for the winner based on the ratings of the winner and the loser
 * @param {number} winnerRating - rating of the winner
 * @param {number} loserRating - rating of the loser
 * @returns {number} new winner rating
 */
function calculateNewRate(winnerRating, loserRating) {
    if (typeof winnerRating !== 'number' || typeof loserRating !== 'number' || winnerRating < 0 || loserRating < 0) {
        return NaN;
    }

    let newRating;

    if (winnerRating === 0) {
        newRating = loserRating;
    } else if (winnerRating < loserRating) {
        newRating = (winnerRating + (loserRating - winnerRating + 5) / 3);
    } else if (winnerRating >= loserRating && winnerRating <= loserRating + 2) {
        newRating = (winnerRating + 2);
    } else if (winnerRating > loserRating + 2 && winnerRating < loserRating + 20) {
        newRating = (winnerRating + 1);
    } else if (winnerRating >= loserRating + 20) {
        newRating = winnerRating;
    }

    return parseFloat(newRating.toFixed(1));
}

console.log(calculateNewRate(0, 30)); // 30.0 (=30)
console.log(calculateNewRate(60, 100)); // 75.0 (+15)
console.log(calculateNewRate(33, 32)); // 35.0 (+2)
console.log(calculateNewRate(33, 30)); // 34.0 (+1)
console.log(calculateNewRate(33, 10)); // 33.0 (+0)
