const url = 'https://random-quote-generator2.p.rapidapi.com/randomQuote';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': window.env.Access_Key,
        'x-rapidapi-host': 'random-quote-generator2.p.rapidapi.com'
    }
};

async function fetchQuote() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const json = JSON.parse(result);
        quoteText[0].innerHTML = json[0].Quote;
        quoteAuthor[0].innerHTML = "- "+json[0].Author;
    } catch (error) {
        console.error(error);
    }
}
fetchQuote();
// Fetch a random quote from the API and display it on the page

const quoteContainer = document.getElementsByClassName('quote-box'),
    quoteText = document.getElementsByClassName('quote-text'),
    quoteAuthor = document.getElementsByClassName('quote-author'),
    quoteButton = document.getElementById('generate-quote'),
    copyButton = document.getElementById('copy-quote');


quoteButton.addEventListener('click', async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const json = JSON.parse(result);
        quoteText[0].innerHTML = json[0].Quote;
        quoteAuthor[0].innerHTML = "- "+json[0].Author;

    } catch (error) {
        console.error(error);
    }
});

copyButton.addEventListener('click', () => {
    const quote = quoteText[0].innerHTML;
    const author = quoteAuthor[0].innerHTML;
    const fullQuote = `${quote} ${author}`;
    navigator.clipboard.writeText(fullQuote).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});


