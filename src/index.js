#!/usr/bin/env node
const open = require('open');
const chalk = require('chalk');

function space(){
	console.log('\n')
}

function main(){
	// get all the arguments
	const args = process.argv.slice(3).join(' ');
	space();
	console.log(chalk.blue.bgBlack.bold((`Searching for "${args}" on Google`)));
	space();
	open(`https://www.google.com/search?q=${args}`);
}

if(require.main === module){
	main();
}

