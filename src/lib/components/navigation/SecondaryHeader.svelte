<script lang="ts">
	let links = [
		{ label: 'Ponder', slug: 'ponder' },
		{ label: 'Eloquent', slug: 'eloquent' },
		{ label: 'Resilient', slug: 'resilient' },
		{ label: 'Conundrum', slug: 'conundrum' },
		{ label: 'Zealous', slug: 'zealous' }
	];
</script>

<nav class="bg-slate-200">
	<div class="max-w-screen-xl py-5 mx-auto">
		<ul class="flex items-center justify-between">
			{#each links as { label, slug }}
				<li>
					<a data-sveltekit-preload-data="hover" class="hover:underline" href="/{slug}">
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
