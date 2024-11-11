// function points(games) {
//   let arr = []
//   if()
//   return 0
// }

function points(games) {
    let totalPoints = 0;

    // Loop through each game result in the array
    games.forEach(game => {
        // Split the string into our team's score and the opponent's score
        let [x, y] = game.split(':').map(Number);

        // Award points based on the result
        if (x > y) {
            totalPoints += 3; // Win
        } else if (x < y) {
            totalPoints += 0; // Loss
        } else {
            totalPoints += 1; // Tie
        }
    });

    // Return the total points
    return totalPoints;
}