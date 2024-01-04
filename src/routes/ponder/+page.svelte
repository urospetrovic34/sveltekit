<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/components/Card.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	export let data: PageData;
	$: ({ productsData, paginationCount } = data.products);
</script>

{#await productsData}
	<Loader />
{:then productsData}
	<div class="flex flex-col items-center">
		<div class="grid grid-cols-3 gap-4 my-5">
			{#each productsData as product (product.id)}
				<Card
					image={product.image}
					slug={product.slug}
					name={product.name}
					category={product.product_category.name}
				/>
			{/each}
		</div>
		<Pagination count={paginationCount} />
	</div>
{/await}
