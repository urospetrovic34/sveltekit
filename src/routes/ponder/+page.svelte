<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/Card.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	function preload(src: string) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
	export let data: PageData;
	$: ({ productsData, paginationCount } = data.products);
</script>

{#await productsData}
	<Loader />
{:then productsData}
	<div class="flex flex-col items-center">
		<div class="grid grid-cols-3 gap-4 my-5">
			{#each productsData as product}
				{#await preload(product.image)}
					<Loader />
				{:then product}
					<Card
						image={product.image}
						slug={product.slug}
						name={product.name}
						category={product.product_category.name}
					/>
				{/await}
			{/each}
		</div>
		<Pagination count={paginationCount} />
	</div>
{/await}
