const form = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const responseContainer = document.getElementById("response-container");
let searchedForText;

form.addEventListener("submit", function(e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    getNews();
});

function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open("GET", "https://developer.nytimes.com/article_search_v2.json?q=${searchedForText}&api-key=");
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();

}