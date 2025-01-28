'use strict';

/**
 * Calculates the new rating for the winner based on the ratings of the winner and the loser
 * @param {number} winnerRating - rating of the winner
 * @param {number} loserRating - rating of the loser
 * @returns {number} new winner rating
 */
function calculateNewRate(winnerRating, loserRating) {
    if (typeof winnerRating !== 'number' || typeof loserRating !== 'number' || Number.isNaN(winnerRating) || Number.isNaN(loserRating)) {
        console.log('Invalid input, please valid provide numbers');
        return NaN;
    }

    if (winnerRating < 0 || loserRating < 0) {
        console.log('Invalid input, rating must be a positive number');
        return NaN;
    }

    let newRating = 
        winnerRating === 0 ? loserRating :
        winnerRating < loserRating ? (winnerRating + (loserRating - winnerRating + 5) / 3) :
        winnerRating >= loserRating && winnerRating <= loserRating + 2 ? (winnerRating + 2) :
        winnerRating > loserRating + 2 && winnerRating < loserRating + 20 ? (winnerRating + 1) :
        winnerRating >= loserRating + 20 ? winnerRating : NaN;

    console.log(`Winner ${winnerRating}, Loser ${loserRating} = New Winner rating is ${newRating}`);
    return parseFloat(newRating.toFixed(1));
}

calculateNewRate(0, 30); // 30.0 (=30)
calculateNewRate(60, 100); // 75.0 (+15)
calculateNewRate(33, 32); // 35.0 (+2)
calculateNewRate(33, 30); // 34.0 (+1)
calculateNewRate(33, 10); // 33.0 (+0)

calculateNewRate(NaN, 10); // NaN
calculateNewRate(10, NaN); // NaN
calculateNewRate(-10, 0); // NaN
calculateNewRate(0, -10); // NaN
calculateNewRate('abc', 5); // NaN
calculateNewRate(25, '25'); // NaN