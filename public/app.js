var app = function(){
  changeTagline();
  hideQuoteOfTheDay();
  articleBackground();
  addElement(QUOTES_ARRAY);
};

var changeTagline = function(){
  const tagline = document.getElementById('tagline');
  tagline.innerHTML = "Yo quotes app!";
};

var hideQuoteOfTheDay = function(){
  const quoteOfTheDay = document.getElementById('quote-of-the-day');
  quoteOfTheDay.style.visibility = "hidden";
}

var articleBackground = function(){
  const articles = document.getElementsByTagName("article");
  for (article of articles){
    article.setAttribute("style", "background: DodgerBlue");
  }
}

var QUOTES_ARRAY = [
  { quote: "Now is the summer of our discontent", author: "Shakespeare" },
  { quote: "Go away!", author: "Matt Healy" },
  { quote: "Classic Steve...", author: "Cohort 9" }
];

function addElement(array){

  for (quote of array){

    var theQuote = quote.quote;
    var theAuthor = quote.author;

    var article = document.createElement("article");
    article.className += "quote";
    article.setAttribute("style", "background: DodgerBlue;");

    var blockquote = document.createElement("blockquote");
    var quotePlaceholder = document.createTextNode(theQuote);

    var cite = document.createElement("cite");
    var authorPlaceholder = document.createTextNode(theAuthor);

    blockquote.appendChild(quotePlaceholder);
    cite.appendChild(authorPlaceholder);

  blockquote.appendChild(cite);

    article.appendChild(blockquote);


    var element = document.getElementById("quotes");

    element.appendChild(article);


  }
}

document.addEventListener("DOMContentLoaded", app);
