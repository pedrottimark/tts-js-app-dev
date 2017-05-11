
var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];


const mike = players.find(p => p.firstName === "Mike")
// console.log(mike)

const runningBacks = players.filter(p => p.position === "RB")
// console.log(runningBacks);

const lastNames = players.map(p => p.lastName)

const highScoringRBs = players.filter(p => p.touchdowns > 5 && p.position === "RB");

const names = highScoringRBs.map(p => `${p.firstName} ${p.lastName}`)

