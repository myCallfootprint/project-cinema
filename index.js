
// function createNode(el){
//   return document.createElement(el);
// }
// function append(parent, el){
//   return parent.appendChild(el);
// }

const myTarget = document.querySelector("#form");
const myString = document.querySelector("#myInput");
const showCase = document.querySelector(".timeLine");
const theItems = document.querySelector(".clickTT");


function url(){
  const stringMovie = myString.value.trim();
  return `http://www.omdbapi.com/?s=${stringMovie}&apikey=7a98d1bb`
}

function submitHandler(e){
  e.preventDefault();
  // console.log(movieInput);
  fetch(url())
    .then(function(response){
      return response.json()
    })
    .then(function(myJSON){
        const myData = myJSON.Search
        myItemData = myData.map(function(item){
          console.log(item);
        
         return ` 
         <li>
            <h2>${item.Title}</h2>
            <p>${item.Year}</p>
            <a class="clickTT" href="https://www.imdb.com/title/${item.imdbID}">
            <img src=${item.Poster}>
            </a>
            <div class="detail" style="min-height: 300px;"></div>
           
        </li>`; 
      }).join(" ")
        
        

        showCase.innerHTML = myItemData;
        showCase.style.textAlign = "center"
        showCase.style["list-style-type"] = "none"
 })
    .catch(function(error){
      console.log("errror message" + error)
  })
};


myTarget.addEventListener("submit", submitHandler);

const myDetail = document.querySelector(".detail");

function clickHandler(e){
e.preventDefault;

fetch(url())
.then(function(response){
  return response.json;
})
.then(function(data){
const theData = data.Search;
const theDetail = theData.map(function(item){
  return `
  <li>
  https://www.imdb.com/${item.Title}/${item.imdbID}
  </li>`;
})
myDetail.innerHTML = theDetail;
})


}

theItems.addEventListener("click", clickHandler);
