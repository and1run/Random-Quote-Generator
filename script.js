const btnEl = document.getElementById('btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const apiURL = "https://api.quotable.io/quotes/random";


async function getQuote() {
    try {

        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.textContent = "Updating..."
        authorEl.textContent = "Updating..."
        const response = await fetch(apiURL);
        const data = await response.json();
        quoteContent = data[0].content;
        quoteAuthor = data[0].author;
        quoteEl.textContent = quoteContent;
        authorEl.textContent = '~ '+ quoteAuthor + ' ~';
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        
    } catch (error) {

        quoteEl.textContent = 'An error happened try again later';
        authorEl.textContent = 'An error happened';
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;
        
    }
}

getQuote();

btnEl.addEventListener('click',getQuote);
