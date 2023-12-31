<script lang="ts">
	export let image: string = '';
	export let name: string = '';
</script>

<div>
	<div class="cursor-pointer overflow-hidden max-w-[300px] max-h-[300px]">
		<img
			src={image}
			alt={name}
			class="w-[300px] h-[300px] object-cover hover:scale-110 transition-[transform] duration-500"
		/>
	</div>
</div>
