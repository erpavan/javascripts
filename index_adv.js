// JAVA Script OOPs
// Prototype - specil property in java script object
// let a = {
//     name: "Pavan",
//     lang: "JS",
//     run: ()=>{
//         alert("Self run")
//     }
// }
// // console.log(a)
// // console.log(a.toString())   // Prototypal inheritance
// // console.log(a.valueOf())    // prototypal inheritance
// let p = {
//     run: ()=>{
//         alert("Run")
//     }
// }

// a.__proto__ = p         // Setup prototype method for object a
// a.run()                 // Able to run method now

// Classes  & Objects in Java Scripts
// class RailwayForm {
//     // Constructor(){}
//     constructor(givenName,givenLocation){
//         this.name = givenName,
//         this.location = givenLocation
//         console.log("constructor called." + givenName + " Form " + givenLocation)
//     }
//     //Method1(){}
//     submit() {
//         alert(this.name + " submitted form who live in " + this.location)
//     }
//     //Method2(){}
//     cancel(){
//         alert(this.name + " cancelled form who live in " + this.location)
//     }
//     ticketSell(){
//         let num = 5
//         console.log(`${num} Ticket sold`)
//     }
// }

// let passanger1 = new RailwayForm("Pavan","Kannauj")      // Constructor called when object created
// let passanger2 = new RailwayForm("Ashi","Kashipur")

// // passanger1.fill("Pavan","Kannauj")
// passanger1.submit()
// passanger2.cancel()

// Class inheritance and extends
// super keywords 
// Method overriding
// class MetroForm extends RailwayForm {
//     constructor(givenName,givenLocation){
//         super(givenName,givenLocation)                      // Constructor overriding
//         console.log("Metro constructor called")
//     }
//     show(){
//         console.log(this.name + " Show Metro run.")
//     }
//     ticketSell(){                               // super call
//         super.ticketSell()
//         console.log("Metro ticket sold.")
//     }
//     // ticketSell(){                               // Method overriding
//     //     let num = 6
//     //     console.log(`${num + 1} Ticket sold`)
//     // }
// }

// let mF = new MetroForm("Pavan", "Kannauj")
// mF.ticketSell()









