//your JS code here. If required.
let element=document.querySelector("level");
let count=0;
	while(element){
		count++;
		element=element.parentElement;
	}

document.alert(count);