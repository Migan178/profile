<script>
  import githubLogo from '$lib/images/github_logo.png'
  import myProfile from '$lib/images/myprofile.png'
</script>

<head>
  <title>Migan</title>
</head>

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
</nav>

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
</style>
