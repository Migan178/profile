<script>
	import noPicturePhoto from "$lib/images/nopicture.png";
	import Project from "../../components/Project.svelte";
</script>

<main>
	<div class="mt-11">
		<Project
			image={noPicturePhoto}
			imageAlt="사진 없음/None"
			description="머핀봇은 Migan이 만드는 내수용 봇이에요."
		/>
	</div>
	<div class="mt-11 pb-25">
		<Project
			image={noPicturePhoto}
			imageAlt="사진 없음/None"
			description="MCRiderBOT은 Migan이 참여하는 디스코드 봇으로, 마크라이더 공식 디스코드에서 기록 관리를 위한 봇이에요."
		/>
	</div>
</main>
