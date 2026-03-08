<script>
	import ModalNotification from "../../components/layouts/ModalNotification.svelte";

	let msg = $state("");

	function returnYesOrNo() {
		const isLover = Math.floor(Math.random() * 2 ** 53);
		console.log(isLover);

		if (isLover === 1)
			msg =
				"당신은 이제부터 이 웹사이트의 연인이에요! 행복한 시간 보내세요 :)";
		else
			msg =
				"아쉽게도 해당 웹사이트의 여친이 되지 못 했어요 :( 다음을 노려봐요.";
	}
</script>

<main>
	<div class="text-center">
		<h1>이 웹사이트의 애인이 되어보세요!</h1>
		<h2>확률은 2의 53승분의 1입니다.</h2>
		<button
			class="h-8 w-40 rounded-xl border-2 border-solid border-blue-950 bg-(--bg-color) text-(--text-color) shadow-2xl shadow-blue-950 duration-250 hover:cursor-pointer hover:bg-blue-950 hover:text-white"
			onclick={returnYesOrNo}
		>
			내가 너의 남친이니?
		</button>
	</div>
</main>

{#if msg}
	<ModalNotification {msg} closeModal={() => (msg = "")} />
{/if}
