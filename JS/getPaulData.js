
fetch('Data/data.json')
.then(res => res.json())
.then(data => {
    const tableBody = document.querySelector("#paultable tbody")
    data.Paul.forEach(element => {
        const row = document.createElement("tr")

        const redeemer = document.createElement("td")
        redeemer.textContent = element.Redeemer
        row.appendChild(redeemer)

        const amount = document.createElement("td")
        amount.textContent = element.Amount
        row.appendChild(amount)

        const max = document.createElement("td")
        max.textContent = element.Max
        row.appendChild(max)

        const total = document.createElement("td")
        total.textContent = element.Total
        row.appendChild(total)
        
        const avg = document.createElement("td")
        avg.textContent = parseFloat(element.Avg).toFixed(2)
        row.appendChild(avg)

        tableBody.appendChild(row)
    });
});