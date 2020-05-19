// echo function prints message num numberof times
function echo(msg, num){
	if(num < 0){
		console.log("Error: invalid repeat number!");
	} else{
		for(var i = 0; i < num; i++){
			console.log(msg);
		}
	}
}

echo("cool", 5);