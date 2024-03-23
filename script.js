document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate the total amount
    function calculateTotalAmount() {
        var initialInvestment = parseFloat(document.getElementById('initial-investment').value) || 0;
        var additionalContribution = parseFloat(document.getElementById('additional-contribution').value) || 0;
        var contributionFrequency = document.getElementById('contribution-frequency').value;
        var years = parseInt(document.getElementById('years').value) || 0;
        var expectedReturn = parseFloat(document.getElementById('expected-return').value) || 0;

        var totalContribution = 0;
        var totalAmount = initialInvestment;

        if (contributionFrequency === 'weekly') {
            totalContribution = additionalContribution * (52 * years);
        } else if (contributionFrequency === 'monthly') {
            totalContribution = additionalContribution * (12 * years);
        } else if (contributionFrequency === 'yearly') {
            totalContribution = additionalContribution * years;
        }

        for (var i = 0; i < years; i++) {
            totalAmount += totalAmount * (expectedReturn / 100);
            totalAmount += additionalContribution;
        }

        return { totalAmount: totalAmount.toFixed(2), totalContribution: totalContribution.toFixed(2) };
    }

    // Function to display the results
    function displayResults() {
        var result = calculateTotalAmount();
        document.getElementById('starting-amount').textContent = '$' + document.getElementById('initial-investment').value;
        document.getElementById('total-contribution').textContent = '$' + result.totalContribution;
        document.getElementById('total-amount').textContent = '$' + result.totalAmount;
    }

    // Event listener for the Calculate button
    document.getElementById('calculate-btn').addEventListener('click', function() {
        displayResults();
    });
});
