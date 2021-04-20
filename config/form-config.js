let formconfig = [
  {
    label: "Default Markup",
    type: "number",
    name: "markup",
    min: 10,
    max: 200,
    step: "any",
    value: 52,
    placeholder: "%",
    required: true,
    error: "Value should be between 10 and 200",
  },

  {
    label: "Cost",
    type: "number",
    name: "cost",
    min: 0,
    max: Infinity,
    step: "any",
    value: 78.2801,
    placeholder: "$",
    required: true,
    error: "Cost field is required",
  },

  {
    label: "Tax Rate",
    type: "select",
    name: "taxRate",
    value: 7,
    options: [
      { optionValue: 0, displayValue: "0%" },
      { optionValue: 7, displayValue: "7%" },
      { optionValue: 20, displayValue: "20%" },
    ],
  },

  {
    label: "Rounding Rule",
    type: "select",
    name: "roundingRule",
    value: "95",
    options: [
      { optionValue: "00", displayValue: "00" },
      { optionValue: "95", displayValue: "95" },
      { optionValue: "99", displayValue: "99" },
    ],
  },

  {
    label: "Pricing Mode",
    type: "select",
    name: "pricingMode",
    value: "Exclusive",
    options: [
      { optionValue: "Inclusive", displayValue: "Tax Inclusive Prices" },
      { optionValue: "Exclusive", displayValue: "Tax Exclusive Prices" },
    ],
  },
];
