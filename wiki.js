let searchInputEl =document.getElementById("searchInput");
let resultDisplayEle=document.getElementById("searchResults");
let spinnerEle=document.getElementById("spinner");



function createAndAppendResult(result){
    let {link,title,description}=result;

    let resultEl = document.createElement("div");
    resultEl.classList.add("result-item");

    resultDisplayEle.appendChild(resultEl);
   

    let titleEl = document.createElement("a");
    titleEl.href=link;
    titleEl.textContent=title;
    titleEl.target="_blank";
    titleEl.classList.add("result-title");
    resultEl.appendChild(titleEl);

    let titleBrkEle=document.createElement("br");
    resultEl.appendChild(titleBrkEle);

    let urlEle = document.createElement("a");
    urlEle.href=link;
    urlEle.target="_blank";
    urlEle.classList.add("result-url");
    urlEle.textContent=link;
    resultEl.appendChild(urlEle);


    let linkBrkEle=document.createElement("br");
    resultEl.appendChild(linkBrkEle);


    let descriptionEle=document.createElement("p");
    descriptionEle.classList.add("link-description");
    descriptionEle.textContent=description;
    resultEl.appendChild(descriptionEle);



}

function displayResults(searchResults){
    spinnerEle.classList.toggle("d-none")
    for(let result of searchResults)
    // let result= searchResults [0];
    createAndAppendResult(result);
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        resultDisplayEle.textContent="";
        spinnerEle.classList.toggle("d-none")
  
      let searchInput = searchInputEl.value;
      let url="https://apis.ccbp.in/wiki-search?search=" + searchInput;

      let option={
        method:"Get"
      };
      fetch(url,option)
      .then (function(response){
        return response.json();
      })
      .then (function(jsonData){
        let {search_results} = jsonData;
        displayResults(search_results);

      })

    
    }
  }
searchInputEl.addEventListener("keydown",searchWikipedia);