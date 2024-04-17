document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    // Function to fetch a random quote
    function fetchRandomQuote() {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                quoteText.textContent = data.content;
                quoteAuthor.textContent = "- " + data.author;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
            });
    }

    // Fetch a random quote when the page loads
    fetchRandomQuote();

    // Add event listener to the New Quote button
    newQuoteBtn.addEventListener("click", fetchRandomQuote);
});