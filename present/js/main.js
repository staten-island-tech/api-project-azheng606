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
const URL = "https://api.disneyapi.dev/character";


async function getData() {
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const all = await response.json ();
        document.querySelector(".gallery").textContent = all.data;
        console.log (all)
        const lolz = all.data.filter((data)=> data.films)
        lolz.forEach(el=> {DOMSelectors.box.insertAdjacentHTML("beforeend",  `
        <div class="card">
        <div class ="name"> ${el.name}</div>
        <img src= ${el.imageUrl} class="card-img">
        </div>`)}) 
      } catch (error) {
console.log(error, "UH OH");
document.querySelector(".gallery").textContent = "No thing founddddd"   
};
} getData(URL)






const height = Number (prompt("enter your height in centimeters"));
/* 


<label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q" />

<button>Search</button>
 */