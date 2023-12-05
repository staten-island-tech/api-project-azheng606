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


const URL = `https://api.disneyapi.dev/character`;
/* const URLP = `pokemon/${search}` */

async function getData(URL){
   //try is what happens if you get the data
    try {
        //requesting a response called REST API's 
        //await is the promise telling them to wait first while finding the source before saying no
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        //convert response to json
        const data = await response.json();
      /*   console.log (data.content) */
      // above  in consol, randomley geneerates a quote
        //catch is what happens if you dont
        document.querySelector("h1").textContent = data.content;
    } catch (error) {
        console.log(error, "UH OH");
        document.querySelector("h1").textContent = "No thing founddddd"
        
    }
} getData(URL)