console.log("Reaching you live from sample")

let name = "Zino"
let age = 78
let balance = 200.30

balance = 179

balance = "179"

balance = [0,1,2,4]
balance = [0,"Zino",30.556,-454]

balance = "zino"
balance = 30


console.log(name)
console.log("Name: "+name)
console.log("Name", name)
console.log("Name",name, "Age", age, "balance",balance)

//alert("Name: " + name + "\nAge: "+age)

document.querySelector("#userInfo")
    .innerHTML = `
       <br/>Name: ${name}
       <br/>Age: ${age}
       </br>Balance: ${balance}
    `

let students = ['Zino', "Another Zino", '3rd Zino'];

console.log(students[2])

students.push("4th Zino")
students.unshift("5th Zino")

console.log(students)
console.table(students)

students.pop()
students.shift()