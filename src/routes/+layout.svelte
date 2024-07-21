<script lang="ts">
  import hamburgerBar from '$lib/images/hamburger.png'
  import githubLogo from '$lib/images/github_logo.png'
  import myProfile from '$lib/images/myprofile.png'

  let clicked = false

  function onClick() {
    if (clicked) {
      document.getElementById('hamburger_open')!.style.display = 'none'
    } else {
      document.getElementById('hamburger_open')!.style.display = 'block'
    }

    clicked = !clicked
  }
</script>

<head>
  <title>Migan</title>
</head>

<div style="background-color: #242424;">
  <nav class="navbar">
    <a href="/yourGirlfriend">
      <img class="navbar_photo" src={myProfile} alt="My profile" width="50" />
    </a>
    <ul class="navbar_item">
      <li>
        <a href="/">홈</a>
      </li>
      <li>
        <a href="/about">정보</a>
      </li>
      <li>
        <a href="/projects">프로젝트</a>
      </li>
    </ul>
    <ul class="navbar_icon">
      <li>
        <a href="https://github.com/Migan178" target="_blank">
          <img
            class="github_logo"
            src={githubLogo}
            alt="GitHub logo"
            width="20"
          />
        </a>
      </li>
    </ul>
    <ul class="navbar_hamburger">
      <button type="button" on:click={onClick}>
        <img src={hamburgerBar} alt="Hamburger bar" width="40" />
      </button>
    </ul>
  </nav>
  <div id="hamburger_open">
    <ul>
      <li>
        <a href="/" on:click={onClick}>홈</a>
      </li>
      <li>
        <a href="/about" on:click={onClick}>정보</a>
      </li>
      <li>
        <a href="/projects" on:click={onClick}>프로젝트</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://github.com/Migan178" target="_blank">
          <img
            class="github_logo"
            src={githubLogo}
            alt="GitHub logo"
            width="35"
          />
        </a>
      </li>
    </ul>
  </div>
</div>

<slot />

<style>
  .navbar {
    background-color: #242424;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    justify-content: space-between;
  }

  .navbar_photo {
    padding-left: 0;
  }

  .navbar_icon {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 0;
    padding-right: 1%;
  }

  .navbar_item {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 0;
  }

  .navbar_item li {
    padding: 8px 30px;
  }

  .navbar_hamburger {
    display: none;
  }

  .navbar_hamburger button {
    background: #242424;
    border: none;
  }

  #hamburger_open {
    display: none;
    margin-top: 0;
    background-color: #242424;
  }

  #hamburger_open li {
    list-style-type: none;
    margin-bottom: 25px;
    font-size: 30px;
  }

  @media (max-width: 748px) {
    .navbar_hamburger {
      display: block;
    }

    .navbar_item {
      display: none;
    }

    .navbar_icon {
      display: none;
    }
  }
</style>
