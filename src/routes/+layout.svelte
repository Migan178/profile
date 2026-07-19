<script lang="ts">
	import "bootstrap-icons/font/bootstrap-icons.css";
	import "../app.css";
	import Navbar from "../components/layouts/Navbar.svelte";
	import type { Snippet } from "svelte";

	let {
		children,
	}: {
		children?: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>Migan</title>
</svelte:head>

<Navbar />
{@render children?.()}
