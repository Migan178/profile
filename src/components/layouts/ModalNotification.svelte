<script lang="ts">
	let { msg, closeModal }: { msg: string; closeModal: () => void } = $props();
</script>

<div
	class="fixed top-0 left-0 z-100 flex h-full w-full items-center justify-center bg-black/50"
>
	<div class="rounded-4xl bg-(--bg-color) p-8 shadow-xl">
		<button
			onclick={closeModal}
			class="text-(--text-color) duration-250 hover:cursor-pointer hover:text-(--hover-color)"
			aria-label="닫기 버튼"
		>
			<i class="bi bi-x-lg"></i>
		</button>
		<p>{msg}</p>
	</div>
</div>
