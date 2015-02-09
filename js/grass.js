
function bmi1() {
	var p = document.getElementById('a').value;
	var q = document.getElementById('b').value;
	var r = document.getElementById('c').value;
	console.log(p,q,r);
	var s = p*12+parseInt(q) ;
	console.log(s);
        var calc = (r/(s*s))*703;
        document.getElementById("d").value = calc.toFixed(4) ;
    
}


function bmi2() {
    var g = document.getElementById('e').value;
    var h = document.getElementById('f').value;
    console.log(g,h);
    var calc1 = h/(g*g);
    document.getElementById("z").value = calc1.toFixed(4) ;
    
}



