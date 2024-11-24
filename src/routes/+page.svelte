<script lang="ts">
  import doremiPhoto from '$lib/images/doremi.png'
  import discommandPhoto from '$lib/images/discommand.png'
  import { onMount } from 'svelte'

  const projectMove = '해당 프로젝트로 이동하기'
  let initialY: number

  onMount(() => {
    const wrap = document.getElementsByClassName('wrap')[0] as HTMLElement
    const container = document.getElementsByClassName('container')
    let page = 0
    const lastPage = container.length - 1

    window.addEventListener(
      'wheel',
      e => {
        e.preventDefault()
        if (e.deltaY > 0) {
          page++
        } else if (e.deltaY < 0) {
          page--
        }
        if (page < 0) {
          page = 0
        } else if (page > lastPage) {
          page = lastPage
        }
        wrap.style.top = page * -100 + 'vh'
      },
      { passive: false },
    )

    window.addEventListener('touchstart', e => {
      initialY = e.touches[0].clientY
    })

    window.addEventListener(
      'touchmove',
      e => {
        e.preventDefault()
        const currentY = e.touches[0].clientY
        const diffY = initialY - currentY

        if (diffY > 100) {
          page++
        } else if (diffY < 100) {
          page--
        }
        if (page < 0) {
          page = 0
        } else if (page > lastPage) {
          page = lastPage
        }
        wrap.style.top = page * -100 + 'vh'
      },
      { passive: false },
    )
  })
</script>

<main class="wrap">
  <div class="container">
    <h1 class="main_text">안녕하세요, 저는 Migan이에요!</h1>
  </div>
  <div class="projects container">
    <div class="doremi">
      <div class="doremi_wrap">
        <a href="https://github.com/Migan-Studio/Doremi" target="_blank">
          <img src={doremiPhoto} alt="Doremi" />
          <span class="project_move">{projectMove}</span>
        </a>
      </div>
      <p>Doremi는 Migan이 만들고, 운영하는 디코봇이에요.</p>
    </div>
    <div class="discommand">
      <div class="discommand_wrap">
        <a href="https://github.com/discommand/discommand" target="_blank">
          <img src={discommandPhoto} alt="discommand" />
          <span class="project_move">{projectMove}</span>
        </a>
      </div>
      <p>discommand는 Migan이 만드는 discord.js에 쓸 수 있는 라이브러리에요.</p>
    </div>
  </div>

  <div class="about container">
    <div class="languages">
      <h1>Languages</h1>
      <ul class="languages_items">
        <li>
          <a href="https://www.typescriptlang.org/">
            <img
              src="https://img.shields.io/badge/-TypeScript-%233178C6?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
              width="126.5"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <img
              src="https://img.shields.io/badge/-Javascript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript"
              width="126.5"
              height="28"
            />
          </a>
        </li>
      </ul>
    </div>

    <div class="devOps">
      <h1>DevOps</h1>
      <ul class="devOps_items">
        <li>
          <a href="https://code.visualstudio.com/">
            <img
              src="https://img.shields.io/badge/-Visual_Studio_Code-%23007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"
              alt="Visual Studio Code"
              width="190.5"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://archlinux.org">
            <img
              src="https://img.shields.io/badge/-ArchLinux-%231793D1?style=for-the-badge&logo=archlinux&logoColor=white"
              alt="ArchLinux"
              width="122.5"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://git-scm.com/">
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=white"
              alt="Git"
              width="67.5"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://docker.com">
            <img
              src="https://img.shields.io/badge/-Docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
              width="97.5"
              height="28"
            />
          </a>
        </li>
        <li>
          <a href="https://mariadb.org/">
            <img
              src="https://img.shields.io/badge/-MariaDB-%23003545?style=for-the-badge&logo=mariadb&logoColor=white"
              alt="MariaDB"
              width="106.5"
              height="28"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</main>

<!-- <ul class="main_move">
    <li>
      <a href={'/about'}>소개</a>
    </li>
    <li>
      <a href={'/projects'}>프로젝트</a>
    </li>
  </ul> -->

<style>
  .wrap {
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
    transition: 0.5s;
  }

  .container {
    width: 100%;
    height: 100%;
  }

  .projects {
    padding-top: 5vh;
  }

  .main_text {
    text-align: center;
    padding-top: 45vh;
  }

  /* .main_move {
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
  } */

  .doremi {
    /* margin-top: 2%; */
    text-align: center;
    /* position: relative; */
  }

  .discommand {
    /* margin-top: 2%; */
    text-align: center;
    /* position: relative; */
  }

  .doremi_wrap {
    width: 640px;
    height: 320px;
    overflow: hidden;
    margin: 0 auto;
  }

  .discommand_wrap {
    width: 640px;
    height: 320px;
    overflow: hidden;
    margin: 0 auto;
  }

  .doremi_wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: 0.5s;
  }

  .discommand_wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    transition: 0.5s;
  }

  .doremi_wrap:hover img {
    filter: brightness(0.5);
    transition: 0.5s;
  }

  .discommand_wrap:hover img {
    filter: brightness(0.5);
    transition: 0.5s;
  }

  .project_move {
    opacity: 0;
    color: var(--text-color);
    position: absolute;
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }

  .doremi_wrap:hover .project_move {
    transition: 0.5s;
    opacity: 1;
  }

  .discommand_wrap:hover .project_move {
    transition: 0.5s;
    opacity: 1;
  }

  .languages h1 {
    font-size: 50px;
  }

  .languages_items {
    list-style: none;
    margin-left: 6%;
  }

  .about {
    display: flex;
    justify-content: center;
  }

  .devOps {
    margin-left: 25%;
    text-align: center;
  }

  .devOps h1 {
    font-size: 50px;
  }

  .devOps_items {
    list-style: none;
    padding-inline-start: 0;
  }

  @media (max-width: 748px) {
    .doremi {
      padding-top: 10%;
    }

    .discommand {
      padding-top: 10%;
    }

    .discommand_wrap {
      width: 320px;
      height: 160px;
    }

    .doremi_wrap {
      width: 320px;
      height: 160px;
    }

    .doremi p {
      font-size: 16px;
    }

    .discommand p {
      font-size: 16px;
    }

    .project_move {
      top: 40%;
    }

    .about {
      display: block;
      justify-content: normal;
    }

    .languages {
      margin-left: 20%;
    }

    .devOps {
      margin-left: 0;
    }
  }
</style>
