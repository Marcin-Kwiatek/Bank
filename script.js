let deposit = document.getElementById("deposit")
let withdrawal = document.getElementById("withdrawal")
let add = document.getElementById("add")

let a = ""
deposit.addEventListener("click", function () { change("+") })
withdrawal.addEventListener("click", function () { change("-") })
add.addEventListener("click", function () { addition("") })

function change(event) {
    let plusAndMinus = document.getElementById("plusAndMinus")
    plusAndMinus.innerHTML = event
    if(event==="+"){a=""}
    if(event==="-"){a="-"}
}
function addition() {
    let addedTransactional = document.getElementById("amount").value
    if(addedTransactional===0&&addedTransactional===""){return}
    if(a + addedTransactional>0){
        let plus = document.createElement('div')
        plus.innerHTML = a + addedTransactional
        document.getElementById("deposits").appendChild(plus)
    }
    if(a + addedTransactional<0){
        let minus = document.createElement('div')
        minus.innerHTML = a + addedTransactional
        document.getElementById("withdrawals").appendChild(minus)
    }
}