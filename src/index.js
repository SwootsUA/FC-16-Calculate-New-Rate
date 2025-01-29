'use strict';

/**
 * Calculates the new rating for the winner based on the ratings of the winner and the loser
 * @param {number} winnerRating - rating of the winner
 * @param {number} loserRating - rating of the loser
 * @returns {number} new winner rating
 */
function calculateNewRate(winnerRating, loserRating) {
    if (typeof winnerRating !== 'number' || typeof loserRating !== 'number' || Number.isNaN(winnerRating + loserRating)) {
        console.log('Invalid input, please provide valid numbers');
        return NaN;
    }

    if (winnerRating < 0 || loserRating < 0) {
        console.log('Invalid input, rating must be a positive number');
        return NaN;
    }

    if (winnerRating === 0) {
        return +loserRating.toFixed(1);
    }
    if (winnerRating < loserRating) {
        return +(winnerRating + (loserRating - winnerRating + 5) / 3).toFixed(1);
    }
    if (winnerRating >= loserRating && winnerRating <= loserRating + 2) {
        return +(winnerRating + 2).toFixed(1);
    }
    if (winnerRating > loserRating + 2 && winnerRating < loserRating + 20) {
        return +(winnerRating + 1).toFixed(1);
    }
    if (winnerRating >= loserRating + 20) {
        return +winnerRating.toFixed(1);
    }

    return NaN;
}

//   newWinnerRatings = 30, 75, 35, 34, 33, NaN, NaN, NaN, NaN, NaN, NaN
let testWinnerRatings = [0, 60, 33, 33, 33, NaN, 10, -10, 0, 'abc', 25];
let testLoserRatings = [30, 100, 32, 30, 10, 10, NaN, 0, -10, 5, '25'];

for (let i = 0; i < testWinnerRatings.length; i++) {
    let newWinnerRating = calculateNewRate(testWinnerRatings[i], testLoserRatings[i]);
    
    if (Number.isNaN(newWinnerRating)) { 
        continue;
    }

    console.log(`Winner ${testWinnerRatings[i]}, Loser ${testLoserRatings[i]} = New Winner rating is ${newWinnerRating}`);
}