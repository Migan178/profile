<script lang="ts">
	export let image: string;
	export let description: string;
	export let imageAlt: string;
	export let href: string;
</script>

<div class="relative z-10 text-center">
	<div
		class="group m-auto h-[160px] w-[320px] overflow-hidden md:h-[320px] md:w-[640px]"
	>
		<a {href} target="_blank">
			<img
				src={image}
				alt={imageAlt}
				class="h-[100%] w-[100%] rounded-3xl object-cover duration-350 group-hover:brightness-50"
			/>
			<span
				class="absolute top-[50%] left-[50%] translate-[-50%] text-(--default-text-color) opacity-0 duration-350 group-hover:opacity-100"
				>해당 프로젝트로 이동하기</span
			>
		</a>
	</div>
	<p class="mt-2 text-base md:text-lg">
		{description}
	</p>
</div>
