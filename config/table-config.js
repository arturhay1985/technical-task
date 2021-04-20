const tableConfig = (
    taxInclusivePrice = "0.00",
    taxExclusivePrice = "0.00",
    grossProfitPercent = "0.00",
    grossProfitAmount = "0.00",
) => ({
    "Tax Inclusive Price": taxInclusivePrice,
    "Tax Exclusive Price": taxExclusivePrice,
    "Gross Profit( %)": grossProfitPercent,
    "Gross Profit( $)": grossProfitAmount,
});
