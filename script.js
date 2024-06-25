//your JS code here. If required.
function myPromise(delay) {
	
	return new Promise((resolve,reject)=>{
		setTimeout(display,delay)
		 resolve()
		})
}
function display() {
	let text = document.getElementById("text").value
	let output = document.getElementById("output")
	output.textContent = text
}
async function myFunc(event) {
	event.preventDefault()
	let delay = document.getElementById("delay").value
	await myPromise(delay)
}
	
}