const DONT_CLEAR_SCRREN = false;
const CLEAR_SCREEN = true;

export default class CalculatorModel {
  #value: string;
  #accumulator: number;
  #clearScreen: boolean;
  #operation: string;

  constructor(
    value: string = null,
    accumulator: number = null,
    operation: string = null,
    clearScreen = false
  ) {
    this.#value = value;
    this.#accumulator = accumulator;
    this.#operation = operation;
    this.#clearScreen = clearScreen;
  }

  get value() {
    return this.#value?.replace(".", ",") || "0";
  }

  typedNumber(newValue: string) {
    return new CalculatorModel(
      this.#clearScreen || !this.#value ? newValue : this.#value + newValue,
      this.#accumulator,
      this.#operation,
      DONT_CLEAR_SCRREN
    );
  }

  typedDot() {
    return new CalculatorModel(
      this.#value?.includes(".") ? this.#value : this.#value + ".",
      this.#accumulator,
      this.#operation,
      DONT_CLEAR_SCRREN
    );
  }

  resetValues() {
    return new CalculatorModel();
  }

  typedOperation(nextOperation: string) {
    return this.calculate(nextOperation);
  }

  calculate(nextOperation: string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#value} ${this.#operation} ${this.#accumulator}`);

    const value = !this.#operation ? this.#value : `${accumulator}`;

    return new CalculatorModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ? CLEAR_SCREEN : DONT_CLEAR_SCRREN
    );
  }
}
