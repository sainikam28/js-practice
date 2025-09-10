const orderId = 281101

let customerName = "john"

var totalCost = 350

let date

// orderId = 281102

// We can't reassign value for const
console.log(orderId)

customerName = "elon"
totalCost = 400
console.table([orderId, customerName, totalCost, date])

// ## Prefer to not use var. It is not scope oriented.



