<script lang="ts">
	let {
		image,
		description,
		imageAlt,
		href,
	}: {
		image: string;
		description: string;
		imageAlt: string;
		href: string;
	} = $props();
</script>

<div class="relative z-10 text-center">
	<div class="group m-auto h-40 w-[320px] overflow-hidden md:h-80 md:w-160">
		<a {href} target="_blank">
			<img
				src={image}
				alt={imageAlt}
				class="h-full w-full rounded-3xl object-cover duration-350 group-hover:brightness-50"
			/>
			<span
				class="absolute top-1/2 left-1/2 -translate-1/2 text-(--default-text-color) opacity-0 duration-350 group-hover:opacity-100"
				>해당 프로젝트로 이동하기</span
			>
		</a>
	</div>
	<p class="mt-2 text-base md:text-lg">
		{description}
	</p>
</div>
