// ** Premier League Champions **
// 
// Create a function that takes an array of football clubs with properties: name, wins, loss, draws,
// scored, conceded - and returns the team name with the highest number of points. If two teams have
// the same number of points, return the team with the largest goal difference.
// 
// How to Calculate Points and Goal Difference:
//  •Total Points = 3 * wins + 0 * loss + 1 * draws = 3
//  •Goal Difference = scored - conceded = 88 - 20 = 68
// 
// champions(arr) ➞ str
// 
// ------------------------------------------------------------------------------------------------

const champions = (arr) => {
    arr.forEach(team => {
        team.totalPoints = team.wins * 3 + team.draws * 1 + team.loss * 0;
        team.goaldifferential = team.scored - team.conceded;
    });
    return arr
        .filter((item, index, arr) => Math.max(...arr.map(x => x.totalPoints)) == item.totalPoints)
        .filter((item, index, arr) => Math.max(...arr.map(x => x.goaldifferential)) == item.goaldifferential)
        [0].name;
};

console.log(champions([
    {
    name: "Manchester United",
    wins: 29,
    loss: 1,
    draws: 8,
    scored: 88,
    conceded: 20,
    },
    {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
    },
    {
    name: "Manchester City",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 94,
    conceded: 21,
    },
    {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
    },
])) // ➞ "Manchester United"
