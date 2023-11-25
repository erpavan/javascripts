// console.log(Math.E)
// console.log(Math.PI)

let a = new Date();

// console.log(a.getDay())
switch(a.getDay()){
    case 1:
        console.log("Mon")
        break;
    case 2:
        console.log("Tus")
        break;
    case 3:
        console.log("Wed")
        break;
    case 4:
        console.log("Thu")
        break;
    case 5:
        console.log("Fri")
        break;
    case 6:
        console.log("Sat")
        break;
    case 0:
        console.log("Sun")
        break;
    default:
        console.log("No Day")
}