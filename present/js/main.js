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
        DOMSelectors.awman.textContent = "Oopsies nothing fouund ;)";   
        }
        } 
        getData(kop) 
    })

function clearfields () {
    DOMSelectors.box.innerHTML= "";
    DOMSelectors.awman.innerHTML="";
    } 

    function proud (arr) {
        arr.data.forEach((all)=>{DOMSelectors.box.insertAdjacentHTML("beforeend",  `
        <div class="container">
        <div class="card">
        <div class="front">
        <div class ="name"> ${all.name}</div>
        <img src= ${all.imageUrl} class="card-img">
        </div>
        <div class="back">
        <div class ="shortfilms">  ${"Short Films: "+ all.shortFilms} </div>
       <div class="films">  ${"Films: " +all.films} </div>
       <div class="tvshows"> ${"TV Shows: " + all.tvShows}</div>
       <div class="videogames">  ${"Video Games: " + all.videoGames}</div>
       </div>
        </div></div>`)} )
    }



