// Json
obj= {name: "Divyang", length: 1, a:{this:'tha"t'}}
jso= JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed= JSON.parse(`{"name":"DIVYANG CHOUDHARY","length":1,"a":{"This":"tha\\"t"}}`)
console.log(parsed)

// Template literals - Backticks
a= 34;
console.log(`This is the value of a = ${a}`)