//your JS code here. If required.
function myPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay)
    })
}

async function myFunc(event) {
    event.preventDefault();
	let text = document.getElementById("text").value
    let delay = Number(document.getElementById("delay").value);
    await myPromise(delay);
    let output = document.getElementById("output");
    output.textContent = text;
}