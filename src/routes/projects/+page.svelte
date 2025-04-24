<script>
	// import doremiPhoto from '$lib/images/doremi.png'
	// import discommandPhoto from '$lib/images/discommand.png'
	import preparingPhoto from "$lib/images/preparing.png";
	import noPicturePhoto from "$lib/images/nopicture.png";

	const PROJECT_MOVE = "해당 프로젝트로 이동하기";
</script>

<main>
	<div class="mt-11 text-center relative z-10">
		<div
			class="group w-[320px] h-[160px] md:w-[640px] md:h-[320px] overflow-hidden m-auto"
		>
			<a href="https://github.com/carbonium-community" target="_blank">
				<!-- 사진 변경 예정 -->
				<img
					src={preparingPhoto}
					alt="Carbonium (Preparing)/카보늄 (준비 중)"
					class="w-[100%] h-[100%] object-cover rounded-3xl duration-350 group-hover:brightness-50"
				/>
				<span
					class="text-(--text-color) top-[50%] left-[50%] translate-[-50%] opacity-0 absolute duration-350 group-hover:opacity-100"
					>해당 조직으로 이동하기</span
				>
			</a>
		</div>
		<p class="text-base md:text-lg">
			Carbonium은 Migan이 참여하는 오픈소스 마인크래프트 실행기에요. (공개
			예정)
		</p>
	</div>
	<div class="mt-11 text-center relative z-10">
		<div
			class="group w-[320px] h-[160px] md:w-[640px] md:h-[320px] overflow-hidden m-auto"
		>
			<a
				href="https://github.com/Muffin-laboratory/goMuffin"
				target="_blank"
			>
				<img
					src={noPicturePhoto}
					alt="사진 없음/None"
					class="w-[100%] h-[100%] object-cover rounded-3xl duration-350 group-hover:brightness-50"
				/>
				<span
					class="text-(--text-color) top-[50%] left-[50%] translate-[-50%] opacity-0 absolute duration-350 group-hover:opacity-100"
					>{PROJECT_MOVE}</span
				>
			</a>
		</div>
		<p class="text-base md:text-lg">
			머핀봇은 Migan이 만드는 내수용 봇이에요.
		</p>
	</div>
	<!-- <div class="mt-11 text-center relative">
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
  </div> -->
</main>
