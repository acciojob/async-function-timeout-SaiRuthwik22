//your JS code here. If required.
function myPromise(delay) {
	let text = document.getElementById("text").value
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, delay)
    })
}

async function myFunc(event) {
    event.preventDefault();
    let delay = document.getElementById("delay").value;
    let text1 = await myPromise(delay);
    let output = document.getElementById("output");
    output.textContent = text1;
}