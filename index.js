const fetch = require('node-fetch');

const url = "https://adventofcode.com/2019/day/1/input/"; //document.URL;
let res;
fetch(url)
	.then(res => res.txt)
	.then((res) => {
			console.log(res);
})




const dataCleaner = 
	(x) => 
		{
			let data=[];let temp; 
			for (i in x)
				{temp = x[i]; 
					if (temp != "" && temp > 0) {data.push(temp)}};
					return data}  
					
const massPerElf = dataCleaner(res);

const fuel = massPerElf.map( m => Math.floor(m/3) -2);

const totalFuel = fuel.reduce( (a,c) => a+c, 0);

console.log(totalFuel);  