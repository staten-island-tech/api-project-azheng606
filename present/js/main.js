import '../style/style.css'
import { DOMSelectors } from './dom';
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
/* const URL = "https://api.disneyapi.dev/character"; */


/* async function getData() {
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const all = await response.json ();
        all.forEach(el=> {DOMSelectors.start.insertAdjacentHTML("beforeend",  `
        <div class="card">
        <div class ="name"> ${el.name}</div>
        <img src= ${el.imageUrl} class="card-img">
        </div>`)})     
      } 
catch (error) {
console.log(error, "UH OH");
document.querySelector(".gallery").textContent = "No thing founddddd";   
}
} getData(URL)  
 */

function clearfields () {
    DOMSelectors.gallery.innerHTML= "";}

DOMSelectors.form.addEventListener("submit" ,function (event) {
event.preventdefault ();
clearfields();
    let hello = DOMSelectors.first.value 
    let bye = DOMSelectors.last.value 
    const pop = `https://api.disneyapi.dev/character?name=${hello}%20${bye}`;
    const boop = `https://api.disneyapi.dev/character?name=${hello}`;
if (bye = "") {
    async function getData () {
        try {
            const response = await fetch (boop);
            if (response.status != 200){
                throw new Error(response.statusText);
            }
            const all = await response.json ();
            document.querySelector (".gallery").textContent = all.data
            console.log (all)
            all.forEach(el=> {DOMSelectors.start.insertAdjacentHTML("beforeend",  `
            <div class="card">
            <div class ="name"> ${el.name}</div>
            <img src= ${el.imageUrl} class="card-img">
            </div>`)})     
          } 
    catch (error) {
    console.log(error, "UH OH");
    document.querySelector(".gallery").textContent = "No thing founddddd";   
    }
    }
 }
 else {
    async function getData () {
        try {
            const response = await fetch (pop);
            if (response.status != 200){
                throw new Error(response.statusText);
            }
            const all = await response.json ();
            document.querySelector (".gallery").textContent = all.data
            console.log (all)
            all.forEach(el=> {DOMSelectors.start.insertAdjacentHTML("beforeend",  `
            <div class="card">
            <div class ="name"> ${el.name}</div>
            <img src= ${el.imageUrl} class="card-img">
            </div>`)})     
          } 
    catch (error) {
    console.log(error, "UH OH");
    document.querySelector(".gallery").textContent = "No thing founddddd";   
    }
    } 
 }
 getData(boop) 
 getData(pop) 

