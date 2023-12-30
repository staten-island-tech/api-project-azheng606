import '../style/style.css'
import { DOMSelectors } from './dom';


const URL = "https://api.disneyapi.dev/character?name=cinderella"; 
async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const all = await response.json ();
        proud(all) 
      } 
catch (error) {
console.log(error, "UH OH");
document.querySelector(".gallery").textContent = "No thing founddddd";   
}
} getData(URL)  
 



/* DOMSelectors.form.addEventListener("submit" ,function (event) {
event.preventdefault ();
console.log (DOMSelectors.first.value) */
    /* const hello = DOMSelectors.first.value  */
    /* const boop = "https://api.disneyapi.dev/character" *//* 
    const kop = "https://api.disneyapi.dev/character?name=" + DOMSelectors.first.value}) */


//rahahaha



   /*  DOMSelectors.form.addEventListener("submit" ,function (event) { 
        event.preventDefault(); 
        clearfields();
        const hello = DOMSelectors.first.value 
        const kop = ("https://api.disneyapi.dev/character?name=" + hello)
        console.log (kop)
    
        async function getData(kop) {
            try {
                const response = await fetch(kop);
                if (response.status != 200){
                    throw new Error(response.statusText);
                }
                const all = await response.json ();
                proud(all) 
                
              } 
        catch (error) {
        console.log(error, "UH OH");
        document.querySelector(".gallery").textContent = "No thing founddddd";   
        }
        } getData(kop) 

}) */



function clearfields () {
    DOMSelectors.gallery.innerHTML= "";
    } 



    function proud (arr) {
        arr.data.forEach((all)=>{DOMSelectors.box.insertAdjacentHTML("beforeend",  `
        <div class="card">
        <div class ="name"> ${all.name}</div>
        <img src= ${all.imageUrl} class="card-img">
        </div>`)} )
    }



    /* async function getData () {
        try {
            const response = await fetch (boop);
            if (response.status != 200){
            throw new Error (response.statusText);
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
    }
 })
 getData(boop) 
 */



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