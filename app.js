const jokeDiv = document.getElementById("joke");
const nextBtn = document.getElementById("nextJoke");
let chuckJoke = "";




const addJoke = (joke)=>{
    jokeDiv.innerHTML = "";
    const p = document.createElement("p");
    const text = `"`+joke+`"`;
    p.innerText = text;

    jokeDiv.appendChild(p);
}


// addJoke(chuckJoke);
fetch("https://api.chucknorris.io/jokes/random")
.then((response) => response.json())
.then( (data) => {
   chuckJoke = data.value;
   console.log("first log: " + chuckJoke);
   addJoke(chuckJoke);
   nextBtn.addEventListener("click",addJoke);
})
.catch((err) => {
  console.log(err);
});

setInterval(() => {
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then( (data) => {
     chuckJoke = data.value;
     console.log("first log: " + chuckJoke);
     addJoke(chuckJoke);
     nextBtn.addEventListener("click",addJoke);
  })
  .catch((err) => {
    console.log(err);
  });
}, 3000);



console.log("second Log: " + chuckJoke);



