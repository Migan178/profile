<script lang="ts">
	import myProfileBg from "$lib/images/myprofile-bg.png";
	import { onMount } from "svelte";

	let clicked = false;

	let iLoveHebi: number;
	const birth = new Date("2010-01-31T04:28:00+09:00").getTime();
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
		icon.classList.add("bi-check2");

		setTimeout(() => {
			icon.classList.remove("bi-check2");
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

<main>
	<div class="md:flex max-md:mt-10">
		<div class="text-center">
			<a href="/yourLover" class="hover:cursor-default">
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
					<a
						href="https://x.com/Migan178"
						target="_blank"
						class="mr-1"
					>
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
		<div class="mt-3 mx-5 text-xs md:text-lg pb-25">
			<div>
				<h2>소개</h2>
				<h3>
					저는 초등학교 4학년 때부터 개발에 관심이 생겨 디스코드
					봇으로 개발을 시작한 Migan이라 해요.
				</h3>
				<h3>
					현재는 웹과 디스코드 봇 등 여러 분야에 관심이 있어요.
					(나중에는 시스템도 다루고 싶어요.)
				</h3>
				<h3>
					또한 디스코드 봇이나 웹사이트 등 여러 토이 프로젝트들을 하고
					있어요.
				</h3>
				<h3>
					현재 제가 다룰 수 있는 프로그래밍 언어는 Go, JavaScript,
					TypeScript, Python이 있어요.
				</h3>
			</div>
			<div class="mt-10">
				<h2>그동안 해온 활동 (많이 초라 함.)</h2>
				<h3>
					2025. 09. 13. 선린인터넷고등학교 소프트웨어 나눔 축제 참가
				</h3>
				<h3>2020. 06. ??. 디스코드 봇으로 개발 입문</h3>
			</div>
		</div>
	</div>
</main>
