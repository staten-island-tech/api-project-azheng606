import '../style/style.css'
import { DOMSelectors } from './dom';
console.log (DOMSelectors)
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

async function getData(URL){
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const all = await response.json();
        document.querySelector(".gallery").textContent = all.films;
        console.log (all.films);
        all.films.forEach((films)=> {DOMSelectors.gallery.insertAdjacentHTML("beforeend",  `
        <div class="card">
        <div class ="name"> ${films.name}</div>
        <img src= ${films.imageURL} class="card-img">
        </div>`)});
    } catch (error) {
        console.log(error, "UH OH");
        document.querySelector(".gallery").textContent = "No thing founddddd"   
        };/* 
        data.results.forEach ((name)=> (console.log(name)); */
} getData(URL)

//when user clicks sometihing, new data appears