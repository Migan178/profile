<script lang="ts">
	import "bootstrap-icons/font/bootstrap-icons.css";
	import "../app.css";
	import Navbar from "../components/layouts/Navbar.svelte";
</script>

<svelte:head>
	<title>Migan</title>
</svelte:head>

<Navbar />
<slot />
