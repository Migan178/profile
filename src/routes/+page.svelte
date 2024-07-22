<main>
  <h1 class="main_text">안녕하세요, 저는 Migan이에요!</h1>
  <ul class="main_move">
    <li>
      <a href={'/about'}>소개</a>
    </li>
    <li>
      <a href={'/projects'}>프로젝트</a>
    </li>
  </ul>
</main>

<style>
  .main_text {
    text-align: center;
    margin-top: 15%;
  }

  .main_move {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 0;
    align-items: center;
    justify-content: center;
  }

  .main_move li {
    padding: 8px 30px;
    font-size: 20px;
  }

  @media (max-width: 748px) {
    .main_text {
      margin-top: 75%;
    }
  }
</style>
