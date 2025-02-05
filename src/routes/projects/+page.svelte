<script>
  import doremiPhoto from '$lib/images/doremi.png'
  import discommandPhoto from '$lib/images/discommand.png'

  const PROJECT_MOVE = '해당 프로젝트로 이동하기'
</script>

<main>
  <div class="mt-11 text-center relative z-10">
    <div
      class="group w-[320px] h-[160px] md:w-[640px] md:h-[320px] overflow-hidden m-auto"
    >
      <a href="https://github.com/Migan-Studio/Doremi" target="_blank">
        <img
          src={doremiPhoto}
          alt="Doremi"
          class="w-[100%] h-[100%] object-cover rounded-3xl duration-350 group-hover:brightness-50"
        />
        <span
          class="text-(--text-color) top-[49%] left-[46%] opacity-0 absolute duration-350 group-hover:opacity-100"
          >{PROJECT_MOVE}</span
        >
      </a>
    </div>
    <p class="text-base md:text-lg">
      Doremi는 Migan이 만들고, 운영하는 디코봇이에요.
    </p>
  </div>
  <div class="mt-11 text-center relative">
    <div
      class="group w-[320px] h-[160px] md:w-[640px] md:h-[320px] overflow-hidden m-auto"
    >
      <a href="https://github.com/discommand/discommand" target="_blank">
        <img
          src={discommandPhoto}
          alt="discommand"
          class="w-[100%] h-[100%] object-cover rounded-3xl duration-350 group-hover:brightness-50"
        />
        <span
          class="text-(--text-color) top-[49%] left-[46%] opacity-0 absolute duration-350 group-hover:opacity-100"
          >{PROJECT_MOVE}</span
        >
      </a>
    </div>
    <p class="text-base md:text-lg">
      discommand는 Migan이 만드는 discord.js에 쓸 수 있는 라이브러리에요.
    </p>
  </div>
</main>
