<script lang="ts">
	function scrollToTop() {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<footer class="bg-slate-200">
	<div class="w-full mx-auto max-w-screen-xl flex justify-between py-6">
		<p class="text-xl">Stonks Svelte Fun ®</p>
		<button class="text-xl cursor-pointer hover:underline" on:click={scrollToTop}
			>↑ Back To Top</button
		>
	</div>
</footer>
