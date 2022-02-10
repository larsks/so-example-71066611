var fetch = require('node-fetch');

async function geturl() {
let url = process.env.REACT_APP_URL;
let response = await fetch(`http://${url}:5000/`);
console.log("This is response", response);
}

geturl()
