<script lang="ts">
  import hamburgerBar from '$lib/images/hamburger.png'
  import githubLogo from '$lib/images/github_logo.png'
  import myProfile from '$lib/images/myprofile.png'
  import '../app.css'

  let clicked = false

  function onClick() {
    const hamburgerOpen = document.getElementById(
      'hamburger_open',
    ) as HTMLDivElement

    const nav = document.getElementById('nav') as HTMLDivElement

    if (clicked) {
      hamburgerOpen.classList.remove('opacity-100')
      hamburgerOpen.classList.add('opacity-0')
      nav.classList.remove('rounded-b-none')
    } else {
      hamburgerOpen.classList.remove('opacity-0')
      hamburgerOpen.classList.add('opacity-100')
      nav.classList.add('rounded-b-none')
    }

    clicked = !clicked
  }
</script>

<head>
  <title>Migan</title>
</head>

<div
  class="bg-(--bg-color) shadow-xl shadow-black/30 m-4 rounded-3xl duration-500"
  id="nav"
>
  <nav class="flex items-center px-8 py-3 justify-between">
    <a href="/yourGirlfriend" class="md:block hidden">
      <img src={myProfile} alt="My profile" width="50" />
    </a>
    <a href="/" class="block md:hidden">
      <img src={myProfile} alt="My profile" width="50" />
    </a>
    <ul class="md:flex list-none hidden">
      <li class="px-8">
        <a href="/">홈</a>
      </li>
      <li class="px-8">
        <a href="/projects">프로젝트</a>
      </li>
    </ul>
    <ul class="md:flex list-none hidden pr-8">
      <li>
        <a href="https://github.com/Migan178" target="_blank">
          <img
            class="github_logo"
            src={githubLogo}
            alt="GitHub logo"
            width="28"
          />
        </a>
      </li>
    </ul>
    <ul class="md:hidden block pr-3">
      <button
        class="bg-(--bg-color) border-none"
        type="button"
        on:click={onClick}
      >
        <img src={hamburgerBar} alt="Hamburger bar" width="40" />
      </button>
    </ul>
  </nav>
  <div
    id="hamburger_open"
    class="pt-5 pb-5 bg-(--bg-color) rounded-b-3xl opacity-0 fixed duration-500 max-w-[100%] left-4 right-4 shadow-xl shadow-black/30 z-20"
  >
    <ul>
      <li class="ml-10 list-none mb-7 text-3xl">
        <a href="/" on:click={onClick}>홈</a>
      </li>
      <li class="ml-10 list-none mb-7 text-3xl">
        <a href="/projects" on:click={onClick}>프로젝트</a>
      </li>
    </ul>
    <ul>
      <li class="ml-10">
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
