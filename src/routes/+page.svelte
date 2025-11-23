<script lang="ts">
	import myProfileBg from "$lib/images/myprofile-bg.png";

	let clicked = false;

	let iLoveHebi: number;
	const birth = new Date("2010-01-31T04:28:00+09:00").getTime();
	iLoveHebi = Date.now() - birth;
	setInterval(() => {
		iLoveHebi = Date.now() - birth;
	});

	function copyDiscord() {
		const icon = document.getElementById("discord-button")!;
		navigator.clipboard.writeText("migan.");
		icon.classList.remove("bi-discord");
		icon.classList.add("bi-check2");

		setTimeout(() => {
			icon.classList.remove("bi-check2");
			icon.classList.add("bi-discord");
		}, 2500);
	}

	function changeName() {
		const name = document.getElementById("name") as HTMLHeadingElement;
		if (clicked) {
			name.innerText = "Migan";
		} else {
			name.innerText = "Siwoo Jeon";
		}

		clicked = !clicked;
	}
</script>

<main>
	<div>
		<div class="text-center">
			<a href="/yourLover" class="hover:cursor-default">
				<img
					src={myProfileBg}
					alt="Migan's profile/미간의 프로필"
					class="rounded-[50%] m-auto shadow-xl shadow-black/30"
					width="150"
				/>
			</a>
			<button on:click={changeName}>
				<h1 class="text-5xl mt-1" id="name">Migan</h1>
			</button>
			<h2 class="mt-3">
				태어난지 {new Intl.NumberFormat().format(iLoveHebi)}ms
			</h2>
		</div>
		<ul class="list-none flex items-center justify-center">
			<li class="px-7 pt-1 text-2xl">
				<a
					href="https://github.com/Migan178"
					target="_blank"
					class="mr-1"
				>
					<i class="bi bi-github"></i>
				</a>
				<a href="mailto:me@migan.co.kr" class="mr-1">
					<i class="bi bi-envelope-at-fill"></i>
				</a>
				<button
					on:click={copyDiscord}
					class="hover:cursor-pointer mr-1"
				>
					<i
						class="bi bi-discord text-(--text-color) hover:text-(--hover-color) duration-250"
						id="discord-button"
					></i>
				</button>
				<a href="https://x.com/Migan178" target="_blank" class="mr-1">
					<i class="bi bi-twitter-x"></i>
				</a>
				<a
					href="https://www.instagram.com/migan.3meter"
					target="_blank"
				>
					<i class="bi bi-instagram"></i>
				</a>
			</li>
		</ul>
	</div>
</main>
