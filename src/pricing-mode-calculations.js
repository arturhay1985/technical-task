const getTaxRateValue = (taxRate, value) => {
    return !Number(taxRate)
      ? Number(value)
      : Number(value) * ((100 + Number(taxRate)) / 100);
  };

  const calculateGrossProfitPercent = (taxExclusivePrice, cost) => {
    return ((taxExclusivePrice - cost) / taxExclusivePrice) * 100;
  };
