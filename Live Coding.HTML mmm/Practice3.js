// JSON - JavaScript Object Notation

async function getData() {

    const url = 

    const request = new Request(url);

    const response = await fatch(request);

    const content = await response.json();

    console.log(content);

    console.log(content.members);
}

getData();

//parse()

//stringify()

let ebuka = '{"age": 1,"status": false,"money": "1000","action": "run", "children" :["John","Jane","Doe"]}

let ebukaObj = JSON.parse(ebuka);

console.log(ebukaObj.children);

let nkem = {
    age: 1,
    gender: "female",
}

console.log(JSON.stringify(nkem));

// Asynchronous JS

// callback - a function that is passed 

button.add