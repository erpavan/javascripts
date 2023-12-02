// console.time("For loop time")
// for(i=0; i<=200; i++){
// }
// console.timeEnd("For loop time")

// Alert Details
// alert("File loaded")
// let input = prompt("Please confirm your input.")
// console.log(input)
// let confirmation = confirm("Show details")
// console.log(confirmation)

// BOM (Browser object model), DOM (Document object model) and JavaScript
// Document tree
// Nodes - Test/element/comment/leaf
// document.body.style.background = "red"
// let b = document.body
// console.log("First child of body: ", b.firstChild)
// console.log("First Element child of body:", b.firstElementChild)
// let firstHeading = document.getElementById("hd1")
// firstHeading.style.color ="blue";
// let allHeading = document.getElementsByClassName("hed");
// for (i = 0; i < allHeading.length; i++) {
//   allHeading[i].style.color = "red";
// }

// let firstHeading = document.querySelector(".first")
// let allParUnderDiv = firstHeading.querySelectorAll(".pc")
// allParUnderDiv[0].style.color = "red"
// allParUnderDiv[1].style.color = "blue"

// Matches/closest/contains methods for DOM object
// let par = document.getElementById("p1")
// console.log(par)
// console.log(par.matches(".pc"))
// console.log(par.closest(".first"))

// let first = document.getElementById("hd1")
// a = first.getAttribute("data-detail")
// let a = first.hasAttribute("data-detail")
// first.setAttribute("class", "new")
// first.removeAttribute("class", "hed")
// console.log(first.dataset)       // get data-* attributes

// Insertion of node in a DOM
// let pTag = document.getElementsByTagName("p")[0]
// pTag.innerHTML = pTag.innerHTML + '<span>Hi, Ashi</span>'
// Insertion using creating element
// let divTag = document.querySelector("div.first")
// let newHed = document.createElement("h2")
// newHed.innerHTML = "Friend"
// divTag.append(newHed)      // it will add at the
// divTag.prepend(newHed)      // it will add at the
// divTag.before(newHed)      // it will add at the
// divTag.after(newHed)      // it will add at the

// Insert adjacenthtml/text/element
// let divTag = document.querySelector("div.first")
// divTag.insertAdjacentHTML('beforebegin', '<div>Before begin</div>')
// divTag.insertAdjacentHTML('beforeend', '<div>Before end</div>')
// divTag.insertAdjacentHTML('afterbegin', '<div>AFter begin</div>')
// divTag.insertAdjacentHTML('afterend', '<div>After end</div>')

// remove node element from DOM
// divTag.remove()

// classList and className methods
// let divTag = document.querySelector("div.first");
// divTag.className = "first text_green"
// divTag.classList.remove("first")
// divTag.classList.add("first")
// divTag.classList.toggle("text_green")
// divTag.classList.toggle("hidden")
// console.log(divTag.classList.contains("first"))

// Settimeout and setinterval
// let timer = setTimeout((a,b)=>{
//     divTag.classList.add("text_green")
//     console.log("Sum:", a+b)
// },5000,4,5)
// let decision = prompt("Select y/n for stopping setTimeout")
// if (decision == "y"){
//     clearTimeout(timer)
// }

// setInterval((a,b)=>{
//     divTag.classList.add("text_green")
//     console.log("Sum:", a+b)
// },5000,4,5)

// let decision = prompt("Select y/n for stopping setTimeout")
// if (decision == "y"){
//     clearTimeout(timer)
// }
// clearInterval(timer)

// Browser Events
// let loveYou = (a, b)=>{
//     alert(`I love you ${a} ${b}`)
// }
// let loveYou = function (){
//     alert("I love you. Babulal")
// }
// function loveYou(){
//     alert("I love you. Gudiya")
// }

// let btn = document.getElementById("btn")
// btn.addEventListener('click', (e)=>{
//     console.log(e)
//     alert("Click event")
// })
// removeEventListener need same function object to remove

// Callbacks : Sync & Async (prob : Pyramid of Dom, callback hell)
// loadscript and based on that another action will be performed
// function loadscript(src, callback) {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = () => {
//     console.log("Script loaded.");
//     callback(null, src);
//   };
//   sc.onerror = () => {
//     callback(new Error("Script load fialed"));
//   };
//   document.body.appendChild(sc);
// }

// function goodMorning(err, src) {
//   if (err) {
//     console.log(err);
//     return
//   }
//   alert("Good morning, Pavan!" + " : " + src);
// }

// // Promises / async / await (Solved the callback problem)
// let p = new Promise((resolve, reject)=>{
//     console.log("Promise called.")
//     let a = prompt("Enter any number:")
//     if (a > 10) {
//         resolve(45)
//     }
//     reject("Promice rejected.")
// })
// console.log(p)

// p.then((value)=>{
//     console.log(value)
// },()=>{
//     console.log(value)
// })

// p.catch((value)=>{
//     console.log(value)
// })

// const loadscript = (src) => {
//   return new Promise((resolve, reject) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     document.body.appendChild(sc);
//     sc.onload = () => {
//       resolve("Script loaded");
//     };
//     sc.onerror = () => {
//       reject(new Error("Promice is rejected"));
//     };
//   });
// };

// let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js")

// p1.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })

// p1.then(()=>{
//     console.log("Another handeler.")
// })

// Promise APIs
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Promise1");
//     resolve(1);
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Promise2");
//     resolve(2);
//   }, 3000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log("Promise3");
//     resolve(3);
//   }, 6000);
// });

// p1.then((val) => {
//   console.log(val);
// });

// p2.then((val) => {
//   console.log(val);
// });

// p3.then((val) => {
//   console.log(val);
// });

// let promise_all = Promise.all([p1, p2, p3]);
// console.log(promise_all)

// promise_all.then((value)=>{
//     console.log(value)
// })

// async function pavan(){
//     let delW = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi 27 deg")
//         },1000)
//     })

//     let bangW = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Banglore 20 deg")
//         },7000)
//     })

//     let dW = await delW
//     let bW = await bangW
//     return [dW, bW]
// }

// pavan().then((val)=>{
//     console.log(val)
// },(err)=>{
//     console.log(err)
// })

// Try and Catch : Error handling
// console.log(pavan)
// try{
//     // Only handle sync code not async code
//     // let a = "Pavan"
//     // console.log(a)
//     // Custom error
//     let age = prompt("Enter your age.")
//     age = Number.parseInt(age)
//     if (age > 200){
//         // console.log("Age is not possible.")
//         throw new Error(`Given age ${age} is not possible.`)
//     }
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }
// finally{
//     console.log("Finally")
// }
// console.log("Continue operations.")

// Fetch API : Network Request : Getting and loading data from and to servers : Return a promise
// Get Request
// let p1 = fetch("https://goweather.herokuapp.com/weather/Ny");

// p1.then((response) => {
//     return response.json();
//   },
//   (err) => {
//     console.log(err);
//   }).then((data) => {
//   console.log(data);
// });

// POST Request
// let options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "applicaiton/json",
//   },
//   body: JSON.stringify({
//     title: "pavan",
//     body: "kumar",
//     userId: 1200,
//   }),
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Cookies
// let key = encodeURIComponent("hkda=9dk")
// let value = encodeURIComponent("udh$5")
// document.cookie = `${key}=${value}`
// console.log(document.cookie)

// Local Storage & Its method
// localStorage.setItem("job","IT")
// let a = localStorage.getItem("job")
// console.log(a)
// localStorage.removeItem("job")
// localStorage.clear()

// Session Storage
// sessionStorage.setItem("pavan","Hi")
// sessionStorage.setItem("ashi","Hello")
// console.log(sessionStorage.getItem("ashi"))
