import '../style/style.css'
import { DOMSelectors } from './dom';


const URL = "https://api.disneyapi.dev/character";  
/* async function getData(URL) {
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
} getData(URL)  */ 
async function getData() {
    try {
        const response = await fetch(URL);
        if (response.status != 200){
            throw new Error(response.statusText);
        }
        const all = await response.json ();
        console.log (all);
        const lolz = all.data.filter((data)=>data.id =337)
        lolz.forEach((el)=> { DOMSelectors.box.insertAdjacentHTML("beforeend", `
        <div class="container">
        <div class="card">
        <div class="front">
        <div class ="name"> ${el.name}</div>
        <img src= ${el.imageUrl} class="card-img" alt=${el.name}>
        <div class ="web"> ${el.sourceUrl}</div>
        </div>
        <div class="back">
        <div class ="shortfilms">  ${"Short Films: "+ el.shortFilms} </div>
       <div class="films">  ${"Films: " +el.films} </div>
       <div class="tvshows"> ${"TV Shows: " + el.tvShows}</div>
       <div class="videogames">  ${"Video Games: " + el.videoGames}</div>
       </div>
        </div></div>`)})
        
        
      } 
catch (error) {
console.log(error, "UH OH");
DOMSelectors.awman.textContent = "Oopsies nothing fouund ;)";   
};
} 
getData(URL)

 

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
        <div class ="name"> ${all.name} </div>
        <img src= ${all.imageUrl} class="card-img">
        <div class ="web"> ${all.sourceUrl} </div>

        </div>
        <div class="back">
        <div class ="shortfilms">  ${"Short Films: "+ all.shortFilms} </div>
       <div class="films">  ${"Films: " +all.films} </div>
       <div class="tvshows"> ${"TV Shows: " + all.tvShows}</div>
       <div class="videogames">  ${"Video Games: " + all.videoGames}</div>
       </div>
        </div></div>`)} )
    }   

