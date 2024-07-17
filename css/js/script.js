document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
    fetchStocks();
});

async function fetchNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY');
        const data = await response.json();
        const articles = data.articles.slice(0, 4);

        document.getElementById('featured-image').src = articles[0].urlToImage;
        document.getElementById('featured-title').innerText = articles[0].title;
        document.getElementById('featured-text').innerText = articles[0].description;

        articles.slice(1).forEach((article, index) => {
            const articleElement = document.getElementById(`article-${index + 1}`);
            articleElement.querySelector('img').src = article.urlToImage;
            articleElement.querySelector('.title').innerText = article.title;
            articleElement.querySelector('.text').innerText = article.description;
        });

        document.getElementById('top-stories').innerHTML = `
            <h3>Top stories</h3>
            ${articles.map(article => `<p>${article.title}</p>`).join('')}
            <a href="#">See more</a>
        `;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

async function fetchStocks() {
    try {
        const response = await fetch('https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=EVOK,ENT,CPG,YY,RBG&apikey=YOUR_ALPHA_VANTAGE_API_KEY');
        const data = await response.json();
        const stocks = data['Stock Quotes'];

        const stockList = stocks.map(stock => {
            const change = parseFloat(stock['2. price']) - parseFloat(stock['1. open']);
            const percentageChange = (change / parseFloat(stock['1. open']) * 100).toFixed(2);
            const changeClass = change >= 0 ? 'positive' : 'negative';
            return `<p>${stock['1. symbol']}: <span class="${changeClass}">${percentageChange}%</span></p>`;
        }).join('');

        document.getElementById('watchlist-movers').innerHTML = `
            <h3>Watchlist movers</h3>
            ${stockList}
        `;
    } catch (error) {
        console.error('Error fetching stocks:', error);
    }
}
// HubSpot Scripts
document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
    fetchStocks();
});

async function fetchNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY');
        const data = await response.json();
        const articles = data.articles.slice(0, 4);

        document.getElementById('featured-image').src = articles[0].urlToImage;
        document.getElementById('featured-title').innerText = articles[0].title;
        document.getElementById('featured-text').innerText = articles[0].description;

        articles.slice(1).forEach((article, index) => {
            const articleElement = document.getElementById(`article-${index + 1}`);
            articleElement.querySelector('img').src = article.urlToImage;
            articleElement.querySelector('.title').innerText = article.title;
            articleElement.querySelector('.text').innerText = article.description;
        });

        document.getElementById('top-stories').innerHTML = `
            <h3>Top stories</h3>
            ${articles.map(article => `<p>${article.title}</p>`).join('')}
            <a href="#">See more</a>
        `;
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

async function fetchStocks() {
    try {
        const response = await fetch('https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=EVOK,ENT,CPG,YY,RBG&apikey=YOUR_ALPHA_VANTAGE_API_KEY');
        const data = await response.json();
        const stocks = data['Stock Quotes'];

        const stockList = stocks.map(stock => {
            const change = parseFloat(stock['2. price']) - parseFloat(stock['1. open']);
            const percentageChange = (change / parseFloat(stock['1. open']) * 100).toFixed(2);
            const changeClass = change >= 0 ? 'positive' : 'negative';
            return `<p>${stock['1. symbol']}: <span class="${changeClass}">${percentageChange}%</span></p>`;
        }).join('');

        document.getElementById('watchlist-movers').innerHTML = `
            <h3>Watchlist movers</h3>
            ${stockList}
        `;
    } catch (error) {
        console.error('Error fetching stocks:', error);
    }
}
