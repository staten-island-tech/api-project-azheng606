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


async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const all = await response.json ();
        document.querySelector(".gallery").textContent = all.data;
        console.log (all)
all.films.forEach((data)=> {DOMSelectors.gallery.insertAdjacentHTML("beforeend",  `
<div class="card">
<div class ="name"> ${data.name}</div>
<img src= ${data.imageURL} class="card-img">
</div>`)});
} catch (error) {
console.log(error, "UH OH");
document.querySelector(".gallery").textContent = "No thing founddddd"   
};
} getData(URL)