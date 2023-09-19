let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let saves = "Previous Counts: "

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.textContent = count
}

function reset() {
    document.getElementById("save-el").textContent = saves
    count = 0
    countEl.textContent = 0;
}

