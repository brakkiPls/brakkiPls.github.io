fetch('Data/data.json')
.then(res => res.json())
.then(data => {
    const tableBody = document.querySelector("#quotetable tbody")
    data.Quotes.forEach(element => {
        const row = document.createElement("tr")

        const quoteID = document.createElement("td")
        quoteID.textContent = element.QuoteID
        row.appendChild(quoteID)

        const quote = document.createElement("td")
        quote.textContent = element.Quote
        row.appendChild(quote)

        tableBody.appendChild(row)
    });
});