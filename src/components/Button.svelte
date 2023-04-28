<script lang="ts">
  export let text: string = "";
  export let triple: boolean = false;
  export let double: boolean = false;
  export let operation: boolean = false;
  export let highlight: boolean = false;
  export let onClick: (valor: string) => void = () => {};
</script>

<button
  class="button"
  class:triple
  class:double
  class:operation
  class:highlight
  on:click={() => onClick(text)}
>
  {text}
</button>

<style>
  .button {
    flex-basis: 25%;
    font-size: 20px;
    margin: 0;
    border: 1px solid var(--background-color);
    padding: 10px;
    background-color: #ccc;
  }

  .button:active {
    background-color: #ccccccaf;
  }

  .triple {
    flex-basis: 75%;
  }

  .double {
    flex-basis: 50%;
  }

  .operation {
    background-color: rgb(15, 87, 124);
    color: white;
  }

  .operation:active {
    background-color: rgb(15, 87, 124, 0.904);
  }

  .highlight {
    background-color: rgb(12, 41, 64);
    color: white;
  }

  .highlight:active {
    background-color: rgba(12, 41, 64, 0.904);
  }
</style>
