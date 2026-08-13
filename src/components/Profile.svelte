<script lang="ts">
	import { resolve } from "$app/paths";
	import myProfileBg from "$lib/images/myprofile-bg.png";
	import { onMount } from "svelte";

	const discordId = "main.miganbox.com";

	let isRealName = $state(false);
	let showingDiscordId = $state(false);

	const birth = new Date("2010-01-31T00:00Z").getTime();
	let iLoveHebi = $state(Date.now() - birth);

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
		navigator.clipboard.writeText(discordId);
		icon.classList.remove("bi-clipboard");
		icon.classList.add("bi-clipboard-check");

		setTimeout(() => {
			icon.classList.remove("bi-clipboard-check");
			icon.classList.add("bi-clipboard");
		}, 2500);
	}

	async function changeName() {
		const nameElement = document.getElementById(
			"name",
		) as HTMLHeadingElement;
		const nickname = "Migan";
		const realName = "전시우";

		if (isRealName) {
			for (let i = realName.length; i > 0; i--) {
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

			for (let i = 0; i <= realName.length - 1; i++) {
				nameElement.innerText += realName[i];
				await sleep(250);
			}
		}

		isRealName = !isRealName;
	}
</script>

<div class="text-center">
	<a href={resolve("/your-lover")} class="hover:cursor-default">
		<img
			src={myProfileBg}
			alt="Migan's profile/미간의 프로필"
			class="m-auto rounded-full shadow-xl shadow-black/30"
			width="150"
		/>
	</a>
	<h1 class="mt-1 text-5xl" id="name">&#x200bMigan</h1>
	<h2 class="mt-3 tabular-nums">
		태어난지 {new Intl.NumberFormat().format(iLoveHebi)}ms
	</h2>
	<ul class="flex list-none items-center justify-center gap-x-2 text-2xl">
		<li>
			<a
				href="https://github.com/Migan178"
				target="_blank"
				aria-label="To Github"
			>
				<i class="bi bi-github"></i>
			</a>
		</li>
		<li>
			<a href="mailto:me@miganbox.com" aria-label="To send email">
				<i class="bi bi-envelope-at-fill"></i>
			</a>
		</li>
		<li class="relative">
			<button
				onclick={() => (showingDiscordId = !showingDiscordId)}
				aria-label="To show Discord ID"
			>
				<i class="bi bi-discord"></i>
			</button>
			<div
				class={`absolute top-7 left-0 flex gap-x-1 rounded-4xl bg-(--bg-color) p-4 shadow-xl duration-250 ${showingDiscordId ? "opacity-100" : "pointer-events-none opacity-0"}`}
			>
				<p>{discordId}</p>
				<button onclick={copyDiscord} aria-label="To copy Discord ID">
					<i class="bi bi-clipboard" id="discord-button"></i>
				</button>
			</div>
		</li>
		<li>
			<a
				href="https://x.com/Migan178"
				target="_blank"
				aria-label="To X(Twitter)"
			>
				<i class="bi bi-twitter-x"></i>
			</a>
		</li>
		<li>
			<a
				href="https://www.instagram.com/migan.3meter"
				target="_blank"
				aria-label="To Instagram"
			>
				<i class="bi bi-instagram"></i>
			</a>
		</li>
	</ul>
</div>
