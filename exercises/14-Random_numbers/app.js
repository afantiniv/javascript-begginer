/*Exercise closely resembles 11 - consider introducing another concept here? */

function getRandomInt()
{
	let randomNumber = Math.random() * 10;
	randomNumber = Math.floor(randomNumber);
	return randomNumber;
}


console.log(getRandomInt());