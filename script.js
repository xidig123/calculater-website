document.getElementById("calculate-btn").addEventListener("click", function() {
    var initialInvestment = parseFloat(document.getElementById("initial-investment").value);
    var additionalContribution = parseFloat(document.getElementById("additional-contribution").value);
    var years = parseInt(document.getElementById("years").value);
    var expectedReturn = parseFloat(document.getElementById("expected-return").value);

    var results = calculateInvestment(initialInvestment, additionalContribution, years, expectedReturn);
    displayResults(results);
});

function calculateInvestment(initialInvestment, additionalContribution, years, expectedReturn) {
    var totalContribution = initialInvestment + (additionalContribution * years);
    var totalInterest = initialInvestment * (expectedReturn / 100) * years;
    var totalAmount = initialInvestment + totalInterest + (additionalContribution * years);

    return {
        startingAmount: initialInvestment.toFixed(2),
        totalContribution: totalContribution.toFixed(2),
        totalAmount: totalAmount.toFixed(2)
    };
}

function displayResults(results) {
    document.getElementById("starting-amount").textContent = "$" + results.startingAmount;
    document.getElementById("total-contribution").textContent = "$" + results.totalContribution;
    document.getElementById("total-amount").textContent = "$" + results.totalAmount;
}


