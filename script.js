let deposit = document.getElementById("deposit")
let withdrawal = document.getElementById("withdrawal")

deposit.addEventListener("click", function () { change("+") })
withdrawal.addEventListener("click", function () { change("-") })

function change(event) {
    let plusAndMinus = document.getElementById("plusAndMinus")
    plusAndMinus.innerHTML = event
}
