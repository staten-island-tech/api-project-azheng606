import '../style/style.css'
import { DOMSelectors } from './dom';

/* 
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
} getData(URL)   */
 
   DOMSelectors.iphone.addEventListener("click" ,function (event) { 
    event.preventDefault(); 
        clearfields(); 
       const hello = DOMSelectors.first.value
        const kop = "https://api.disneyapi.dev/character?name=" + hello
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
        document.querySelector("h2").textContent = "No thing founddddd";   
        }
        } 
        getData(kop) 

    })

function clearfields () {
    DOMSelectors.box.innerHTML= "";
    } 

    function proud (arr) {
        arr.data.forEach((all)=>{DOMSelectors.box.insertAdjacentHTML("beforeend",  `
        <div class="card">
        <div class ="name"> ${all.name}</div>
        <img src= ${all.imageUrl} class="card-img">
        </div>`)} )
    }


    DOMSelectors.box.addEventListener("mouseover", function everything () { 
        card.forEach ((all)=> DOMSelectors.box.insertAdjacentHTML("beforeend", `
        <div class="drac">
        <div class ="shortfilms"> ${all.shortFilms}</div>
       <h3 class="films"> ${all.films}</h3>
       <h3 class="tvshows"> ${all.tvShows}</h3>
       <h3 class="videogames"> ${all.videoGames}</h3>
        </div>`));
    })

