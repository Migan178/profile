<script>
  function returnYesOrNo() {
    const a = Math.floor(Math.random() * 2 ** 53)
    console.log(a)

    if (a === 1) return alert('응')
    else return alert('아니')
  }
</script>

<main>
  <div class="main">
    <h1>이 웹사이트의 남친이 되어보세요! 확률은 2의 53승분의 1입니다.</h1>
    <button class="button" on:click={returnYesOrNo}>
      내가 너의 남친이니?
    </button>
  </div>
</main>

<style>
  .main {
    margin-top: 15%;
    text-align: center;
  }

  .button {
    border-radius: 10px;
    background-color: #303030;
    color: white;
    border: 2.5px solid #242424;
    width: 150px;
    height: 30px;
    font-size: 16px;
  }
</style>
