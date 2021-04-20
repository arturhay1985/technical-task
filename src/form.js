class Form {
  constructor(inputForm, inputTable) {
    this.inputForm = inputForm;
    this.inputTable = inputTable;
  }

  construct(root) {
    const app = `
        <div>
          ${this.#getFormAuthorWithDate()}
          <form name="tax" onsubmit="calculateResult(event)">
            ${this.inputForm
              .map((formElement) => this.#getFormInputs(formElement))
              .join("")}
              <table class="table table-striped">
                ${this.getCalculatedTable(this.inputTable)}
              </table>
            <button type="submit">Calculate</button>
          </form>
        </div>
      `;
    root.innerHTML = app;
  }

  #getFormInputs(input) {
    const {
      label,
      type,
      name,
      min,
      max,
      step,
      value,
      placeholder,
      options,
      error,
    } = input;

    switch (type) {
      case "number":
        return `
                <div class="formGroup">
                    <label for=${name}>${label}
                    <input
                        id=${name}
                        name=${name}
                        type="number"
                        min=${min}
                        max=${max}
                        step=${step}
                        value=${value}
                        oninput="handleMaxInput(this, ${max})"
                        placeholder=${placeholder}
                        dir="rtl"
                    />
                    <div class="error">${error}</div>
                  </label>
                </div>
                `;
      case "select":
        return `
                <div class="formGroup">
                    <label for=${name}>${label}
                    <select id=${name} name=${name} oninput="handleMaxInput(this)">
                        ${options
                          .map(
                            ({ optionValue, displayValue }) =>
                              `<option value=${optionValue} ${
                                optionValue === value && "selected"
                              }>${displayValue}</option>`
                          )
                          .join("")}
                    </select>
                  </label>
                </div>
                `;
      default:
        return null;
    }
  }

  #getFormAuthorWithDate() {
    const [year, month, date] = new Date(2021, 3, 12)
      .toISOString()
      .slice(0, 10)
      .split("-");

    return `
        <h2>Arthur Hayrapetyan</h3>
        <h5>${date}-${month}-${year}</h5>
      `;
  }

  getCalculatedTable(inputTable) {
    return `
        <tbody>
          ${Object.entries(inputTable)
            .map(
              ([label, value]) =>
                `
                <tr>
                  <td>${label}</td>
                  <td>${value}</td>
                </tr>
              `
            )
            .join("")} 
        </tbody>
        `;
  }
}
