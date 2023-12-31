<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Loader from '$lib/components/Loader.svelte';
	export let data;
	const { products } = data;
</script>

{#await products}
	<Loader />
{:then products}
	<div class="flex flex-col items-center">
		<div class="grid grid-cols-3 gap-4 mb-5">
			{#each products as product}
				<Card image={product.image} name={product.name} />
			{/each}
		</div>
	</div>
{/await}
