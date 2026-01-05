<script lang="ts">
	import myProfileBg from "$lib/images/myprofile-bg.png";
	import { onMount } from "svelte";

	let clicked = false;

	let iLoveHebi: number;
	const birth = new Date("2010-01-31T00:00Z").getTime();
	iLoveHebi = Date.now() - birth;

	onMount(() => {
		const interval = setInterval(() => {
			iLoveHebi = Date.now() - birth;
		});

		return () => clearInterval(interval);
	});

	onMount(() => {
		const interval = setInterval(changeName, 6000);

		return () => clearInterval(interval);
	});

	async function sleep(ms: number) {
		return new Promise<void>(resolve => {
			setTimeout(resolve, ms);
		});
	}

	function copyDiscord() {
		const icon = document.getElementById("discord-button")!;
		navigator.clipboard.writeText("migan.");
		icon.classList.remove("bi-discord");
		icon.classList.add("bi-clipboard-check");

		setTimeout(() => {
			icon.classList.remove("bi-clipboard-check");
			icon.classList.add("bi-discord");
		}, 2500);
	}

	async function changeName() {
		const nameElement = document.getElementById(
			"name",
		) as HTMLHeadingElement;
		const nickname = "Migan";
		const name = "전시우";

		if (clicked) {
			for (let i = name.length; i > 0; i--) {
				nameElement.innerText = nameElement.innerText.slice(0, i);
				await sleep(250);
			}

			for (let i = 0; i <= nickname.length - 1; i++) {
				nameElement.innerText += nickname[i];
				await sleep(250);
			}
		} else {
			for (let i = nickname.length; i > 0; i--) {
				nameElement.innerText = nameElement.innerText.slice(0, i);
				await sleep(250);
			}

			for (let i = 0; i <= name.length - 1; i++) {
				nameElement.innerText += name[i];
				await sleep(250);
			}
		}

		clicked = !clicked;
	}
</script>

<div class="text-center">
	<a href="/your-lover" class="hover:cursor-default">
		<img
			src={myProfileBg}
			alt="Migan's profile/미간의 프로필"
			class="rounded-[50%] m-auto shadow-xl shadow-black/30"
			width="150"
		/>
	</a>
	<h1 class="text-5xl mt-1" id="name">&#x200bMigan</h1>
	<h2 class="mt-3 tabular-nums">
		태어난지 {new Intl.NumberFormat().format(iLoveHebi)}ms
	</h2>
	<ul class="list-none flex items-center justify-center">
		<li class="px-7 pt-1 text-2xl">
			<a href="https://github.com/Migan178" target="_blank" class="mr-1">
				<i class="bi bi-github"></i>
			</a>
			<a href="mailto:me@migan.co.kr" class="mr-1">
				<i class="bi bi-envelope-at-fill"></i>
			</a>
			<button on:click={copyDiscord} class="hover:cursor-pointer mr-1">
				<i
					class="bi bi-discord text-(--text-color) hover:text-(--hover-color) duration-250"
					id="discord-button"
				></i>
			</button>
			<a href="https://x.com/Migan178" target="_blank" class="mr-1">
				<i class="bi bi-twitter-x"></i>
			</a>
			<a href="https://www.instagram.com/migan.3meter" target="_blank">
				<i class="bi bi-instagram"></i>
			</a>
		</li>
	</ul>
</div>
