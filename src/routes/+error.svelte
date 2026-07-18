<script>
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
</script>

<main>
	<div class="mt-50 text-center text-3xl">
		<h1>{page.status} {page.error?.message}</h1>
		<a href={resolve("/")}>홈으로 가기</a>
	</div>
</main>
