let myArray = [
    {service: "Wash Car",
    price : "$10" },
    {service: "Mow Lawn",
    price: "$20"
    },
    {service: "Pull Weeds",
     price: "$30"    }
    ]

    console.log(myArray)

    console.log(myArray[0].service)




function cart1(){
   
    let result = document.getElementById("result")
        result.textContent += ` ${myArray[0].service} `   
        result.textContent += ` ${myArray[0].price} ` 
           
   console.log("Button Clicked")
}
function cart2(){

        result.textContent += ` ${myArray[1].service} `   
        result.textContent += ` ${myArray[1].price} ` 
}
function cart3(){
    result.textContent += ` ${myArray[2].service} `  
        result.textContent += ` ${myArray[2].price} `
}