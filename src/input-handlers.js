const calcRoundingRule = (
  markap = 52,
  cost,
  taxRate,
  roundingRule = "00",
  pricingMode
) => {
  /**
   * The second part of value getter `cost * (1 + markap / 100)` is a result or
   * point of view of my own count combinations. If markup is greater than or equal 100
   * calculation fields represent negative values. So this formula is used to fix the problem.
  */
  const value = markap < 100 ? cost / (1 - markap / 100) : cost * (1 + markap / 100);
  const floorRoundingValue = Math.floor(value);
  const differenceAfterPoint = value - floorRoundingValue;
  const resultAfterRounding = mappedRoundingRules[roundingRule](differenceAfterPoint, roundingRule, value);
  const taxInclusivePrice = getTaxRateValue(taxRate, value, pricingMode).toFixed(2);
  const grossProfitPercent = calculateGrossProfitPercent(taxInclusivePrice, cost).toFixed(2);
  const grossProfitAmount = (Number(taxInclusivePrice - cost)).toFixed(2);

  return tableConfig(taxInclusivePrice, resultAfterRounding, grossProfitPercent, grossProfitAmount);
};

function handleMaxInput(input, max) {
  const correctedValue = Number(input.value) > max ? max : input.value;
  input.value = correctedValue;
  formconfig = formconfig.map((configItem) => ({
    ...configItem,
    value: configItem.name === input.name ? correctedValue : configItem.value,
  }));
}

function calculateResult(event) {
  event.preventDefault();
  let hasError = false;

  formconfig.forEach((config) => {
    if (!config.required) {
      return;
    }

    if (!Number(config.value)) {
      hasError = true;
      document.getElementById(config.name).nextElementSibling.classList.add("isVisible");
      return;
    }

    document.getElementById(config.name).nextElementSibling.classList.remove("isVisible");
  });

  if (hasError) {
    return;
  }

  const inputValues = formconfig.reduce((acc, item) => {
    acc[item.name] = item.value;
    return acc;
  }, {});
  
  const { markup, cost, taxRate, roundingRule, pricingMode } = inputValues;
  const calcTable = calcRoundingRule(markup, cost, taxRate, roundingRule, pricingMode);
  const tableResult = appForm.getCalculatedTable(calcTable);

  document.getElementsByTagName("table")[0].innerHTML = tableResult;
}
