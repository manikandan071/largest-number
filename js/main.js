let new1=700;
let new2=400;
let new3=300;
let new4=550;

if(new1>new4){
	if(new1>new2){
		if(new1>new3){
			console.log(new1);
		}
		else{
			console.log(new3);
		}
	}
	else{
		console.log(new2);
	}
}
else if(new2>new4){
	if(new2>new1){
		if(new2>new3){
			console.log(new2);
		}
		else{
			console.log(new3);
		}
	}
	else{
		console.log(new1);
	}
}
else if(new3>new4){
	if(new3>new1){
		if(new3>new2){
			console.log(new3)
		}
		else{
			console.log(new2)
		}
	}
	else{
		console.log(new1);
	}
}
else if(new4>new1){
	if(new4>new2){
		if(new4>new3){
			console.log(new4)
		}
		else{
			console.log(new3)
		}
	}
	else{
		console.log(new2);
	}
}