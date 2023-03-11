// a= new Date();
// a.getHours()

// console.log(a)

// let date= a.toLocaleDateString();
// let time= a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

let a;
let date;
let time;

setInterval(()=>{
    a= new Date();
    date= a.toLocaleDateString(undefined, options);
    time= a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + "  on " + date;
}, 1000);