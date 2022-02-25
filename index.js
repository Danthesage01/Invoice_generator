const myArray = [
    {   service: "Wash Car",
        price: "10"
    },{ service: "Mow Lawn",
        price: "20"
    },{ service: "Pull Weeds",
        price: "30"
    }
]
let result = []

const grid = document.querySelector(".grid")
const grid2 = document.querySelector(".grid2")
const grid3 = document.querySelector(".grid3")
let f1, f2, f3 = 0

function cart1() {
    const left = document.createElement("div")
    const right = document.createElement("div")
    grid.appendChild(left)
    grid.appendChild(right)
    left.textContent = `${myArray[0].service}`
    f1 = parseFloat(myArray[0].price).toFixed(2)
    right.textContent = `$${f1}`
    document.getElementById("sum").textContent = `$${(parseFloat(f1)).toFixed(2)}`
    document.getElementById("btn1").disabled = true
}
function cart2() {
    const left = document.createElement("div")
    const right = document.createElement("div")
    grid2.appendChild(left)
    grid2.appendChild(right)
    left.textContent = ` ${myArray[1].service} `
    f2 = parseFloat(myArray[1].price).toFixed(2)
    right.textContent = `$${f2} `
    document.getElementById("sum").textContent = `$${(parseFloat(f1) + parseFloat(f2)).toFixed(2)}`
    document.getElementById("btn2").disabled = true
}
function cart3() {
    const left = document.createElement("div")
    const right = document.createElement("div")
    grid3.appendChild(left)
    grid3.appendChild(right)
    left.textContent = ` ${myArray[2].service} `
    f3 = parseInt(myArray[2].price).toFixed(2)
    right.textContent = `$${f3} `
    document.getElementById("sum").textContent = `$${(parseFloat(f1) + parseFloat(f2) + parseFloat(f3)).toFixed(2)}`
    document.getElementById("btn3").disabled = true
}