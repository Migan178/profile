<script>
	function returnYesOrNo() {
		const a = Math.floor(Math.random() * 2 ** 53);
		console.log(a);

		if (a === 1) return alert("응");
		else return alert("아니");
	}
</script>

<main>
	<div class="mt-50 text-center">
		<h1>이 웹사이트의 남친이 되어보세요!</h1>
		<h2>확률은 2의 53승분의 1입니다.</h2>
		<button
			class="rounded-xl bg-(--bg-color) border-2 border-solid border-blue-950 w-40 h-8 text-white shadow-2xl shadow-blue-950 hover:cursor-pointer hover:bg-blue-950 duration-250"
			on:click={returnYesOrNo}
		>
			내가 너의 남친이니?
		</button>
	</div>
</main>
