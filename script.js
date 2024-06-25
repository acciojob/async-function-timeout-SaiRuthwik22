//your JS code here. If required.
function myPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let text = document.getElementById("text").value
            resolve(text);
        }, delay)
    })
}

async function myFunc(event) {
    event.preventDefault();
    let delay = document.getElementById("delay").value;
    let text = await myPromise(delay);
    let output = document.getElementById("output");
    output.textContent = text;
}