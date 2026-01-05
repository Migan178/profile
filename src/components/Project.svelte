<script lang="ts">
	export let image: string;
	export let description: string;
	export let imageAlt: string;
</script>

<div class="text-center relative z-10">
	<div
		class="group w-[320px] h-[160px] md:w-[640px] md:h-[320px] overflow-hidden m-auto"
	>
		<a href="https://github.com/Muffin-laboratory/goMuffin" target="_blank">
			<img
				src={image}
				alt={imageAlt}
				class="w-[100%] h-[100%] object-cover rounded-3xl duration-350 group-hover:brightness-50"
			/>
			<span
				class="text-(--default-text-color) top-[50%] left-[50%] translate-[-50%] opacity-0 absolute duration-350 group-hover:opacity-100"
				>해당 프로젝트로 이동하기</span
			>
		</a>
	</div>
	<p class="text-base md:text-lg mt-2">
		{description}
	</p>
</div>
