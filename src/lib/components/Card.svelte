<script lang="ts">
	export let image: string = '';
	export let name: string = '';
	export let category: string = '';
	export let slug: string = '';
</script>

<a data-sveltekit-preload-data="hover" href="/fabrics/{slug}" class="cursor-pointer">
	<div class="cursor-pointer overflow-hidden max-w-[300px] max-h-[300px]">
		<img
			src={image}
			alt={name}
			id={slug}
			class="w-[300px] h-[300px] object-cover hover:scale-110 transition-[transform] duration-500"
		/>
	</div>
	<div class="bg-slate-200 p-3">
		<p class="capitalize text-lg">
			{category}
		</p>
		<p>{name}</p>
	</div>
</a>
