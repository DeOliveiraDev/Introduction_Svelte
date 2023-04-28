<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";
  import Button from "./Button.svelte";
  import Display from "./Display.svelte";
  import Line from "./Line.svelte";

  let calc = new CalculatorModel();
  let typedNumber = (number: string) => (calc = calc.typedNumber(number));
  let typedDot = () => (calc = calc.typedDot());
  let typedOperation = (operation: string) =>
    (calc = calc.typedOperation(operation));
  let calculate = () => (calc = calc.calculate());
  let clearScreen = () => (calc = calc.resetValues());
</script>

<div class="calculator">
  <Display value={calc.value} />
  <Line>
    <Button highlight triple text="C" onClick={clearScreen} />
    <Button operation text="/" onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="7" onClick={typedNumber} />
    <Button text="8" onClick={typedNumber} />
    <Button text="9" onClick={typedNumber} />
    <Button operation text="*" onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="4" onClick={typedNumber} />
    <Button text="5" onClick={typedNumber} />
    <Button text="6" onClick={typedNumber} />
    <Button operation text="+" onClick={typedOperation} />
  </Line>
  <Line>
    <Button text="1" onClick={typedNumber} />
    <Button text="2" onClick={typedNumber} />
    <Button text="3" onClick={typedNumber} />
    <Button operation text="-" onClick={typedOperation} />
  </Line>
  <Line>
    <Button double text="0" onClick={typedNumber} />
    <Button text="," onClick={typedDot} />
    <Button highlight text="=" onClick={calculate} />
  </Line>
</div>

<style>
  .calculator {
    background-color: var(--background-color);
    height: 440px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
</style>
