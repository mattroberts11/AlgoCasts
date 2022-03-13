
 let competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]
let results = [0, 0, 1];

function tournamentWinner(competitions, results) {
  // competitions = [homeTeam, awayTeam] = string.length <= 30.
	// results [1] = homeTeam won / results [0] away team won
	// teams compete with each other exactly once
	// tournament will have at least 2 teams
	let teamResults = {};
	// let teamNameArr = Object.keys(competitions);
	// create teamResults Object initializing team scores to 0
	for(let i = 0; i < competitions.length; i++){
    //initialize object
    teamResults.competitions[i][i] = 0;
    teamResults.competitions[i][i + 1] = 0;

			teamResults.competitions[i] = results[i] === 1 ? teamResults.competitions[i][i] += 3 : teamResults.competitions[i][i] += 0; // homeTeam name
			teamResults.competitions[i + 1] = results[i] === 0 ? teamResults.competitions[i][i + 1] += 3 : teamResults.competitions[i][i + 1] += 0;// awayTeam name
	}

	// console.log(teamResults)
	console.log(competitions[0][0])
	// let winner = '';
	// let score = 0;
	// // iterate though teamResults object to find highest score
	// for(let property of teamResults){
	// 	if(teamResults[property] > score){
	// 		winner = property;
	// 		score = teamResults[property];
	// 	}
	// }
	// return the teamName of the tournament
  // return winner; // the team name [string]
}

tournamentWinner(competitions, results);
