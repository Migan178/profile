<script>
	import noPicturePhoto from "$lib/images/nopicture.png";

	const PROJECT_MOVE = "해당 프로젝트로 이동하기";
</script>

<main>
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
					class="text-(--default-text-color) top-[50%] left-[50%] translate-[-50%] opacity-0 absolute duration-350 group-hover:opacity-100"
					>{PROJECT_MOVE}</span
				>
			</a>
		</div>
		<p class="text-base md:text-lg mt-2">
			머핀봇은 Migan이 만드는 내수용 봇이에요.
		</p>
	</div>
	<div class="mt-11 text-center relative z-10 pb-25">
		<div
			class="group w-[320px] h-[160px] md:w-[640px] md:h-[320px] overflow-hidden m-auto"
		>
			<a href="https://github.com/bkgpolar12/MCriderBOT" target="_blank">
				<img
					src={noPicturePhoto}
					alt="사진 없음/None"
					class="w-[100%] h-[100%] object-cover rounded-3xl duration-350 group-hover:brightness-50"
				/>
				<span
					class="text-(--default-text-color) top-[50%] left-[50%] translate-[-50%] opacity-0 absolute duration-350 group-hover:opacity-100"
					>{PROJECT_MOVE}</span
				>
			</a>
		</div>
		<p class="text-base md:text-lg mt-2">
			MCRiderBOT은 Migan이 참여하는 디스코드 봇으로, 마크라이더 공식
			디스코드에서 기록 관리를 위한 봇이에요.
		</p>
	</div>
</main>
