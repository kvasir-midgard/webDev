function avg(vals){
	var sum = 0;
	vals.forEach(function(val){ sum += val; });
	console.log(Math.round(sum/vals.length));
}

var testVals1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var testVals2 = [1.2, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9, 9.1];

avg(testVals1); 
avg(testVals2);