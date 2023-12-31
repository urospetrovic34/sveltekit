<script lang="ts">
	import '../app.css';
	import PrimaryHeader from '$lib/components/navigation/PrimaryHeader.svelte';
	import SecondaryHeader from '$lib/components/navigation/SecondaryHeader.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
</script>

<div class="flex flex-col h-screen">
	<PrimaryHeader />
	<SecondaryHeader />
	<main class="max-w-screen-xl w-full mx-auto flex flex-col flex-1">
		<slot />
	</main>
	<Footer />
</div>
