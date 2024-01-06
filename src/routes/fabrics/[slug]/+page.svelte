<script lang="ts">
	import type { PageData } from './$types';
	import Loader from '$lib/components/Loader.svelte';
	export let data: PageData;
	$: ({ product } = data);
</script>

{#await product}
	<Loader />
{:then product}
	<div class="flex justify-center gap-10 mt-10">
		<img src={product.image} alt="Product" class="w-[500px] h-full" />
		<div class="flex flex-col justify-between">
			<div>
				<p class="text-2xl">
					{product.name}
				</p>
				<p class="text-lg">
					${product.price}/Meter
				</p>
			</div>
			<div class="flex flex-col gap-5">
				<div class="max-w-[70px]">
					<p>Quantity</p>
					<input
						id="quantity"
						type="text"
						name="quantity"
						class="p-2 text-sm tw-border-solid border border-solid border-gray w-full block focus:border-transparent focus:outline-none focus:border-black"
						placeholder=""
						required={false}
						disabled={true}
						value={1}
					/>
				</div>
				<button class="bg-slate-500 text-white w-full block p-2" type="button">
					Add to Cart
				</button>
			</div>
		</div>
	</div>
{/await}
