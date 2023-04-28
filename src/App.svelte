<script lang="ts">
  import Calculator from "./components/Calculator.svelte";

</script>

<main>
  <Calculator />
</main>

<style>
  :global(body) {
    background-color: #cccccc;
  }

  :root {
    --background-color: #ffffff;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
