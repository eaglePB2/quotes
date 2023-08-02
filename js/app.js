// Function to read the CSV file and get the quotes
async function getQuotes() {
    try {
        const response = await fetch('csv/quotes.csv');
        const data = await response.text();
        const quotes = data.split('\n').filter(quote => quote.trim() !== '');
        return quotes;
    } catch (error) {
        console.error('Error reading CSV file:', error);
        return [];
    }
}

// Function to generate a random quote
function generateRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display the random quote on button click
$('#btn').on('click', async () => {
    const quotes = await getQuotes();
    if (quotes.length > 0) {
        const randomQuote = generateRandomQuote(quotes);
        $('#quote').text(randomQuote);
    } else {
        $('#quote').text('當你看到這句話的時候，他大概率是壞掉了……');
    }
});