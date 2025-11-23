<script lang="ts">
	import myProfile from "$lib/images/myprofile.png";
	import "bootstrap-icons/font/bootstrap-icons.css";
	import "../app.css";

	let clicked = false;

	function openOrCloseMenu() {
		const hamburgerOpen = document.getElementById(
			"hamburger_open",
		) as HTMLDivElement;

		const nav = document.getElementById("nav") as HTMLDivElement;

		if (clicked) {
			hamburgerOpen.classList.remove("opacity-100");
			hamburgerOpen.classList.add("opacity-0");

			for (let i = 52; i > 3; i--) {
				if (i == 52) {
					nav.classList.remove(`pb-52.5`);
				}

				nav.classList.remove(`pb-${i + 1}`);

				if (i === 4) {
					break;
				}

				nav.classList.add(`pb-${i}`);
			}
		} else {
			for (let i = 4; i < 53; i++) {
				if (i === 4) {
					nav.classList.remove("pb-4");
				}

				nav.classList.remove(`pb-${i - 1}`);
				if (i === 52) {
					nav.classList.add("pb-52.5");
				} else {
					nav.classList.add(`pb-${i}`);
				}
			}

			hamburgerOpen.classList.remove("opacity-0");
			hamburgerOpen.classList.add("opacity-100");
		}

		clicked = !clicked;
	}

	function closeMenuByProfile() {
		if (clicked) openOrCloseMenu();
	}
</script>

<head>
	<title>Migan</title>
</head>

<div
	class="bg-(--bg-color) shadow-xl shadow-black/30 rounded-3xl duration-500 fixed left-4 right-4 bottom-4 z-20"
	id="nav"
>
	<nav class="flex items-center px-8 py-3 justify-between">
		<a href="/" on:click={closeMenuByProfile}>
			<img src={myProfile} alt="My profile" width="50" />
		</a>
		<ul class="md:flex list-none hidden">
			<li class="px-8">
				<a href="/">홈</a>
			</li>
			<li class="px-8">
				<a href="/projects">프로젝트</a>
			</li>
		</ul>
		<ul class="md:flex list-none hidden pr-4">
			<li>
				<a href="https://github.com/Migan178" target="_blank">
					<i class="bi bi-github text-3xl"></i>
				</a>
			</li>
		</ul>
		<ul class="md:hidden block">
			<button
				class="bg-(--bg-color) border-none"
				type="button"
				on:click={openOrCloseMenu}
			>
				<i class="bi bi-list text-5xl text-(--text-color)"></i>
			</button>
		</ul>
	</nav>
	<div
		id="hamburger_open"
		class="pt-5 pb-5 bg-(--bg-color) rounded-b-3xl opacity-0 fixed duration-500 max-w-[100%] left-4 right-4 shadow-xl shadow-black/30 z-20"
	>
		<ul>
			<li class="ml-10 list-none mb-7 text-3xl">
				<a href="/" on:click={openOrCloseMenu}>홈</a>
			</li>
			<li class="ml-10 list-none mb-7 text-3xl">
				<a href="/projects" on:click={openOrCloseMenu}>프로젝트</a>
			</li>
		</ul>
		<ul>
			<li class="ml-10">
				<a href="https://github.com/Migan178" target="_blank">
					<i class="bi bi-github text-4xl"></i>
				</a>
			</li>
		</ul>
	</div>
</div>

<slot />
