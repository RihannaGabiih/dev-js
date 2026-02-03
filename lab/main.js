// let fullName = "cleo de Jesus"
// console.log(fullName.split(""))

// let arrayString = fullName.split(" ")
// console.table(arrayString)

// let arrayCount = arrayString.length
// console.log(arrayCount)

// let name = arrayString[0]
// let lastName = arrayString[arrayCount - 1]

// function Welcome() {
//     console.log("Hello word! dentro da função");
// }

// Welcome()

// function WelcomeComParams(name) {
//     console.log(`Olá, ${name}`);
// }

// WelcomeComParams("Chocolate Branco")

let fullName = "Rihanna Gabriella Santos"

function Welcome(fullName){

    let arrayString = fullName.split(" ")
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length - 1]


    console.log(`Olá, ${firstName} ${lastName}  `)
}

Welcome()