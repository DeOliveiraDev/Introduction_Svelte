<script lang="ts">
  export let value: string = ''

  $: fontWeightStyle = value.length < 10 ? 'large' : value.length <= 17 ? `small` : 'tiny'
</script>

<div class={`display ${fontWeightStyle}`}>
  <span>{value}</span>
</div>

<style>
  .display {
    display: flex;
    background-color: #DDD;
    flex: 1;
    margin-bottom: 8px;
    padding: 0px 5px;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
  }

  .large {
    font-size: 4rem;
  }

  .small {
    font-size: 2rem;
  }

  .tiny {
    font-size: 1rem;
    overflow-wrap: anywhere;
  }
</style>
