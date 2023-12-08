import '../style/style.css'
/* function greet (name) {
const greetPromise =  new Promise(function (resolve, reject){
    resolve(`Hello ${name}`);
    //if you resvole it/find the data looking for, then it will return hello "the data"
});
return greetPromise
}
const mandy = greet ("Mandy");
//handle the promise 
mandy.then((result)=> {
    //putting data into HTML
console.log (result);
});
//get the data and then handle the data */


const URL = "https://api.disneyapi.dev/character";
console.log (URL.name)

/* 

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const data = await response.json ();
        document.getElementById("api-response").textContent = data.name; 
    } catch (error) {
        console.log(error, "ooooo");
        document.getElementById("api-response").textContent= "noone"
    }
}
getData (URL); */