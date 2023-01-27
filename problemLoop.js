// Bei einem längeren Input, hast du das Problem, dass der Loop aufhört bevor du alle Elemente gelöscht hast --> wegen dem i
const dir = ['N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S', 'N', 'S']

function solve(){
	for(let i=0; i<dir.length; i++){
		dir.splice(0,2);
		console.log(`Round ${i}: ${dir}`)
	}
	console.log('Result: ',dir)
}

solve()

