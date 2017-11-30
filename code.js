function cycle() {
	var a =	uradi("tebe")
	var b = uradi("ti")
	obavesti(a, b)
	document.getElementById("rezultat").innerHTML = ""
}

function uradi(name) {
	var text = document.getElementById(name).value
	//console.log(text)
	var arr = text.split("\n")
	var arr2 = []
	//console.log(arr.length)
	for(var i = 0; i<arr.length; i++){
		if(arr[i] == ""){
			arr2.push(arr[i+1])
		}
	}
	//console.log(arr2)
	document.getElementById(name).value = ""
	for(var n = 0; n<arr2.length; n++){
		document.getElementById(name).value += n+1 + ") " + arr2[n] + "\n"
	}
	return arr2
}

function obavesti(a, b) {
	var arr = []
	outerloop: for(var i = 0; i<b.length; i++){
		for(var n = 0; n<a.length; n++){
			if(a[n] == (b)[i]){
				continue outerloop;
			}
		}
		arr.push(b[i])
		document.getElementById("rezultat").innerHTML += i+1 + ") " + b[i] + "\n"
	}
	console.log(arr)
	alert(arr.toString())
	// Display in rezultat

}