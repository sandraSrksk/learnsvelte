<script>
  let counter = 0;
  let message = 'Hello svelte';
  let items = ['piim', 'sai', 'viin', 'siider']

function add(){
  items.push(message);
  items = items;
  message = "";
}

</script>

<button class="button is primary" on:click={() => counter++}>Value is {counter}</button>
<div class="content">
  <input type="text" class="input" bind:value={message}>
  <button class="button is primary" on click={}>Add</button>
  <h1>{message}</h1>
  <ul>
    {#each items as item}
    <li>{items}</li>
    {/each}
  </ul>
</div>