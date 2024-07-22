<script>
  import doremiPhoto from '$lib/images/doremi.png'
  import discommandPhoto from '$lib/images/discommand.png'

  const projectMove = '해당 프로젝트로 이동하기'
</script>

<main>
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
</main>

<style>
  .doremi {
    margin-top: 2%;
    text-align: center;
    position: relative;
  }

  .discommand {
    margin-top: 2%;
    text-align: center;
    position: relative;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
  }

  .doremi_wrap:hover .project_move {
    transition: 0.5s;
    opacity: 1;
  }

  @media (max-width: 748px) {
    .doremi {
      margin-top: 10%;
    }

    .discommand {
      margin-top: 10%;
    }

    .discommand_wrap {
      width: 320px;
      height: 160px;
    }

    .doremi_wrap {
      width: 320px;
      height: 160px;
      font-size: 12px;
    }

    .doremi p {
      font-size: 16px;
    }

    .discommand p {
      font-size: 16px;
    }
  }
</style>
