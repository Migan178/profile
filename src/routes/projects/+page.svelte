<script>
	import noPicturePhoto from "$lib/images/nopicture.png";
	import miganart from "$lib/images/miganart-gh.png";
	import Project from "../../components/Project.svelte";
</script>

<main>
	<div class="mt-11">
		<Project
			image={noPicturePhoto}
			imageAlt="사진 없음/None"
			description="머핀봇은 Migan이 만드는 내수용 봇이에요."
			href="https://github.com/Muffin-laboratory/goMuffin.git"
		/>
	</div>
	<div class="mt-11 pb-25">
		<Project
			image={miganart}
			imageAlt="미간라트"
			description="Migan이 만든 간단한 만다라트 작성 앱이에요."
			href="https://mandalart.migan.co.kr"
		/>
	</div>
</main>
